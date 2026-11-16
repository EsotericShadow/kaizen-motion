#!/usr/bin/env python3
"""Mac-only synthetic UDP -> separate-process CoreMIDI regression test.

Does not play audio, open a DAW, test a phone, or measure wireless latency.
Run from any directory. Requires Xcode command-line tools and Python 3.
"""
import json
from pathlib import Path
import queue
import signal
import socket
import struct
import subprocess
import threading
import time

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "build" / "desktop-delivery"


def lines_from(process, sink):
    for line in process.stdout:
        sink.put(line.strip())


def run():
    OUT.mkdir(parents=True, exist_ok=True)
    package = ROOT / "Packages" / "MotionCore"
    subprocess.run(["swift", "build", "--package-path", str(package), "--product",
                    "KaizenMotionBridge"], check=True)
    bin_path = subprocess.check_output(["swift", "build", "--package-path", str(package),
                                        "--show-bin-path"], text=True).strip()
    receiver_path = OUT / "receiver"
    subprocess.run(["xcrun", "clang", "-fblocks", str(Path(__file__).with_name(
        "midi_delivery_receiver.c")), "-framework", "CoreMIDI", "-framework",
        "CoreFoundation", "-o", str(receiver_path)], check=True)
    # Reserve an unused local port briefly; the bridge owns it during the test.
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as reserve:
        reserve.bind(("127.0.0.1", 0))
        port = reserve.getsockname()[1]
    bridge_log = (OUT / "bridge.log").open("w")
    bridge = subprocess.Popen([str(Path(bin_path) / "KaizenMotionBridge"), "--port", str(port)],
                              stdout=bridge_log, stderr=subprocess.STDOUT)
    receiver = None
    report = {"scope": "synthetic Mac loopback; no phone, DAW, audio or wireless proof",
              "checks": [], "status": "FAILED"}
    events = []
    raw = []
    incoming = queue.Queue()
    udp = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    udp.connect(("127.0.0.1", port))

    def collect(duration=0.12):
        deadline = time.monotonic() + duration
        while time.monotonic() < deadline:
            try:
                line = incoming.get(timeout=min(0.02, max(0.001, deadline-time.monotonic())))
            except queue.Empty:
                continue
            raw.append(line)
            parts = line.split()
            if len(parts) == 4 and parts[0] == "WORD":
                events.append({"word": int(parts[1], 16), "hostTimestamp": int(parts[3])})

    def check(name, condition):
        report["checks"].append({"name": name, "passed": bool(condition)})
        if not condition:
            raise AssertionError(name)

    def send(kind, payload, sequence, session=0x4B4D0011):
        udp.send(b"KMOT" + bytes([1, kind, 0, 8]) + struct.pack(
            ">IIQ", session, sequence, time.monotonic_ns()) + payload.ljust(8, b"\0"))

    try:
        receiver = subprocess.Popen([str(receiver_path)], stdout=subprocess.PIPE,
                                    stderr=subprocess.STDOUT, text=True)
        threading.Thread(target=lines_from, args=(receiver, incoming), daemon=True).start()
        deadline = time.monotonic() + 7
        while "READY" not in raw and time.monotonic() < deadline:
            collect(0.05)
        check("separate client connected to exactly one virtual source", "READY" in raw)
        check("bridge remains running", bridge.poll() is None)

        send(5, struct.pack(">I", 0x10203040), 0)
        udp.settimeout(2)
        reply = udp.recv(64)
        check("clock probe returns the matching session, sequence and token",
              len(reply) == 32 and reply[:8] == b"KMOT\x01\x06\x00\x08"
              and reply[8:16] == struct.pack(">II", 0x4B4D0011, 0)
              and reply[24:28] == struct.pack(">I", 0x10203040))

        # Every channel, one note with its bundled note-off and one controller.
        for channel in range(16):
            send(1, bytes([60+channel, 100, channel, 0])+struct.pack(">H", 40), channel*2+1)
            send(2, bytes([74, 93, channel]), channel*2+2)
        collect(0.25)
        expected = [(0x20900000 | (c << 16) | ((60+c) << 8) | 100,
                     0x20800000 | (c << 16) | ((60+c) << 8),
                     0x20B00000 | (c << 16) | (74 << 8) | 93) for c in range(16)]
        for channel, words in enumerate(expected):
            received = [e["word"] for e in events]
            check(f"channel {channel+1}: exact note-on/off and CC", all(
                received.count(word) == 1 for word in words))
        check("all emitted messages have host timestamps", all(e["hostTimestamp"] > 0 for e in events))

        before = len(events)
        send(1, bytes([20, 100, 0, 0])+struct.pack(">H", 40), 32)  # duplicate
        send(1, bytes([21, 100, 0, 0])+struct.pack(">H", 40), 31)  # out of order
        udp.send(b"not a valid motion packet")
        collect(0.1)
        check("duplicate, reordered and malformed packets do not emit MIDI", len(events) == before)

        before = len(events)
        send(4, b"", 33)  # explicit panic
        collect(0.1)
        expected_panic = [0x20B07B00 | (c << 16) for c in range(16)]
        check("panic clears every channel", [e["word"] for e in events[before:]] == expected_panic)
        check("panic has current host timestamps", all(e["hostTimestamp"] > 0 for e in events[before:]))

        # Wait for the 500 ms heartbeat watchdog; allow one timer quantum.
        before = len(events)
        collect(0.85)
        check("heartbeat timeout clears every channel", [e["word"] for e in events[before:]] == expected_panic)
        check("watchdog safety messages have host timestamps", all(e["hostTimestamp"] > 0 for e in events[before:]))

        before = len(events)
        for sequence in (0xFFFFFFFE, 0xFFFFFFFF, 0):
            send(2, bytes([1, sequence & 127, 0]), sequence, session=0x4B4D0022)
        collect(0.15)
        check("sequence rollover preserves three fresh events", len(events)-before == 3)
        # Mode/mute state must survive UDP reordering behind a newer musical packet,
        # and must not leak into DAW MIDI as program changes or controllers.
        state_probe = subprocess.Popen(["swift", str(Path(__file__).with_name("preview_state_probe.swift"))],
                                       stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
        try:
            ready = state_probe.stdout.readline().strip()
            check("preview observer ready", ready == "READY")
            send(2, bytes([74, 64, 0]), 50, session=0x53544154)
            collect(0.15)
            before = len(events)
            send(7, bytes([5, 1, 1]), 49, session=0x53544154)
            state_output = state_probe.communicate(timeout=7)[0]
            check("reordered CHIMERA preview state delivered across processes",
                  state_probe.returncode == 0 and "PASS:" in state_output)
            collect(0.1)
            check("preview state does not alter DAW MIDI", len(events) == before)
        finally:
            if state_probe.poll() is None:
                state_probe.kill()
                state_probe.wait(timeout=2)
        report["status"] = "PASSED"
    finally:
        udp.close()
        if receiver is not None:
            if receiver.poll() is None:
                receiver.terminate()
            receiver.wait(timeout=3)
        if bridge.poll() is None:
            bridge.send_signal(signal.SIGINT)
        bridge.wait(timeout=3)
        bridge_log.close()
        report["events"] = events
        (OUT / "receiver.log").write_text("\n".join(raw)+"\n")
        (OUT / "report.json").write_text(json.dumps(report, indent=2)+"\n")
        print(f"{report['status']}: {len(report['checks'])} checks; {OUT / 'report.json'}")


if __name__ == "__main__":
    run()

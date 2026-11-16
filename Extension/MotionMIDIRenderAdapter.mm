#import "MotionMIDIRenderAdapter.h"

#import <CoreMIDI/MIDIMessages.h>

#include <algorithm>
#include <array>
#include <atomic>
#include <cmath>
#include <cstdint>
#include <memory>

namespace {

enum class EventType : uint8_t { note, controlChange };

struct QueuedEvent {
    EventType type = EventType::note;
    uint8_t data1 = 0;
    uint8_t data2 = 0;
    uint8_t channel = 0;
    double durationSeconds = 0.075;
};

template <std::size_t Capacity>
class EventQueue {
public:
    bool push(const QueuedEvent& event) noexcept {
        if (producerGuard.test_and_set(std::memory_order_acquire)) {
            return false;
        }

        const auto currentWrite = writeIndex.load(std::memory_order_relaxed);
        const auto nextWrite = (currentWrite + 1) % Capacity;
        if (nextWrite == readIndex.load(std::memory_order_acquire)) {
            producerGuard.clear(std::memory_order_release);
            return false;
        }

        events[currentWrite] = event;
        writeIndex.store(nextWrite, std::memory_order_release);
        producerGuard.clear(std::memory_order_release);
        return true;
    }

    bool pop(QueuedEvent& event) noexcept {
        const auto currentRead = readIndex.load(std::memory_order_relaxed);
        if (currentRead == writeIndex.load(std::memory_order_acquire)) {
            return false;
        }
        event = events[currentRead];
        readIndex.store((currentRead + 1) % Capacity, std::memory_order_release);
        return true;
    }

    void clear() noexcept {
        readIndex.store(writeIndex.load(std::memory_order_acquire), std::memory_order_release);
    }

private:
    std::array<QueuedEvent, Capacity> events {};
    std::atomic<std::size_t> writeIndex { 0 };
    std::atomic<std::size_t> readIndex { 0 };
    std::atomic_flag producerGuard = ATOMIC_FLAG_INIT;
};

struct PendingNoteOff {
    bool active = false;
    AUEventSampleTime dueSampleTime = 0;
    uint8_t note = 0;
    uint8_t channel = 0;
};

class MotionMIDIKernel {
public:
    void initialize(double newSampleRate) noexcept {
        sampleRate.store(std::max(1.0, newSampleRate), std::memory_order_release);
    }

    void deinitialize() noexcept {
        queue.clear();
        for (auto& noteOff : noteOffs) noteOff.active = false;
    }

    void reset() noexcept { deinitialize(); }

    bool enqueue(const QueuedEvent& event) noexcept {
        if (queue.push(event)) return true;
        droppedEvents.fetch_add(1, std::memory_order_relaxed);
        return false;
    }

    AUAudioUnitStatus render(
        const AudioTimeStamp* timestamp,
        AUAudioFrameCount frameCount,
        const AURenderEvent* renderEvents
    ) noexcept {
        if (frameCount > maximumFrames.load(std::memory_order_relaxed)) {
            return kAudioUnitErr_TooManyFramesToProcess;
        }

        const auto bufferStart = static_cast<AUEventSampleTime>(timestamp->mSampleTime);
        const auto bufferEnd = bufferStart + static_cast<AUEventSampleTime>(frameCount);
        passThroughIncomingMIDI(renderEvents);

        for (auto& pending : noteOffs) {
            if (pending.active && pending.dueSampleTime < bufferEnd) {
                emit(MIDI1UPNoteOff(0, pending.channel, pending.note, 0),
                     std::max(bufferStart, pending.dueSampleTime));
                pending.active = false;
            }
        }

        if (bypassed.load(std::memory_order_relaxed)) return noErr;

        QueuedEvent event;
        while (queue.pop(event)) {
            if (event.type == EventType::note) {
                emit(MIDI1UPNoteOn(0, event.channel, event.data1, event.data2), bufferStart);
                scheduleNoteOff(event, bufferStart);
            } else {
                emit(MIDI1UPControlChange(0, event.channel, event.data1, event.data2), bufferStart);
            }
        }

        return noErr;
    }

    void setMIDIOutput(AUMIDIEventListBlock block) { midiOutput = block; }

    std::atomic<double> sampleRate { 44'100.0 };
    std::atomic<AUAudioFrameCount> maximumFrames { 1'024 };
    std::atomic<bool> bypassed { false };
    std::atomic<NSUInteger> droppedEvents { 0 };

private:
    void scheduleNoteOff(const QueuedEvent& event, AUEventSampleTime start) noexcept {
        PendingNoteOff* slot = nullptr;
        for (auto& pending : noteOffs) {
            if (!pending.active) {
                slot = &pending;
                break;
            }
        }
        if (slot == nullptr) slot = &noteOffs.front();

        slot->active = true;
        slot->note = event.data1;
        slot->channel = event.channel;
        const auto duration = static_cast<AUEventSampleTime>(
            std::max(1.0, event.durationSeconds * sampleRate.load(std::memory_order_relaxed))
        );
        slot->dueSampleTime = start + duration;
    }

    void emit(MIDIMessage_32 message, AUEventSampleTime sampleTime) noexcept {
        if (midiOutput == nil) return;
        MIDIEventList list {};
        MIDIEventPacket* packet = MIDIEventListInit(&list, kMIDIProtocol_1_0);
        packet = MIDIEventListAdd(
            &list,
            sizeof(MIDIEventList),
            packet,
            0,
            1,
            reinterpret_cast<const UInt32*>(&message)
        );
        if (packet != nullptr) midiOutput(sampleTime, 0, &list);
    }

    void passThroughIncomingMIDI(const AURenderEvent* event) noexcept {
        if (midiOutput == nil) return;
        while (event != nullptr) {
            if (event->head.eventType == AURenderEventMIDIEventList) {
                midiOutput(event->head.eventSampleTime, 0, &event->MIDIEventsList.eventList);
            }
            event = event->head.next;
        }
    }

    EventQueue<256> queue;
    std::array<PendingNoteOff, 32> noteOffs {};
    AUMIDIEventListBlock __strong midiOutput = nil;
};

} // namespace

@implementation MotionMIDIRenderAdapter {
    std::unique_ptr<MotionMIDIKernel> _kernel;
}

- (instancetype)init {
    self = [super init];
    if (self) _kernel = std::make_unique<MotionMIDIKernel>();
    return self;
}

- (void)initializeWithSampleRate:(double)sampleRate { _kernel->initialize(sampleRate); }
- (void)deinitialize { _kernel->deinitialize(); }
- (void)reset { _kernel->reset(); }

- (AUAudioFrameCount)maximumFramesToRender { return _kernel->maximumFrames.load(); }
- (void)setMaximumFramesToRender:(AUAudioFrameCount)value { _kernel->maximumFrames.store(value); }
- (BOOL)isBypassed { return _kernel->bypassed.load(); }
- (void)setBypassed:(BOOL)value { _kernel->bypassed.store(value); }
- (NSUInteger)droppedEventCount { return _kernel->droppedEvents.load(); }

- (void)setMIDIOutputEventListBlock:(AUMIDIEventListBlock)block {
    _kernel->setMIDIOutput(block);
}

- (AUInternalRenderBlock)internalRenderBlock {
    MotionMIDIKernel* kernel = _kernel.get();
    return ^AUAudioUnitStatus(
        AudioUnitRenderActionFlags*,
        const AudioTimeStamp* timestamp,
        AUAudioFrameCount frameCount,
        NSInteger,
        AudioBufferList*,
        const AURenderEvent* events,
        AURenderPullInputBlock
    ) {
        return kernel->render(timestamp, frameCount, events);
    };
}

- (void)enqueueNote:(uint8_t)note
           velocity:(uint8_t)velocity
            channel:(uint8_t)channel
    durationSeconds:(double)durationSeconds {
    _kernel->enqueue({ EventType::note, note, velocity, static_cast<uint8_t>(channel & 0x0F), durationSeconds });
}

- (void)enqueueControlChange:(uint8_t)controller
                       value:(uint8_t)value
                     channel:(uint8_t)channel {
    _kernel->enqueue({ EventType::controlChange,
                       static_cast<uint8_t>(controller & 0x7F),
                       static_cast<uint8_t>(value & 0x7F),
                       static_cast<uint8_t>(channel & 0x0F),
                       0 });
}

@end

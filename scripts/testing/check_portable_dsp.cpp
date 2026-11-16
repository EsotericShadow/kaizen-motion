#include "MotionToneDSP.h"
#include <array>
#include <cmath>
#include <cstdio>
#include <cstdlib>

static void require(bool condition, const char* message) {
    if (!condition) { std::fprintf(stderr, "%s\n", message); std::exit(1); }
}
int main() {
    // Compile this caller as C++, link the DSP compiled as C: verifies the wrapper ABI.
    std::array<float, 4800> audio{};
    auto* tone = KMToneCreate(48000);
    require(tone != nullptr, "tone allocation");
    KMToneSet(tone, 440, 1);
    KMToneRender(tone, audio.data(), static_cast<uint32_t>(audio.size()));
    double energy = 0;
    for (float value : audio) {
        require(std::isfinite(value), "non-finite tone");
        energy += value * value;
    }
    require(energy > 1, "silent tone");
    KMToneDestroy(tone);
    auto* shaker = KMShakerCreate(48000);
    require(shaker != nullptr && KMShakerTrigger(shaker, 100), "shaker allocation/trigger");
    KMShakerRender(shaker, audio.data(), static_cast<uint32_t>(audio.size()));
    bool immediate = false;
    for (int i = 0; i < 32; ++i) immediate = immediate || std::abs(audio[i]) > 0.001f;
    require(immediate, "missing immediate shaker onset");
    KMShakerPanic(shaker);
    KMShakerRender(shaker, audio.data(), static_cast<uint32_t>(audio.size()));
    for (float value : audio) require(value == 0, "panic left sound active");
    KMShakerDestroy(shaker);
    std::puts("PASS: C++ caller linked to C DSP; tone, immediate shaker onset and panic. This is a local ABI check, not Windows/Android execution.");
}

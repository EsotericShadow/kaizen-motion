#include "MotionToneDSP.h"
#include <stdatomic.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>

_Static_assert(ATOMIC_LLONG_LOCK_FREE == 2, "Tone parameters must be lock-free");
_Static_assert(ATOMIC_INT_LOCK_FREE == 2, "Trigger queue indices must be lock-free");
struct KMTone {
    _Atomic(uint64_t) targets;
    _Atomic(uint32_t) vowelTarget;
    _Atomic(uint32_t) peak;
    double sampleRate, phase, frequency, gain, pitchSmoothing, gainSmoothing;
    double vowelMix, weights[16];
};
void KMToneSetVowel(KMTone *tone, float position) {
    if (!tone) return;
    float value = isfinite(position) ? fminf(1, fmaxf(-1, position)) : -1;
    uint32_t bits;
    memcpy(&bits, &value, sizeof(bits));
    atomic_store_explicit(&tone->vowelTarget, bits, memory_order_relaxed);
}
void KMToneSet(KMTone *tone, float frequency, float gain) {
    if (!tone) return;
    float pair[2] = {
        isfinite(frequency) ? fminf(4000, fmaxf(40, frequency)) : 220,
        isfinite(gain) ? fminf(1, fmaxf(0, gain)) : 0
    };
    uint64_t packed;
    memcpy(&packed, pair, sizeof(packed));
    atomic_store_explicit(&tone->targets, packed, memory_order_relaxed);
}
KMTone *KMToneCreate(double sampleRate) {
    if (!isfinite(sampleRate) || sampleRate < 8000 || sampleRate > 384000) return NULL;
    KMTone *tone = calloc(1, sizeof(KMTone));
    if (!tone) return NULL;
    atomic_init(&tone->targets, 0);
    atomic_init(&tone->vowelTarget, 0);
    atomic_init(&tone->peak, 0);
    tone->sampleRate = sampleRate;
    tone->frequency = 220;
    tone->pitchSmoothing = 1 - exp(-1 / (0.018 * sampleRate));
    tone->gainSmoothing = 1 - exp(-1 / (0.008 * sampleRate));
    KMToneSet(tone, 220, 0);
    KMToneSetVowel(tone, -1);
    return tone;
}
void KMToneDestroy(KMTone *tone) { free(tone); }
static void kmStorePeak(_Atomic(uint32_t) *meter, float peak) {
    uint32_t bits;
    memcpy(&bits, &peak, sizeof(bits));
    uint32_t previous = atomic_load_explicit(meter, memory_order_relaxed);
    if (bits > previous) atomic_compare_exchange_strong_explicit(meter, &previous, bits, memory_order_relaxed, memory_order_relaxed);
}
static float kmTakePeak(_Atomic(uint32_t) *meter) {
    uint32_t bits = atomic_exchange_explicit(meter, 0, memory_order_relaxed);
    float value;
    memcpy(&value, &bits, sizeof(value));
    return value;
}
float KMToneTakePeak(KMTone *tone) { return tone ? kmTakePeak(&tone->peak) : 0; }
void KMToneRender(KMTone *tone, float *output, uint32_t count) {
    if (!tone || !output) return;
    const uint64_t packed = atomic_load_explicit(&tone->targets, memory_order_relaxed);
    float pair[2];
    memcpy(pair, &packed, sizeof(packed));
    uint32_t vowelBits = atomic_load_explicit(&tone->vowelTarget, memory_order_relaxed);
    float vowel;
    memcpy(&vowel, &vowelBits, sizeof(vowel));
    double desired[16] = {0};
    if (vowel >= 0 || tone->vowelMix > 0.00001) {
        // Designed vowel colours, not a speech or vocal-identity model.
        const double vowels[3][3] = {{350, 900, 2200}, {800, 1250, 2900}, {300, 2300, 3100}};
        const double bandwidth[3] = {180, 280, 450};
        double p = fmax(0, vowel) * 2;
        int left = p < 1 ? 0 : 1;
        double fraction = p - left;
        double energy = 0;
        for (int h = 0; h < 16; ++h) {
            double frequency = pair[0] * (h + 1);
            double weight = 0.045 / (h + 1);
            for (int band = 0; band < 3; ++band) {
                double center = vowels[left][band] * (1 - fraction) + vowels[left + 1][band] * fraction;
                double distance = (frequency - center) / bandwidth[band];
                weight += exp(-0.5 * distance * distance) * (band == 0 ? 1 : 0.65) / sqrt(h + 1.0);
            }
            if (h == 0) weight += 0.30;
            desired[h] = weight;
            energy += weight * weight;
        }
        double normalization = 1 / sqrt(fmax(energy, 0.00001));
        for (int h = 0; h < 16; ++h) desired[h] *= normalization;
    }
    float peak = 0;
    for (uint32_t i = 0; i < count; ++i) {
        tone->frequency += (pair[0] - tone->frequency) * tone->pitchSmoothing;
        tone->gain += (pair[1] - tone->gain) * tone->gainSmoothing;
        tone->vowelMix += ((vowel >= 0 ? 1 : 0) - tone->vowelMix) * tone->gainSmoothing;
        double sample = sin(tone->phase) + 0.08 * sin(2 * tone->phase);
        if (tone->vowelMix > 0.00001 && tone->gain > 0.0000001) {
            double rich = 0;
            for (int h = 0; h < 16; ++h) {
                tone->weights[h] += (desired[h] - tone->weights[h]) * tone->pitchSmoothing;
                double aliasFade = fmin(1, fmax(0, (tone->sampleRate * 0.45 - tone->frequency * (h + 1)) / (tone->sampleRate * 0.07)));
                if (aliasFade > 0) rich += sin(tone->phase * (h + 1)) * tone->weights[h] * aliasFade;
            }
            sample = sample * (1 - tone->vowelMix) + rich * tone->vowelMix;
        }
        output[i] = (float)(sample * tone->gain * 0.24);
        peak = fmaxf(peak, fabsf(output[i]));
        tone->phase += 6.283185307179586 * tone->frequency / tone->sampleRate;
        if (tone->phase >= 6.283185307179586) tone->phase -= 6.283185307179586;
    }
    kmStorePeak(&tone->peak, peak);
}

// Real recorded granular shaker texture; loaded as immutable PCM at compile time.
#include "ShakerSampleBank.h"
typedef struct {
    float samplePosition, sampleRate;
    uint32_t grainAge, grainLength;
    uint32_t sampleIndex;
    float envelope, decay, gain, noiseMemory, y1, y2, coefficient, radiusSquared;
    float grainEnvelope, grainDecay, collisionProbability;
    uint64_t noise;
    uint8_t instrument;
    float phase, phaseIncrement, toneEnvelope, toneDecay;
} KMImpactVoice;
struct KMShaker {
    _Atomic(uint32_t) head, tail, generation;
    _Atomic(uint32_t) peak, energy;
    float rattleEnergy, attackMix, releaseMix;
    struct { uint8_t velocity, instrument, direction; uint32_t generation; } events[256];
    KMImpactVoice voices[64];
    uint32_t nextVoice, renderGeneration;
    uint64_t seed;
    double sampleRate;
};
static float kmRandom(uint64_t *seed) {
    *seed = *seed * 6364136223846793005ULL + 1442695040888963407ULL;
    return (float)((double)((int64_t)*seed >> 32) / 2147483647.0);
}
KMShaker *KMShakerCreate(double sampleRate) {
    if (!isfinite(sampleRate) || sampleRate < 8000 || sampleRate > 384000) return NULL;
    KMShaker *s = calloc(1, sizeof(KMShaker));
    if (!s) return NULL;
    atomic_init(&s->head, 0); atomic_init(&s->tail, 0); atomic_init(&s->generation, 0);
    atomic_init(&s->peak, 0);
    atomic_init(&s->energy, 0);
    s->attackMix = (float)(1 - exp(-1 / (sampleRate * .004)));
    s->releaseMix = (float)(1 - exp(-1 / (sampleRate * .070)));
    s->sampleRate = sampleRate;
    s->seed = 0x9E3779B97F4A7C15ULL;
    return s;
}
void KMShakerDestroy(KMShaker *s) { free(s); }
float KMShakerTakePeak(KMShaker *s) { return s ? kmTakePeak(&s->peak) : 0; }
int KMShakerTrigger(KMShaker *s, uint8_t velocity) { return KMShakerTriggerWall(s, velocity, 0); }
int KMShakerTriggerWall(KMShaker *s, uint8_t velocity, uint8_t wall) {
    if (wall > 5) return 0;
    return KMShakerTriggerInstrument(s, velocity, 0, wall);
}
int KMShakerTriggerInstrument(KMShaker *s, uint8_t velocity, uint8_t instrument, uint8_t direction) {
    if (!s || !velocity || instrument > 4 || direction > 5) return 0;
    uint32_t head = atomic_load_explicit(&s->head, memory_order_relaxed);
    uint32_t tail = atomic_load_explicit(&s->tail, memory_order_acquire);
    if (head - tail >= 256) return 0;
    s->events[head & 255].velocity = velocity > 127 ? 127 : velocity;
    s->events[head & 255].instrument = instrument;
    s->events[head & 255].direction = direction;
    s->events[head & 255].generation = atomic_load_explicit(&s->generation, memory_order_relaxed);
    atomic_store_explicit(&s->head, head + 1, memory_order_release);
    return 1;
}
void KMShakerSetEnergy(KMShaker *s, float energy) {
    if (!s) return;
    energy = isfinite(energy) ? fminf(1, fmaxf(0, energy)) : 0;
    uint32_t bits; memcpy(&bits, &energy, sizeof(bits));
    atomic_store_explicit(&s->energy, bits, memory_order_release);
}
void KMShakerPanic(KMShaker *s) { if (s) { KMShakerSetEnergy(s, 0); atomic_fetch_add_explicit(&s->generation, 1, memory_order_release); } }
void KMShakerRender(KMShaker *s, float *output, uint32_t count) {
    if (!s || !output) return;
    uint32_t tail = atomic_load_explicit(&s->tail, memory_order_relaxed);
    uint32_t head = atomic_load_explicit(&s->head, memory_order_acquire);
    uint32_t generation = atomic_load_explicit(&s->generation, memory_order_acquire);
    if (s->renderGeneration != generation) {
        memset(s->voices, 0, sizeof(s->voices));
        s->rattleEnergy = 0;
        s->renderGeneration = generation;
    }
    // Independent stochastic grain collisions inspired by the particle-event approach
    // described in Cook's PhISEM research. Original implementation, no STK code/assets.
    // https://soundlab.cs.princeton.edu/research/controllers/shakers/
    const float frequencies[5] = { 1800, 5200, 2800, 3200, 1800 };
    const float lengths[5] = { 0.038f, 0.075f, 0.045f, 0.022f, 0.012f };
    while (tail != head) {
        uint32_t event = tail++ & 255;
        if (s->events[event].generation != generation) continue;
        unsigned instrument = s->events[event].instrument;
        unsigned direction = s->events[event].direction;
        float velocity = s->events[event].velocity / 127.0f;
        KMImpactVoice *v = &s->voices[s->nextVoice++ & 63];
        memset(v, 0, sizeof(*v));
        float variation = kmRandom(&s->seed);
        // Decorrelate each cloud instead of starting two adjacent positions in one stream.
        uint64_t independent = s->seed ^ ((uint64_t)s->nextVoice * 0x9E3779B97F4A7C15ULL);
        independent ^= independent >> 32;
        independent *= 0xD6E8FEB86659FD93ULL;
        independent ^= independent >> 32;
        v->noise = independent;
        v->instrument = instrument;
        v->sampleIndex = (uint32_t)(independent >> 32) % KM_SHAKER_SAMPLE_COUNT;
        v->sampleRate = (float)(48000 / s->sampleRate) * (1 + variation * 0.07f);
        if (instrument == 0) {
            v->gain = powf(velocity, 1.3f) * 1.8f;
            v->envelope = 1;
            continue;
        }
        float frequency = fminf((float)s->sampleRate * 0.4f, frequencies[instrument] * (1 + 0.10f * variation + 0.12f * velocity));
        v->instrument = instrument;
        float radius = (float)exp(-1 / (s->sampleRate * (instrument == 1 ? 0.003 : 0.00045)));
        v->coefficient = 2 * radius * (float)cos(6.283185307179586 * frequency / s->sampleRate);
        v->radiusSquared = radius * radius;
        v->envelope = 1;
        v->gain = sqrtf(velocity) * (0.90f + 0.08f * kmRandom(&s->seed));
        v->grainEnvelope = 0.25f; // Immediate small collision; the main rattle scatters in time.
        v->grainDecay = (float)exp(-1 / (s->sampleRate * 0.00085));
        v->collisionProbability = (float)((260 + 1400 * velocity * velocity) / s->sampleRate);
        v->decay = (float)exp(-1 / (s->sampleRate * lengths[instrument] * (0.7 + 0.8 * velocity) * (1 + variation * 0.16)));
        // Drum articulation follows the stroke axis, never the hit count or velocity
        // layer. Each family remains stable while velocity changes its excitation.
        const float drumHz[6] = { 190, 175, 245, 225, 105, 135 };
        v->phaseIncrement = (float)(6.283185307179586 * drumHz[direction] * (1 + variation * 0.025) / s->sampleRate);
        v->toneEnvelope = instrument == 4 ? 1 : 0;
        v->toneDecay = (float)exp(-1 / (s->sampleRate * (direction >= 4 ? 0.095 : 0.055)));
    }
    atomic_store_explicit(&s->tail, tail, memory_order_release);
    uint32_t energyBits = atomic_load_explicit(&s->energy, memory_order_acquire);
    float targetEnergy; memcpy(&targetEnergy, &energyBits, sizeof(targetEnergy));
    float peak = 0;
    for (uint32_t frame = 0; frame < count; ++frame) {
        s->rattleEnergy += (targetEnergy - s->rattleEnergy) * (targetEnergy > s->rattleEnergy ? s->attackMix : s->releaseMix);
        if (targetEnergy == 0 && s->rattleEnergy < .0001f) s->rattleEnergy = 0;
        float energy = s->rattleEnergy;
        if (energy > .0001f && (kmRandom(&s->seed) + 1) * .5f < (400 + 1400 * sqrtf(energy)) / s->sampleRate) {
            KMImpactVoice *v = &s->voices[s->nextVoice++ & 63];
            memset(v, 0, sizeof(*v));
            v->sampleIndex = (uint32_t)(s->seed >> 32) % KM_SHAKER_SAMPLE_COUNT;
            v->samplePosition = (kmRandom(&s->seed) + 1) * .5f * (KM_SHAKER_SAMPLE_FRAMES * .5f);
            v->sampleRate = (float)(48000 / s->sampleRate) * (1 + kmRandom(&s->seed) * .06f);
            v->grainLength = (uint32_t)(s->sampleRate * (.006 + .008 * fabsf(kmRandom(&s->seed))));
            v->gain = .9f * powf(energy, .65f); v->envelope = 1;
        }
        float value = 0;
        for (int i = 0; i < 64; ++i) {
            KMImpactVoice *v = &s->voices[i];
            if (v->envelope < 0.0001f && v->toneEnvelope < 0.0001f) continue;
            if (v->instrument == 0) {
                uint32_t position = (uint32_t)v->samplePosition;
                if (position + 1 >= KM_SHAKER_SAMPLE_FRAMES) { v->envelope = 0; continue; }
                float fraction = v->samplePosition - position;
                const int16_t *pcm = kmShakerPCM[v->sampleIndex];
                float window = 1;
                if (v->grainLength) {
                    if (v->grainAge >= v->grainLength) { v->envelope = 0; continue; }
                    float u = (float)v->grainAge++ / v->grainLength;
                    window = 16 * u * u * (1-u) * (1-u);
                }
                value += (pcm[position] + fraction * (pcm[position + 1] - pcm[position])) * (v->gain * window / 32768.0f);
                v->samplePosition += v->sampleRate;
                continue;
            }
            if ((kmRandom(&v->noise) + 1) * 0.5f < v->collisionProbability * sqrtf(v->envelope)) {
                float collision = 0.2f + 0.8f * fabsf(kmRandom(&v->noise));
                v->grainEnvelope = fminf(1.8f, v->grainEnvelope + collision);
            }
            float noise = kmRandom(&v->noise);
            float high = noise - v->noiseMemory * 0.86f;
            v->noiseMemory = noise;
            float excitation = high * v->grainEnvelope;
            float resonant = excitation * 0.12f + v->coefficient * v->y1 - v->radiusSquared * v->y2;
            v->y2 = v->y1;
            v->y1 = resonant;
            if (v->instrument == 4) {
                v->phase += v->phaseIncrement * (1 + 0.6f * v->toneEnvelope);
                if (v->phase > 6.283185307179586f) v->phase -= 6.283185307179586f;
                value += (sinf(v->phase) * v->toneEnvelope * 0.65f + excitation * v->envelope * 0.12f) * v->gain;
                v->toneEnvelope *= v->toneDecay;
            } else {
                value += (excitation * 0.15f + resonant * (v->instrument == 1 ? 0.28f : 0.75f)) * v->envelope * v->gain;
            }
            v->grainEnvelope *= v->grainDecay;
            v->envelope *= v->decay;
        }
        output[frame] = 0.95f * value / (0.95f + fabsf(value));
        peak = fmaxf(peak, fabsf(output[frame]));
    }
    kmStorePeak(&s->peak, peak);
}

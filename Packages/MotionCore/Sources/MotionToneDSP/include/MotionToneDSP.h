#pragma once
#include <stdint.h>
#ifdef __cplusplus
extern "C" {
#endif
typedef struct KMTone KMTone;
KMTone *KMToneCreate(double sampleRate);
void KMToneDestroy(KMTone *tone);
void KMToneSet(KMTone *tone, float frequency, float gain);
// -1 preserves the original tone; 0...1 sweeps OO -> AH -> EE.
void KMToneSetVowel(KMTone *tone, float position);
void KMToneRender(KMTone *tone, float *output, uint32_t count);
float KMToneTakePeak(KMTone *tone);
typedef struct KMShaker KMShaker;
KMShaker *KMShakerCreate(double sampleRate);
void KMShakerDestroy(KMShaker *shaker);
// Single control producer; false means the bounded event queue is full.
int KMShakerTrigger(KMShaker *shaker, uint8_t velocity);
int KMShakerTriggerWall(KMShaker *shaker, uint8_t velocity, uint8_t wall);
// Instrument 0...4: shaker, tambourine, maraca, cabasa, hand drum. Direction 0...5.
int KMShakerTriggerInstrument(KMShaker *shaker, uint8_t velocity, uint8_t instrument, uint8_t direction);
void KMShakerSetEnergy(KMShaker *shaker, float energy);
void KMShakerPanic(KMShaker *shaker);
void KMShakerRender(KMShaker *shaker, float *output, uint32_t count);
float KMShakerTakePeak(KMShaker *shaker);
#ifdef __cplusplus
}
#endif

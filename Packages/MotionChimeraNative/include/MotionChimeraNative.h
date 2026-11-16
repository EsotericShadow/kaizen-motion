#pragma once
#include <stdint.h>
#ifdef __cplusplus
extern "C" {
#endif
// CHIMERA by Jameson Hodge (MIT). One control writer, one render reader.
// Creation/destruction run outside audio; destruction requires rendering stopped.
typedef struct KMChimera KMChimera;
KMChimera *KMChimeraCreate(double sampleRate);
void KMChimeraDestroy(KMChimera *voice);
void KMChimeraSet(KMChimera *voice, float frequency, float vowel, float breath, float gain);
void KMChimeraRender(KMChimera *voice, float *output, uint32_t frames);
// UI thread only; one caller. Returns required byte count, zero on contention.
uint32_t KMChimeraCopySceneJSON(KMChimera *voice, uint8_t *output, uint32_t capacity);
float KMChimeraTakePeak(KMChimera *voice);
#ifdef __cplusplus
}
#endif

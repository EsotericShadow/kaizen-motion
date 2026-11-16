#![allow(non_snake_case)]
use std::cell::UnsafeCell;
use std::sync::atomic::{AtomicU32, AtomicU64, Ordering};
use chimera::anatomy::human::{ArticPatch, BodyName, HumanArtic, HumanVocalTract, BODY_MALE, NEUTRAL, N_ARTIC};
use chimera::phonetics::planner::vowel_artic;
use chimera::voice::human_voice::{HumanVoice, SourcePatch};

struct RenderState {
    voice: HumanVoice,
    vowels: [ArticPatch; 3],
    control_remaining: usize,
    gain: f32,
    gain_target: f32,
    gain_mix: f32,
    breath: f64,
}
// Parameters alone are shared. RenderState is exclusively owned by one render
// caller; control calls never create a mutable reference to the engine.
#[repr(C)]
pub struct KMChimera {
    pitch_gain: AtomicU64,
    vowel_breath: AtomicU64,
    peak: AtomicU32,
    render: UnsafeCell<RenderState>,
    scene_version: AtomicU32,
    scene_artic: [AtomicU32; N_ARTIC],
    // Only the single UI snapshot caller may use this independent geometry mirror.
    scene_tract: UnsafeCell<HumanVocalTract>,
}
unsafe impl Sync for KMChimera {}
fn pack(a: f32, b: f32) -> u64 { (a.to_bits() as u64) | ((b.to_bits() as u64) << 32) }
fn unpack(x: u64) -> (f32, f32) { (f32::from_bits(x as u32), f32::from_bits((x >> 32) as u32)) }
fn finite(x: f32, fallback: f32, lo: f32, hi: f32) -> f32 { if x.is_finite() { x.clamp(lo, hi) } else { fallback } }

#[unsafe(no_mangle)]
pub extern "C" fn KMChimeraCreate(sampleRate: f64) -> *mut KMChimera {
    if !sampleRate.is_finite() || !(16000.0..=192000.0).contains(&sampleRate) { return std::ptr::null_mut(); }
    // All calibration parsing and model allocation happens before render starts.
    let vowels = ["u", "a", "i"].map(|ipa| vowel_artic(ipa, BodyName::Male.into()).expect("pinned CHIMERA vowel"));
    let mut voice = HumanVoice::with_defaults(sampleRate);
    voice.set_articulation(&vowels[1], Some(true));
    voice.set_source(&SourcePatch { f0: Some(311.0), glide: Some(0.018), pressure: Some(8.0), drift: Some(0.0), roughness: Some(0.05), ..Default::default() });
    Box::into_raw(Box::new(KMChimera {
        pitch_gain: AtomicU64::new(pack(311.0, 0.0)), vowel_breath: AtomicU64::new(pack(0.5, 0.55)), peak: AtomicU32::new(0),
        scene_version: AtomicU32::new(0),
        scene_artic: std::array::from_fn(|i| AtomicU32::new((voice.artic.x.to_array()[i] as f32).to_bits())),
        scene_tract: UnsafeCell::new(HumanVocalTract::new(BODY_MALE)),
        render: UnsafeCell::new(RenderState { voice, vowels, control_remaining: 0, gain: 0.0, gain_target: 0.0,
            gain_mix: (1.0 - (-1.0 / (sampleRate * 0.008)).exp()) as f32, breath: 0.55 }),
    }))
}
#[unsafe(no_mangle)]
pub unsafe extern "C" fn KMChimeraDestroy(voice: *mut KMChimera) {
    if !voice.is_null() { drop(unsafe { Box::from_raw(voice) }); }
}
#[unsafe(no_mangle)]
pub unsafe extern "C" fn KMChimeraSet(voice: *const KMChimera, frequency: f32, vowel: f32, breath: f32, gain: f32) {
    let Some(v) = (unsafe { voice.as_ref() }) else { return; };
    v.vowel_breath.store(pack(finite(vowel, 0.5, 0.0, 1.0), finite(breath, 0.55, 0.0, 1.0)), Ordering::Relaxed);
    v.pitch_gain.store(pack(finite(frequency, 311.0, 60.0, 1100.0), finite(gain, 0.0, 0.0, 0.8)), Ordering::Release);
}
#[unsafe(no_mangle)]
pub unsafe extern "C" fn KMChimeraRender(voice: *const KMChimera, output: *mut f32, frames: u32) {
    if output.is_null() || frames == 0 { return; }
    let out = unsafe { std::slice::from_raw_parts_mut(output, frames as usize) };
    let Some(v) = (unsafe { voice.as_ref() }) else { out.fill(0.0); return; };
    let r = unsafe { &mut *v.render.get() };
    let mut offset = 0;
    let mut peak = 0.0f32;
    while offset < out.len() {
        if r.control_remaining == 0 {
            let (frequency, gain) = unpack(v.pitch_gain.load(Ordering::Acquire));
            let (vowel, breath) = unpack(v.vowel_breath.load(Ordering::Relaxed));
            r.gain_target = gain;
            r.breath += (breath as f64 - r.breath) * (1.0 - (-128.0 / (r.voice.fs_out * 0.06)).exp());
            let p = (vowel as f64 * 2.0).clamp(0.0, 2.0);
            let i = if p < 1.0 { 0 } else { 1 };
            let t = p - i as f64;
            let artic = ArticPatch::blend(&[(1.0-t, r.vowels[i]), (t, r.vowels[i+1])]);
            r.voice.set_articulation(&artic, Some(true));
            r.voice.set_source(&SourcePatch { f0: Some(frequency as f64), pressure: Some(4.0 + 8.0 * r.breath), ..Default::default() });
            r.voice.set_gate(if gain > 0.0 { 1.0 } else { 0.0 });
            r.control_remaining = 128;
        }
        let n = r.control_remaining.min(out.len() - offset);
        let chunk = &mut out[offset..offset+n];
        if r.gain_target == 0.0 && r.gain < 0.00001 {
            r.gain = 0.0;
            chunk.fill(0.0);
        } else {
            r.voice.render(chunk);
            for sample in chunk {
                r.gain += (r.gain_target - r.gain) * r.gain_mix;
                // The upstream airway already includes a limiter. Reserve mix headroom.
                let value = *sample * r.gain;
                *sample = if value.is_finite() { value.clamp(-0.9, 0.9) } else { 0.0 };
                peak = peak.max(sample.abs());
            }
        }
        offset += n;
        r.control_remaining -= n;
    }
    // Bounded, allocation-free publication. UI never reads render-owned memory.
    v.scene_version.fetch_add(1, Ordering::SeqCst);
    for (slot, value) in v.scene_artic.iter().zip(r.voice.artic.x.to_array()) {
        slot.store((value as f32).to_bits(), Ordering::SeqCst);
    }
    v.scene_version.fetch_add(1, Ordering::SeqCst);
    v.peak.fetch_max(peak.to_bits(), Ordering::Relaxed);
}
#[unsafe(no_mangle)]
pub unsafe extern "C" fn KMChimeraTakePeak(voice: *const KMChimera) -> f32 {
    unsafe { voice.as_ref() }.map_or(0.0, |v| f32::from_bits(v.peak.swap(0, Ordering::Relaxed)))
}

/// UI-only. One snapshot caller, never the audio thread. Returns required bytes;
/// caller supplies capacity and owns the output. A contended snapshot returns zero.
#[unsafe(no_mangle)]
pub unsafe extern "C" fn KMChimeraCopySceneJSON(voice: *const KMChimera, output: *mut u8, capacity: u32) -> u32 {
    let Some(v) = (unsafe { voice.as_ref() }) else { return 0; };
    for _ in 0..3 {
        let before = v.scene_version.load(Ordering::SeqCst);
        if before & 1 != 0 { continue; }
        let values: [f64; N_ARTIC] = std::array::from_fn(|i| f32::from_bits(v.scene_artic[i].load(Ordering::SeqCst)) as f64);
        if v.scene_version.load(Ordering::SeqCst) != before { continue; }
        let artic = HumanArtic::from_array(&values);
        let tract = unsafe { &mut *v.scene_tract.get() };
        let frame = tract.compute_new(&artic);
        let mut rest = NEUTRAL; rest.jaw = 0.0; rest.lip_ap = 0.0; rest.labiodental = 0.0;
        let rest_frame = tract.compute_new(&rest);
        let data = serde_json::to_vec(&serde_json::json!({"artic":artic,"frame":frame,"restFrame":rest_frame,
            "body":{"scale":BODY_MALE.scale,"pharynx":BODY_MALE.pharynx,"lipWidth":BODY_MALE.lip_width}})).unwrap_or_default();
        if !output.is_null() && data.len() <= capacity as usize {
            unsafe { std::ptr::copy_nonoverlapping(data.as_ptr(), output, data.len()); }
        }
        return data.len() as u32;
    }
    0
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::alloc::{GlobalAlloc, Layout, System};
    use std::cell::Cell;
    thread_local! { static COUNTING: Cell<bool> = const { Cell::new(false) }; static ALLOCS: Cell<usize> = const { Cell::new(0) }; }
    struct Counter;
    unsafe impl GlobalAlloc for Counter {
        unsafe fn alloc(&self, layout: Layout) -> *mut u8 {
            if COUNTING.try_with(|v| v.get()).unwrap_or(false) { let _ = ALLOCS.try_with(|v| v.set(v.get()+1)); }
            unsafe { System.alloc(layout) }
        }
        unsafe fn dealloc(&self, ptr: *mut u8, layout: Layout) { unsafe { System.dealloc(ptr, layout) } }
        unsafe fn realloc(&self, ptr: *mut u8, layout: Layout, size: usize) -> *mut u8 {
            if COUNTING.try_with(|v| v.get()).unwrap_or(false) { let _ = ALLOCS.try_with(|v| v.set(v.get()+1)); }
            unsafe { System.realloc(ptr, layout, size) }
        }
    }
    #[global_allocator] static ALLOCATOR: Counter = Counter;
    fn render(v: *mut KMChimera, n: usize, block: usize) -> Vec<f32> {
        let mut out = vec![0.0; n];
        for chunk in out.chunks_mut(block) { unsafe { KMChimeraRender(v, chunk.as_mut_ptr(), chunk.len() as u32) } }
        out
    }
    #[test]
    fn ffi_voice_has_sound_vowel_motion_pause_and_bounded_output() {
        for rate in [32000.0, 48000.0, 96000.0] {
            let v = KMChimeraCreate(rate);
            unsafe { KMChimeraSet(v, 220.0, 0.0, 0.55, 0.6) };
            let oo = render(v, rate as usize, 128);
            assert!(oo.iter().all(|x| x.is_finite() && x.abs() <= 0.9));
            assert!(oo.iter().map(|x| x*x).sum::<f32>() > 0.1);
            unsafe { KMChimeraSet(v, 330.0, 1.0, 0.8, 0.6) };
            let ee = render(v, rate as usize / 2, 77);
            assert!(ee.iter().all(|x| x.is_finite() && x.abs() <= 0.9));
            assert_ne!(&oo[..1024], &ee[..1024]);
            unsafe { KMChimeraSet(v, f32::NAN, f32::INFINITY, -1.0, 0.0) };
            render(v, rate as usize / 2, 128);
            assert!(render(v, 128, 128).iter().all(|x| *x == 0.0));
            unsafe { KMChimeraSet(v, 220.0, 0.5, 0.55, 0.6) };
            assert!(render(v, rate as usize / 2, 128).iter().any(|x| x.abs() > 0.001));
            unsafe { KMChimeraDestroy(v) };
        }
    }
    #[test]
    fn control_and_render_do_not_allocate_and_blocks_do_not_change_audio() {
        let a = KMChimeraCreate(48000.0); let b = KMChimeraCreate(48000.0);
        unsafe { KMChimeraSet(a, 220.0, 0.5, 0.6, 0.6); KMChimeraSet(b, 220.0, 0.5, 0.6, 0.6); }
        assert_eq!(render(a, 8192, 128), render(b, 8192, 77));
        let mut out = [0.0; 128];
        ALLOCS.with(|v| v.set(0)); COUNTING.with(|v| v.set(true));
        for i in 0..100 {
            unsafe { KMChimeraSet(a, 220.0 + i as f32, i as f32 / 100.0, 0.6, 0.6); KMChimeraRender(a, out.as_mut_ptr(), 128); }
        }
        COUNTING.with(|v| v.set(false));
        assert_eq!(ALLOCS.with(|v| v.get()), 0);
        unsafe { KMChimeraDestroy(a); KMChimeraDestroy(b); }
    }
}

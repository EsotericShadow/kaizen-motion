use MotionChimeraNative::*;
use std::time::Instant;
use std::io::Write;
fn main() {
    let v = KMChimeraCreate(48000.0);
    let mut block = [0.0f32;128];
    let mut times=Vec::new();
    let mut audio=Vec::new();
    for run in 0..10 {
        for i in 0..750 {
            let vowel=(i as f32 / 750.0).clamp(0.0,1.0);
            unsafe { KMChimeraSet(v,220.0,vowel,0.55,0.6) };
            let start=Instant::now();
            unsafe { KMChimeraRender(v,block.as_mut_ptr(),128) };
            if i>=375 {times.push(start.elapsed().as_secs_f64()*1000.0);}
            if run==0 { audio.extend_from_slice(&block); }
        }
    }
    times.sort_by(|a,b|a.total_cmp(b));
    let peak=audio.iter().map(|x|x.abs()).fold(0.0f32,f32::max);
    println!("One native CHIMERA voice, 48kHz/128 frames, 10 runs: median {:.4}ms, p99 {:.4}ms, block budget 2.6667ms; peak {:.5}. Mac measurement, not iPhone acceptance.",times[times.len()/2],times[times.len()*99/100],peak);
    if let Some(path)=std::env::args().nth(1) {
        let n=(audio.len()*2) as u32;
        let mut f=std::fs::File::create(path).unwrap();
        f.write_all(b"RIFF").unwrap();f.write_all(&(36+n).to_le_bytes()).unwrap();f.write_all(b"WAVEfmt ").unwrap();
        f.write_all(&16u32.to_le_bytes()).unwrap();f.write_all(&1u16.to_le_bytes()).unwrap();f.write_all(&1u16.to_le_bytes()).unwrap();
        f.write_all(&48000u32.to_le_bytes()).unwrap();f.write_all(&96000u32.to_le_bytes()).unwrap();f.write_all(&2u16.to_le_bytes()).unwrap();f.write_all(&16u16.to_le_bytes()).unwrap();
        f.write_all(b"data").unwrap();f.write_all(&n.to_le_bytes()).unwrap();
        for x in audio {f.write_all(&((x.clamp(-1.0,1.0)*32767.0) as i16).to_le_bytes()).unwrap();}
    }
    unsafe {KMChimeraDestroy(v)};
}

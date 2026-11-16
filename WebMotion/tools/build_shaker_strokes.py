"""Preserve natural CC0 shaker stroke envelopes instead of resynthesizing tiny grains.
Requires ffmpeg, numpy, scipy. Exact source/time/hash provenance is emitted with PCM.
"""
from pathlib import Path
import json,subprocess,hashlib
import numpy as np
from scipy.signal import find_peaks,butter,sosfilt
from scipy.ndimage import gaussian_filter1d
ROOT=Path(__file__).resolve().parents[1]
SRC=ROOT/'assets/shaker-sources'; RATE=48000; FRAMES=16384
sources=json.loads((SRC/'sources.json').read_text()); groups=[]
for entry in sources:
    path=SRC/entry['file']
    assert hashlib.sha256(path.read_bytes()).hexdigest()==entry['sha256']
    raw=subprocess.check_output(['ffmpeg','-v','error','-i',str(path),'-ac','1','-ar',str(RATE),'-f','f32le','pipe:1'])
    audio=np.frombuffer(raw,dtype='<f4').copy();bins=len(audio)//240
    env=gaussian_filter1d(np.sqrt(np.mean(audio[:bins*240].reshape(-1,240)**2,axis=1)),2)
    peaks,_=find_peaks(env,distance=26,prominence=max(.0015,float(env.max())*.035))
    candidates=[]
    for j,peak in enumerate(peaks):
        lo=max(0,int(peak)-24)
        below=np.flatnonzero(env[lo:peak]<env[peak]*.15)
        start=max(0,(lo+int(below[-1]) if len(below) else lo)*240-48)
        end=min(len(audio),(int(peak)+48)*240,start+FRAMES)
        if j+1<len(peaks):
            n=int(peaks[j+1]);left=int(peak)+5;right=n-4
            if right>left:end=min(end,(left+int(np.argmin(env[left:right])))*240)
        if end-start<3840:continue
        data=audio[start:end].astype(np.float64)
        data=sosfilt(butter(2,110,fs=RATE,btype='highpass',output='sos'),data)
        rms=float(np.sqrt(np.mean(data*data)));peak_value=float(abs(data).max())
        if rms<.004 or peak_value/max(rms,1e-7)>18:continue
        # Level the recordings without crushing their internal rattle/air envelope.
        gain=min(8,.115/rms,.8/max(peak_value,1e-6));data*=gain
        attack=min(144,len(data)//10);release=min(720,len(data)//5)
        data[:attack]*=np.sin(np.linspace(0,np.pi/2,attack))**2
        data[-release:]*=np.sin(np.linspace(np.pi/2,0,release))**2
        data[0]=data[-1]=0
        n=len(data);padded=np.zeros(FRAMES,dtype='<i2');padded[:n]=np.round(np.clip(data,-.9,.9)*32767).astype('<i2')
        candidates.append({'source':entry['file'],'source_sha256':entry['sha256'],'start_frame':start,'end_frame':end,'length':n,'rms':rms,'pcm':padded})
    # Spread choices through a recording; do not select adjacent views of one stroke.
    if len(candidates)>16:
        indices=np.linspace(0,len(candidates)-1,16).round().astype(int);candidates=[candidates[i] for i in indices]
    groups.append(candidates)
    print(entry['file'],len(candidates),'natural strokes')
selected=[];indices=[]
for group in groups:
    idx=[]
    for c in group:idx.append(len(selected));selected.append(c)
    indices.append(idx)
assert len(selected)>=24
pcm=np.stack([c['pcm'] for c in selected]).astype('<i2').tobytes()
(ROOT/'dist/shaker-strokes.pcm').write_bytes(pcm)
# Warm: body-rich single maraca + dry multi-takes. Other textures keep distinct takes.
families=[indices[2]+indices[1],indices[1],indices[0]]
meta={'version':1,'sample_rate':RATE,'frames_per_stroke':FRAMES,'count':len(selected),'families':families,'lengths':[c['length'] for c in selected],'pcm_sha256':hashlib.sha256(pcm).hexdigest(),'strokes':[{k:v for k,v in c.items() if k!='pcm'} for c in selected]}
(ROOT/'dist/shaker-bank.json').write_text(json.dumps(meta,indent=2)+'\n')
print('Built',len(selected),'strokes;',min(meta['lengths'])/RATE,'to',max(meta['lengths'])/RATE,'seconds')

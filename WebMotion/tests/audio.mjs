import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const bytes=await readFile(new URL('../dist/chimera.wasm',import.meta.url));
const module=await WebAssembly.compile(bytes);assert.equal(WebAssembly.Module.imports(module).length,0);
const x=(await WebAssembly.instantiate(module,{})).exports;
function call(fn,args={}){const b=new TextEncoder().encode(JSON.stringify({fn,...args})),p=x.chimera_alloc(b.length);new Uint8Array(x.memory.buffer,p,b.length).set(b);const status=x.chimera_call(p,b.length);x.chimera_free(p,b.length);const result=JSON.parse(new TextDecoder().decode(new Uint8Array(x.memory.buffer,x.chimera_result_ptr(),x.chimera_result_len())));assert.equal(status,0,JSON.stringify(result));return result;}
const cat=call('catalog'),keys=['jaw','tbX','tbY','ttX','ttY','ttCurl','root','lipAp','lipProt','lipWidth','labiodental','velum','larynx','epilarynx','ventricular','lateral','dorsum'];
const vowels=['u','a','i'].map(v=>keys.map(k=>cat.vowelTargets.male[v]?.artic[k]??cat.neutral[k]));assert.notDeepEqual(vowels[0],vowels[2]);
let Processor;globalThis.sampleRate=48000;globalThis.currentTime=0;let lastSnapshot;
globalThis.AudioWorkletProcessor=class{port={postMessage:m=>{if(m.type==='error')throw new Error(m.message);lastSnapshot=m;},onmessage:null};};
globalThis.registerProcessor=(name,cls)=>{Processor=cls;};await import('../dist/audio-worklet.js');
const pcm=await readFile(new URL('../dist/shaker-strokes.pcm',import.meta.url));
const shakerBank=JSON.parse(await readFile(new URL('../dist/shaker-bank.json',import.meta.url),'utf8'));
assert.equal(pcm.length,shakerBank.count*shakerBank.frames_per_stroke*2);
for(let i=0;i<shakerBank.count;i++){const base=i*shakerBank.frames_per_stroke;assert.equal(pcm.readInt16LE(base*2),0);assert.equal(pcm.readInt16LE((base+shakerBank.lengths[i]-1)*2),0);assert(shakerBank.lengths[i]>=4800);}
function create(){return new Processor({processorOptions:{module,pcm:pcm.buffer.slice(pcm.byteOffset,pcm.byteOffset+pcm.byteLength),shakerBank,vowels}});}
let p=create();
function render(mode,enabled,blocks=400,voice=0,moving=false,frequency=220,vowel=.7){let energy=0,peak=0;const samples=[];
 for(let i=0;i<blocks;i++){
  if(i%4===0){const t=globalThis.currentTime;p.port.onmessage({data:{type:'state',mode,voice,enabled,frequency,vowel,breath:.55,acceleration:moving?[Math.sin(t*35)*1.8,Math.cos(t*31)*.8,Math.sin(t*33)*1.1]:[0,0,0],tilt:[0,0]}});}
  const out=[new Float32Array(128),new Float32Array(128)];p.process([], [out]);
  for(const v of out[0]){assert(Number.isFinite(v));assert(Math.abs(v)<=.9);energy+=v*v;peak=Math.max(peak,Math.abs(v));}samples.push(...out[0]);assert.deepEqual(out[0],out[1]);globalThis.currentTime+=128/globalThis.sampleRate;
 }return {energy,peak,samples};
}
const fingerprints=[];
for(const [mode,voice,name] of [[2,0,'CHIMERA'],[1,0,'Theremin'],[1,1,'Velvet'],[1,2,'Glass'],[1,3,'Orbit'],[1,4,'Reed'],[0,0,'Shaker']]){
 const result=render(mode,true,500,voice,mode===0);assert(result.energy>.1,`${name} silent`);console.log(name,{energy:result.energy,peak:result.peak});
 if(mode===1)fingerprints.push(result.samples.slice(-4096));
 render(mode,false,200,voice);assert(render(mode,false,20,voice).peak<.0001,`${name} pause not silent`);
}
for(let i=0;i<fingerprints.length;i++)for(let j=i+1;j<fingerprints.length;j++){
 const a=fingerprints[i],b=fingerprints[j],dot=a.reduce((v,x,k)=>v+x*b[k],0),aa=a.reduce((v,x)=>v+x*x,0),bb=b.reduce((v,x)=>v+x*x,0);
 assert(Math.abs(dot/Math.sqrt(aa*bb))<.98,`voices ${i}/${j} duplicate audio`);
}
// A resting phone must not make a wash. Every physical axis must excite the fill.
p=create();assert.equal(render(0,true,500,0,false).peak,0);
for(const axis of [0,1,2]){
 p=create();let energy=0;
 for(let i=0;i<500;i++){if(i%4===0){const acc=[0,0,0];acc[axis]=Math.sin(globalThis.currentTime*30)*2;p.port.onmessage({data:{type:'state',mode:0,enabled:true,frequency:220,vowel:.5,acceleration:acc,tilt:[0,0]}});}const out=[[new Float32Array(128),new Float32Array(128)]];p.process([],out);for(const v of out[0][0])energy+=v*v;globalThis.currentTime+=128/48000;}
 assert(energy>.1,`axis ${axis} did not shake`);console.log('Shaker axis',axis,'energy',energy);
 p.port.onmessage({data:{type:'snapshot'}});assert.equal(lastSnapshot.type,'grains');assert.equal(lastSnapshot.positions.length,192);
}
// Shapes, dimensions and fill affect the actual audio clock, not just the display.
function chamberAudio(shape,count,width){globalThis.currentTime=0;p=create();p.port.onmessage({data:{type:'geometry',shape,count,width,height:width*.7,radius:.0008,material:0}});return render(0,true,500,0,true).samples;}
assert.notDeepEqual(chamberAudio('box',12,.03),chamberAudio('oval',64,.07));
for(const rate of [32000,96000]){globalThis.sampleRate=rate;p=create();for(let voice=0;voice<5;voice++)assert(render(1,true,60,voice,false,1760,1).peak<=.9);}
const model=call('model',{body:{female:0,child:0},sampleRate:48000});const frame=call('frame',{model:model.model,artic:cat.neutral});assert(frame.tongue.length>5);
console.log('PASS: seven instruments/voices, distinct synth audio, XYZ physical rattle, silent rest/pause, geometry-driven sound, 32/48/96 kHz.');

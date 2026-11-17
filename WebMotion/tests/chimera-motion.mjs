// Exercise sensor-rate pressure changes through the real WASM-backed worklet.
import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
const root=new URL('../',import.meta.url);
const module=await WebAssembly.compile(await readFile(new URL('dist/chimera.wasm',root)));
const x=(await WebAssembly.instantiate(module,{})).exports;
const b=new TextEncoder().encode(JSON.stringify({fn:'catalog'})),ptr=x.chimera_alloc(b.length);
new Uint8Array(x.memory.buffer,ptr,b.length).set(b);assert.equal(x.chimera_call(ptr,b.length),0);x.chimera_free(ptr,b.length);
const cat=JSON.parse(new TextDecoder().decode(new Uint8Array(x.memory.buffer,x.chimera_result_ptr(),x.chimera_result_len())));
const keys=['jaw','tbX','tbY','ttX','ttY','ttCurl','root','lipAp','lipProt','lipWidth','labiodental','velum','larynx','epilarynx','ventricular','lateral','dorsum'];
const vowels=['u','a','i'].map(v=>keys.map(k=>cat.vowelTargets.male[v]?.artic[k]??cat.neutral[k]));
const pcm=await readFile(new URL('dist/shaker-strokes.pcm',root)),shakerBank=JSON.parse(await readFile(new URL('dist/shaker-bank.json',root)));
let Processor;
globalThis.AudioWorkletProcessor=class{port={postMessage:m=>{if(m.type==='error')throw Error(m.message);},onmessage:null};};
globalThis.registerProcessor=(_,cls)=>Processor=cls;
globalThis.sampleRate=48000;globalThis.currentTime=0;
await import(process.argv[2]?pathToFileURL(process.argv[2]).href:new URL('dist/audio-worklet.js',root).href);
for(const rate of [32000,44100,48000,96000]){
 globalThis.sampleRate=rate;globalThis.currentTime=0;
 const p=new Processor({processorOptions:{module,pcm:pcm.buffer.slice(pcm.byteOffset,pcm.byteOffset+pcm.byteLength),shakerBank,vowels}});
 let pressure=0,maxPressureStep=0,peak=0,energy=0;const original=p.x;
 p.x={...original,engine_set_source(h){const pressureValue=new Float64Array(original.memory.buffer,p.values,32)[2];if(Number.isFinite(pressureValue)){maxPressureStep=Math.max(maxPressureStep,Math.abs(pressureValue-pressure));pressure=pressureValue;}return original.engine_set_source(h);}};
 const out=[[new Float32Array(128),new Float32Array(128)]];
 let next=0,tick=0;
 for(let frame=0;frame<rate*2;frame+=128){
  const t=frame/rate;globalThis.currentTime=t;
  if(t>=next){next+=1/60;tick++;p.port.onmessage({data:{type:'state',mode:2,enabled:true,frequency:220*Math.pow(2,.6*Math.sin(t*4)),vowel:.5+.49*Math.sin(t*3),breath:.55,excitation:tick%2?.05:1,acceleration:[0,0,tick%2?1:-1]}});}
  assert.equal(p.process([],out),true);assert.equal(p.failed,false);
  for(const value of out[0][0]){assert(Number.isFinite(value));assert(Math.abs(value)<=.9);peak=Math.max(peak,Math.abs(value));energy+=value*value;}
  assert.deepEqual(out[0][0],out[0][1]);
 }
 // Limit abrupt lung-pressure modulation to a 25ms response, independent of sensor cadence.
 const maxAllowed=12*(1-Math.exp(-128/(rate*.025)))+1e-8;
 console.log(JSON.stringify({rate,maxPressureStep,maxAllowed,peak,energy}));
 assert(maxPressureStep<=maxAllowed,'sensor breath changes still reach the source as abrupt pressure steps');
 assert(energy>.1,'moving CHIMERA is silent');
 // Missing sensor messages must still fade to silence.
 for(let i=0;i<Math.ceil(rate*.6/128);i++){globalThis.currentTime+=128/rate;p.process([],out);}
 assert(out[0][0].every(v=>v===0),'stale state did not silence CHIMERA');
 function manual(level){let tailPeak=0,energy=0;const blocks=Math.ceil(rate*.8/128);for(let block=0;block<blocks;block++){globalThis.currentTime+=128/rate;if(block%4===0)p.port.onmessage({data:{type:'state',mode:2,enabled:true,frequency:220,vowel:.5,breath:.55,...(level===null?{}:{excitation:level})}});p.process([],out);for(const v of out[0][0]){assert(Number.isFinite(v));energy+=v*v;if(block>blocks-20)tailPeak=Math.max(tailPeak,Math.abs(v));}}return {energy,tailPeak};}
 assert(manual(1).energy>.1,'excitation did not drive the voice');
 assert(manual(0).tailPeak<.0001,'zero excitation did not stop breath');
 manual(.25);assert(Math.abs(p.pressure-3)<.001,'excitation did not control model pressure');
 manual(null);assert(p.pressure<.001,'missing velocity excitation must be silent');

}
console.log('PASS: CHIMERA pressure slew, excitation pressure/zero/missing-state silence, moving pitch/vowels, finite stereo audio and stale-state silence at 32/44.1/48/96 kHz.');

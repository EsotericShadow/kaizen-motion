import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const bytes=await readFile(new URL('../dist/chimera.wasm',import.meta.url));
const module=await WebAssembly.compile(bytes);assert.equal(WebAssembly.Module.imports(module).length,0);
const x=(await WebAssembly.instantiate(module,{})).exports;
function call(fn,args={}){const b=new TextEncoder().encode(JSON.stringify({fn,...args})),p=x.chimera_alloc(b.length);new Uint8Array(x.memory.buffer,p,b.length).set(b);const status=x.chimera_call(p,b.length);x.chimera_free(p,b.length);const result=JSON.parse(new TextDecoder().decode(new Uint8Array(x.memory.buffer,x.chimera_result_ptr(),x.chimera_result_len())));assert.equal(status,0,JSON.stringify(result));return result;}
const cat=call('catalog'),keys=['jaw','tbX','tbY','ttX','ttY','ttCurl','root','lipAp','lipProt','lipWidth','labiodental','velum','larynx','epilarynx','ventricular','lateral','dorsum'];
const vowels=['u','a','i'].map(v=>keys.map(k=>cat.vowelTargets.male[v]?.artic[k]??cat.neutral[k]));assert.notDeepEqual(vowels[0],vowels[2]);
let Processor;globalThis.sampleRate=48000;globalThis.currentTime=0;
globalThis.AudioWorkletProcessor=class{port={postMessage:m=>{if(m.type==='error')throw new Error(m.message);},onmessage:null};};
globalThis.registerProcessor=(name,cls)=>{Processor=cls;};
await import('../dist/audio-worklet.js');
const pcm=await readFile(new URL('../dist/shaker.pcm',import.meta.url));
const p=new Processor({processorOptions:{module,pcm:pcm.buffer.slice(pcm.byteOffset,pcm.byteOffset+pcm.byteLength),vowels}});
function render(mode,enabled,blocks=400,effort=.65){let energy=0,peak=0;for(let i=0;i<blocks;i++){
 if(i%8===0)p.port.onmessage({data:{type:'state',mode,enabled,frequency:220,vowel:.7,breath:.55,effort}});
 const out=[new Float32Array(128),new Float32Array(128)];p.process([], [out]);
 for(const v of out[0]){assert(Number.isFinite(v));assert(Math.abs(v)<=.9);energy+=v*v;peak=Math.max(peak,Math.abs(v));}assert.deepEqual(out[0],out[1]);globalThis.currentTime+=128/48000;
 }return {energy,peak};}
for(const mode of [0,1,2]){const result=render(mode,true);assert(result.energy>.1,`mode ${mode} silent`);console.log(['Shaker','Theremin','CHIMERA'][mode],result);render(mode,false,800,0);const silent=render(mode,false,20,0);assert(silent.peak<.0001);}
const model=call('model',{body:{female:0,child:0},sampleRate:48000});const frame=call('frame',{model:model.model,artic:cat.neutral});assert(frame.tongue.length>5);assert(frame.inner.length>5);
console.log('PASS: all voices finite, stereo, audible, pause silent; native anatomy and vowel targets valid.');

import { SynthBank } from './synth';
import { PhysicalShaker } from './shaker';
declare const sampleRate:number,currentTime:number;
declare class AudioWorkletProcessor {port:MessagePort;constructor(options?:any)}
declare function registerProcessor(name:string,ctor:any):void;
const clamp=(x:number,a:number,b:number)=>Math.max(a,Math.min(b,x));
class MotionAudio extends AudioWorkletProcessor {
 x:any;h:number;values:number;vocalBuffer:Float32Array;vowels:number[][];synth:SynthBank;shaker:PhysicalShaker;
 mode=2;requestedMode=2;voice=0;requestedVoice=0;route=1;enabled=false;
 scope=new Float32Array(512);scopeIndex=0;
 frequency=311;vowel=.5;breath=.55;effort=0;last=0;gain=0;pitch=311;failed=false;
 pitchMix=1-Math.exp(-1/(sampleRate*.012));gainMix=1-Math.exp(-1/(sampleRate*.008));
 constructor(options:any){
  super();const o=options.processorOptions;this.x=new WebAssembly.Instance(o.module,{}).exports;this.h=this.x.engine_new(sampleRate);this.values=this.x.engine_values(this.h);this.vowels=o.vowels;this.vocalBuffer=new Float32Array(this.x.memory.buffer,this.x.engine_render(this.h,0),4096);
  this.synth=new SynthBank(sampleRate);this.shaker=new PhysicalShaker(sampleRate,new Int16Array(o.pcm));
  const v=this.scratch();v[0]=311;v[1]=.018;v[2]=8;v[6]=.05;v[9]=0;this.x.engine_set_source(this.h);
  this.port.onmessage=e=>{
   const p=e.data;
   if(p.type==='geometry'){this.shaker.configure(p);return;}
   if(p.type==='snapshot'){
    // Snapshot/structured-clone work stays outside process(). Fixed bounded payloads.
    if(this.mode===0){this.shaker.takeSnapshot(currentTime);this.port.postMessage({type:'grains',positions:this.shaker.snapshot,impacts:this.shaker.impacts,count:this.shaker.physics.count});}
    else if(this.mode===1)this.port.postMessage({type:'scope',values:this.scope,writeIndex:this.scopeIndex&511});
    else if(this.mode===2){const at=this.x.engine_telemetry(this.h);this.port.postMessage({type:'artic',values:new Float64Array(this.x.memory.buffer,at+128,17)});}
    return;
   }
   if(p.type!=='state')return;
   const wasSilent=!this.enabled&&this.gain<.00001;
   this.requestedMode=clamp(p.mode|0,0,2);this.requestedVoice=clamp(p.voice|0,0,4);this.enabled=!!p.enabled;
   this.frequency=clamp(Number(p.frequency)||311,60,1760);this.vowel=clamp(Number(p.vowel)||0,0,1);this.breath=clamp(Number(p.breath)||0,0,1);this.last=currentTime;
   this.shaker.test=!!p.pulse;
   for(let i=0;i<3;i++)this.shaker.motion[i]=clamp(Number(p.acceleration?.[i])||0,-6,6);
   for(let i=0;i<2;i++)this.shaker.tilt[i]=clamp(Number(p.tilt?.[i])||0,-1,1);
   const a=this.scratch(),q=this.vowel*2,k=q<1?0:1,t=q-k;
   for(let i=0;i<17;i++)a[i]=this.vowels[k][i]*(1-t)+this.vowels[k+1][i]*t;
   this.x.engine_set_artic(this.h,1);const s=this.scratch();s[0]=Math.min(880,this.frequency);s[2]=4+8*this.breath;this.x.engine_set_source(this.h);
   this.x.engine_set_gate(this.h,this.enabled&&this.requestedMode===2?1:0);
   this.synth.prepare(this.frequency,this.vowel);
   if(wasSilent){if(this.mode!==this.requestedMode){this.shaker.clear();this.shaker.physics.reset(this.shaker.physics.count);}this.mode=this.requestedMode;this.voice=this.requestedVoice;this.route=1;}
   if(this.vocalBuffer.buffer!==this.x.memory.buffer)this.vocalBuffer=new Float32Array(this.x.memory.buffer,this.x.engine_render(this.h,0),4096);
  };
  this.port.postMessage({type:'ready',rate:sampleRate});
 }
 scratch(){return new Float64Array(this.x.memory.buffer,this.values,32).fill(NaN);}
 process(_:any,outputs:Float32Array[][]){
  const out=outputs[0][0];if(!out)return true;if(this.failed){out.fill(0);return true;}
  try{
   const on=this.enabled&&currentTime-this.last<.3;
   if(!on&&this.gain===0){this.scope.fill(0);for(const channel of outputs[0])channel.fill(0);return true;}
   let vocal:Float32Array|undefined;
   if((this.mode===2||this.requestedMode===2)&&(on||this.gain>.00001)){this.x.engine_render(this.h,out.length);vocal=this.vocalBuffer;}
   for(let i=0;i<out.length;i++){
    if(this.mode!==this.requestedMode||this.voice!==this.requestedVoice){this.route=Math.max(0,this.route-1/(sampleRate*.006));if(this.route===0){this.mode=this.requestedMode;this.voice=this.requestedVoice;this.shaker.clear();this.shaker.physics.reset(this.shaker.physics.count);}}
    else this.route=Math.min(1,this.route+1/(sampleRate*.008));
    this.gain+=((on?1:0)-this.gain)*this.gainMix;if(!on&&this.gain<.000001)this.gain=0;
    this.pitch+=(this.frequency-this.pitch)*this.pitchMix;
    let value=0;
    if(this.mode===0)value=this.shaker.render(on,currentTime+i/sampleRate);
    else if(this.mode===2)value=vocal?vocal[i]*.6:0;
    else value=this.synth.render(this.pitch,this.vowel,this.voice)*.6;
    value*=this.gain*this.route;
    out[i]=Number.isFinite(value)?clamp(value,-.9,.9):0;this.scope[this.scopeIndex++&511]=out[i];
   }
   for(let c=1;c<outputs[0].length;c++)outputs[0][c].set(out);
  }catch(e){out.fill(0);this.failed=true;this.port.postMessage({type:'error',message:String(e)});}
  return true;
 }
}
registerProcessor('motion-audio',MotionAudio);

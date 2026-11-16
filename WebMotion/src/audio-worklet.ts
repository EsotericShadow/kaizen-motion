// Real CHIMERA WASM on the audio thread; original Motion granular texture and Classic voice.
declare const sampleRate: number, currentTime: number;
declare class AudioWorkletProcessor { port: MessagePort; constructor(options?: any) }
declare function registerProcessor(name: string, ctor: any): void;
const clamp=(x:number,a:number,b:number)=>Math.max(a,Math.min(b,x));
class MotionAudio extends AudioWorkletProcessor {
 x:any; h:number; values:number; pcm:Int16Array; vowels:number[][];
 mode=0; enabled=false; frequency=440; vowel=.5; breath=.55; effort=0; last=0;
 gain=0; phase=0; pitch=440; rattle=0; blocks=0; next=0;
 pos=new Float64Array(64); rate=new Float64Array(64); idx=new Uint8Array(64);
 age=new Uint32Array(64); len=new Uint32Array(64); amp=new Float64Array(64);
 weights=new Float64Array(16); desired=new Float64Array(16);
 failed=false; noise=0x12345678;
 constructor(options:any){
  super();const o=options.processorOptions;
  this.x=new WebAssembly.Instance(o.module,{}).exports;this.h=this.x.engine_new(sampleRate);
  this.values=this.x.engine_values(this.h);this.pcm=new Int16Array(o.pcm);this.vowels=o.vowels;
  const v=this.scratch();v[0]=311;v[1]=.018;v[2]=8;v[6]=.05;v[9]=0;this.x.engine_set_source(this.h);
  this.port.onmessage=e=>{const p=e.data;
   if(p.type==='state'){
    const next=clamp(p.mode|0,0,2);if(next!==this.mode){this.amp.fill(0);this.rattle=0;}
    this.mode=next;this.enabled=!!p.enabled;this.frequency=clamp(p.frequency||440,60,1760);
    this.vowel=clamp(p.vowel||0,0,1);this.breath=clamp(p.breath||0,0,1);this.effort=clamp(p.effort||0,0,1);this.last=currentTime;
    const a=this.scratch(),q=this.vowel*2,k=q<1?0:1,t=q-k;
    for(let i=0;i<17;i++)a[i]=this.vowels[k][i]*(1-t)+this.vowels[k+1][i]*t;
    this.x.engine_set_artic(this.h,1);
    const s=this.scratch();s[0]=Math.min(880,this.frequency);s[2]=4+8*this.breath;this.x.engine_set_source(this.h);
    this.x.engine_set_gate(this.h,this.enabled&&this.mode===2?1:0);
   }
  };
  this.port.postMessage({type:'ready',rate:sampleRate});
 }
 scratch(){return new Float64Array(this.x.memory.buffer,this.values,32).fill(NaN);}
 rand(){this.noise^=this.noise<<13;this.noise^=this.noise>>>17;this.noise^=this.noise<<5;return (this.noise>>>0)/4294967296;}
 process(_:any,outputs:Float32Array[][]){
  const out=outputs[0][0];if(!out)return true;
  if(this.failed){out.fill(0);return true;}
  try{
   const on=this.enabled&&currentTime-this.last<.3;
   const targetGain=on&&this.mode!==0?.6:0;
   let vocal:Float32Array|undefined;
   // Render the airway only while active or fading; preserve phase across blocks.
   if(this.mode===2&&(on||this.gain>.00001)){
    const p=this.x.engine_render(this.h,out.length);vocal=new Float32Array(this.x.memory.buffer,p,out.length);
   }
   const p=this.vowel*2,k=p<1?0:1,t=p-k,formants=[[350,900,2200],[800,1250,2900],[300,2300,3100]],band=[180,280,450];
   let sum=0;
   for(let h=0;h<16;h++){
    const f=this.frequency*(h+1);let w=.045/(h+1);
    for(let b=0;b<3;b++){const c=formants[k][b]*(1-t)+formants[k+1][b]*t,d=(f-c)/band[b];w+=Math.exp(-.5*d*d)*(b===0?1:.65)/Math.sqrt(h+1);}
    if(h===0)w+=.3;this.desired[h]=w;sum+=w*w;
   }
   const norm=1/Math.sqrt(sum),pitchMix=1-Math.exp(-1/(sampleRate*.012)),gainMix=1-Math.exp(-1/(sampleRate*.008));
   const targetEnergy=on&&this.mode===0?this.effort:0;
   for(let f=0;f<out.length;f++){
    this.gain+=(targetGain-this.gain)*gainMix;this.pitch+=(this.frequency-this.pitch)*pitchMix;
    this.rattle+=(targetEnergy-this.rattle)*(1-Math.exp(-1/(sampleRate*(targetEnergy>this.rattle?.004:.07))));
    if(targetEnergy===0&&this.rattle<.0001)this.rattle=0;
    const e=this.rattle;
    if(e>.0001&&this.rand()<(400+1400*Math.sqrt(e))/sampleRate){
     const i=this.next++&63;this.idx[i]=Math.floor(this.rand()*64);this.pos[i]=this.rand()*1024;
     this.rate[i]=48000/sampleRate*(1+(this.rand()*2-1)*.06);this.age[i]=0;this.len[i]=Math.floor(sampleRate*(.006+.008*this.rand()));this.amp[i]=.9*Math.pow(e,.65);
    }
    let shaker=0;
    for(let i=0;i<64;i++){
     if(!this.amp[i])continue;
     const at=Math.floor(this.pos[i]),age=this.age[i];if(at>=2047||age>=this.len[i]){this.amp[i]=0;continue;}
     const u=age/this.len[i],window=16*u*u*(1-u)*(1-u),frac=this.pos[i]-at,base=this.idx[i]*2048+at;
     shaker+=(this.pcm[base]*(1-frac)+this.pcm[base+1]*frac)/32768*this.amp[i]*window;this.pos[i]+=this.rate[i];this.age[i]++;
    }
    let classic=0;
    if(this.mode===1&&this.gain>.000001)for(let h=0;h<16;h++){
     this.weights[h]+=(this.desired[h]*norm-this.weights[h])*pitchMix;
     const fade=clamp((sampleRate*.45-this.pitch*(h+1))/(sampleRate*.07),0,1);
     classic+=Math.sin(this.phase*(h+1))*this.weights[h]*fade;
    }
    this.phase=(this.phase+2*Math.PI*this.pitch/sampleRate)%(2*Math.PI);
    const value=.95*shaker/(.95+Math.abs(shaker))+(vocal?vocal[f]*this.gain:classic*this.gain*.24);
    out[f]=Number.isFinite(value)?clamp(value,-.9,.9):0;
   }
   for(let c=1;c<outputs[0].length;c++)outputs[0][c].set(out);
   if(++this.blocks%15===0&&this.mode===2){
    const p=this.x.engine_telemetry(this.h),mem=this.x.memory.buffer;
    this.port.postMessage({type:'artic',values:Array.from(new Float64Array(mem,p+16*8,17))});
   }
  }catch(e){out.fill(0);this.failed=true;this.port.postMessage({type:'error',message:String(e)});}
  return true;
 }
}
registerProcessor('motion-audio',MotionAudio);

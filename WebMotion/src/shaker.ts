import { GrainChamber, clamp } from './physics';
/** Rattle excited by loose-fill impacts, never by a free-running hiss envelope. */
export class PhysicalShaker {
 physics=new GrainChamber();motion=[0,0,0];tilt=[0,0];lastTilt=[0,0];force=[0,0,0];bias=[0,0,0];
 pos=new Float64Array(64);speed=new Float64Array(64);idx=new Uint8Array(64);
 age=new Uint32Array(64);length=new Uint32Array(64);amp=new Float64Array(64);
 snapshot=new Float32Array(192);impacts=new Float32Array(24);
 next=0;seed=84597;remaining=0;burst=0;lastIndex=-1;material=0;
 low1=0;low2=0;dc=0;gain=0;test=false;
 lowMix:number;dcMix:number;
 physicsFrames:number;attack:number;release:number;grainRelease:number;biasMix:number;
 constructor(public rate:number,public pcm:Int16Array){this.physicsFrames=Math.round(rate/240);this.attack=1-Math.exp(-1/(rate*.003));this.release=Math.exp(-1/(rate*.04));this.grainRelease=Math.exp(-1/(rate*.025));this.biasMix=1-Math.exp(-1/(240*.18));this.lowMix=1-Math.exp(-2*Math.PI*4300/rate);this.dcMix=1-Math.exp(-2*Math.PI*180/rate);}
 random(){this.seed^=this.seed<<13;this.seed^=this.seed>>>17;this.seed^=this.seed<<5;return (this.seed>>>0)/4294967296;}
 configure(c:any){const p=this.physics;p.w=clamp(Number(c.width)||.048,.024,.08);p.h=clamp(Number(c.height)||.052,.018,.09);p.d=clamp(Number(c.depth)||.024,.012,.06);p.radius=clamp(Number(c.radius)||.0008,.0005,.0025);p.shape=['box','circle','oval'].includes(c.shape)?c.shape:'box';p.reset(clamp(Number(c.count)||36,8,64));this.material=clamp(Number(c.material)||0,0,2);const cutoff=this.material===0?4300:this.material===1?6500:8700;this.lowMix=1-Math.exp(-2*Math.PI*cutoff/this.rate);this.clear();}
 clear(){this.amp.fill(0);this.burst=this.low1=this.low2=this.dc=0;this.bias.fill(0);}
 render(on:boolean,now:number){
  if(--this.remaining<=0){
   this.remaining=this.physicsFrames;
   let activity=0;
   for(let i=0;i<3;i++){
    const raw=on?(this.test?Math.sin(now*Math.PI*14+i*.7)*(i===2?.8:1.6):this.motion[i]):0;
    this.bias[i]+=(raw-this.bias[i])*this.biasMix;
    this.force[i]=clamp(raw-this.bias[i],-6,6);activity+=this.force[i]*this.force[i];
   }
   const tiltSpeed=Math.hypot(this.tilt[0]-this.lastTilt[0],this.tilt[1]-this.lastTilt[1])*240;
   this.lastTilt[0]=this.tilt[0];this.lastTilt[1]=this.tilt[1];
   activity=Math.max(clamp((Math.sqrt(activity)-.025)*1.4,0,1),on?Math.min(.35,tiltSpeed*.04):0);
   this.physics.step(this.physicsFrames/this.rate,this.force,this.tilt,activity,now);
   const impact=Math.sqrt(this.physics.collisionEnergy)*4;
   this.burst=Math.min(1.8,this.burst+impact);
  }
  this.burst*=this.release;
  const e=this.burst;
  if(e>.001&&this.random()<360*Math.pow(Math.min(1,e),.8)/this.rate){
   const i=this.next++&63,group=this.material===0?2:this.material===1?1:0,choices=Math.floor((63-group)/3)+1;
   let index=group+Math.floor(this.random()*choices)*3;if(index===this.lastIndex)index=group+((Math.floor(this.random()*choices)+1)%choices)*3;this.lastIndex=index;
   this.idx[i]=index;this.pos[i]=Math.floor(this.random()*100);this.speed[i]=48000/this.rate*(.94+this.random()*.12);
   this.age[i]=0;this.length[i]=Math.floor(this.rate*(.018+this.random()*.023));this.amp[i]=2.6*Math.pow(Math.min(1,e),.48)*(.75+this.random()*.4);
  }
  let sum=0;
  for(let i=0;i<64;i++){
   if(!this.amp[i])continue;const age=this.age[i],n=Math.floor(this.pos[i]);
   if(n>=2047||age>=this.length[i]){this.amp[i]=0;continue;}
   const attack=Math.min(1,age/(this.rate*.0015)),release=Math.min(1,(this.length[i]-age)/(this.rate*.009));
   const window=attack*attack*(3-2*attack)*release*release*(3-2*release),frac=this.pos[i]-n,at=this.idx[i]*2048+n;
   sum+=(this.pcm[at]*(1-frac)+this.pcm[at+1]*frac)/32768*this.amp[i]*window;
   this.pos[i]+=this.speed[i];this.age[i]++;
  }
  // A dry micro-collision layer fills the spaces; the recordings carry the body.
  sum+=(this.random()*2-1)*Math.min(1,e)*.045;
  const lp=this.lowMix;
  this.low1+=(sum-this.low1)*lp;this.low2+=(this.low1-this.low2)*lp;
  this.dc+=(this.low2-this.dc)*this.dcMix;
  const value=(this.low2-this.dc)*1.5;
  return .82*value/(.82+Math.abs(value));
 }
 takeSnapshot(now:number){for(let i=0;i<64;i++){const g=this.physics.grains[i],p=i*3;this.snapshot[p]=g.x;this.snapshot[p+1]=g.y;this.snapshot[p+2]=g.z;}for(let i=0;i<6;i++){const p=this.physics.pulses[i],j=i*4;this.impacts[j]=p.x;this.impacts[j+1]=p.y;this.impacts[j+2]=now-p.t;this.impacts[j+3]=p.strength;}}
}

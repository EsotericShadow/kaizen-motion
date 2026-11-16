import { GrainChamber, clamp } from './physics';
/** Complete recorded rattle strokes follow physical contact clusters. No noise generator. */
export class PhysicalShaker {
 physics=new GrainChamber();motion=[0,0,0];tilt=[0,0];lastTilt=[0,0];force=[0,0,0];bias=[0,0,0];
 pos=new Float64Array(8);speed=new Float64Array(8);idx=new Uint8Array(8);
 age=new Uint32Array(8);length=new Uint32Array(8);amp=new Float64Array(8);target=new Float64Array(8);
 snapshot=new Float32Array(192);impacts=new Float32Array(24);
 lastWall=-1;lastStroke=-100;
 next=0;seed=84597;remaining=0;burst=0;lastIndex=-1;material=0;
 low1=0;low2=0;dc=0;gain=0;test=false;
 lowMix:number;dcMix:number;
 physicsFrames:number;attack:number;release:number;grainRelease:number;biasMix:number;
 constructor(public rate:number,public pcm:Int16Array,public bank:any){this.physicsFrames=Math.round(rate/240);this.attack=1-Math.exp(-1/(rate*.003));this.release=Math.exp(-1/(rate*.025));this.grainRelease=Math.exp(-1/(rate*.025));this.biasMix=1-Math.exp(-1/(240*.18));this.lowMix=1-Math.exp(-2*Math.PI*6500/rate);this.dcMix=1-Math.exp(-2*Math.PI*180/rate);}
 random(){this.seed^=this.seed<<13;this.seed^=this.seed>>>17;this.seed^=this.seed<<5;return (this.seed>>>0)/4294967296;}
 configure(c:any){const p=this.physics;p.w=clamp(Number(c.width)||.048,.024,.08);p.h=clamp(Number(c.height)||.052,.018,.09);p.d=clamp(Number(c.depth)||.024,.012,.06);p.radius=clamp(Number(c.radius)||.0008,.0005,.0025);p.shape=['box','circle','oval'].includes(c.shape)?c.shape:'box';p.reset(clamp(Number(c.count)||36,8,64));this.material=clamp(Number(c.material)||0,0,2);const cutoff=this.material===0?6500:this.material===1?8000:10000;this.lowMix=1-Math.exp(-2*Math.PI*cutoff/this.rate);this.clear();}
 clear(){this.amp.fill(0);this.target.fill(0);this.lastStroke=-100;this.lastWall=-1;this.burst=this.low1=this.low2=this.dc=0;this.bias.fill(0);}
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
   let wall=0;for(let i=1;i<6;i++)if(this.physics.wallEnergy[i]>this.physics.wallEnergy[wall])wall=i;
   const elapsed=now-this.lastStroke;
   // Contacts within one stroke form one rattle. Reversals can start the next one.
   if(impact>.012&&elapsed>.055&&(wall!==this.lastWall||this.burst<.025||elapsed>.14)){
    const pool=this.bank.families[this.material];
    let choice=Math.floor(this.random()*pool.length);
    if(pool[choice]===this.lastIndex)choice=(choice+1)%pool.length;
    const index=pool[choice],i=this.next++&7;
    // Let the old recorded tail yield gently to the next stroke, avoiding a noise wash.
    for(let j=0;j<8;j++)this.target[j]*=.35;
    const velocity=Math.sqrt(Math.min(1,impact*3));
    this.idx[i]=index;this.pos[i]=0;this.speed[i]=48000/this.rate*(.985+this.random()*.03);
    this.age[i]=0;this.length[i]=this.bank.lengths[index];
    this.target[i]=(.2+velocity*1.2)*Math.sqrt(this.physics.count/36);this.amp[i]=0;
    this.lastIndex=index;this.lastWall=wall;this.lastStroke=now;
   }
   this.burst=Math.max(this.burst,impact);
  }
  this.burst*=this.release;
  let sum=0;
  for(let i=0;i<8;i++){
   if(!this.target[i]&&!this.amp[i])continue;
   const n=Math.floor(this.pos[i]);
   if(n+1>=this.length[i]){this.amp[i]=this.target[i]=0;continue;}
   this.amp[i]+=(this.target[i]-this.amp[i])*this.attack;
   const frac=this.pos[i]-n,at=this.idx[i]*this.bank.frames_per_stroke+n;
   sum+=(this.pcm[at]*(1-frac)+this.pcm[at+1]*frac)/32768*this.amp[i];
   this.pos[i]+=this.speed[i];
  }
  const lp=this.lowMix;
  this.low1+=(sum-this.low1)*lp;this.low2+=(this.low1-this.low2)*lp;
  this.dc+=(this.low2-this.dc)*this.dcMix;
  const value=(this.low2-this.dc)*2.4;
  return .82*value/(.82+Math.abs(value));
 }
 takeSnapshot(now:number){for(let i=0;i<64;i++){const g=this.physics.grains[i],p=i*3;this.snapshot[p]=g.x;this.snapshot[p+1]=g.y;this.snapshot[p+2]=g.z;}for(let i=0;i<6;i++){const p=this.physics.pulses[i],j=i*4;this.impacts[j]=p.x;this.impacts[j+1]=p.y;this.impacts[j+2]=now-p.t;this.impacts[j+3]=p.strength;}}
}

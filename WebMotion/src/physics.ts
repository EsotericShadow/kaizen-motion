export const clamp=(v:number,a:number,b:number)=>Math.max(a,Math.min(b,v));
export type Grain={x:number,y:number,z:number,vx:number,vy:number,vz:number,r:number};
/** Fixed-capacity loose fill. Used by the audio clock; snapshots alone drive the display. */
export class GrainChamber {
 grains:Grain[]=Array.from({length:64},()=>({x:0,y:0,z:0,vx:0,vy:0,vz:0,r:.25}));
 pulses=Array.from({length:6},()=>({x:0,y:0,t:-100,strength:0}));
 count=36;w=.045;h=.052;d=.024;radius=.0008;shape='box';quiet=0;seed=12345;
 collisionEnergy=0;collisions=0;agitation=0;
 constructor(){this.reset(36);}
 random(){this.seed^=this.seed<<13;this.seed^=this.seed>>>17;this.seed^=this.seed<<5;return (this.seed>>>0)/4294967296;}
 reset(count:number){this.count=clamp(count|0,1,64);for(let i=0;i<64;i++){const a=this.random()*Math.PI*2,r=Math.sqrt(this.random())*.28,g=this.grains[i];g.x=Math.cos(a)*this.w*r;g.y=Math.sin(a)*this.h*r;g.z=(this.random()-.5)*this.d*.65;g.vx=g.vy=g.vz=0;g.r=.18+this.random()*.2;}for(const p of this.pulses)p.t=-100;this.quiet=0;this.agitation=0;this.collisionEnergy=this.collisions=0;}
 contact(g:Grain,speed:number,wall:number,now:number){
  if(speed<.025||this.agitation<.008)return;
  this.collisions++;this.collisionEnergy+=speed*speed/this.count;
  const p=this.pulses[wall];p.x=g.x;p.y=g.y;p.t=now;p.strength=speed;
 }
 step(dt:number,acc:number[],tilt:number[],energy:number,now:number){
  this.collisionEnergy=this.collisions=0;
  if(dt>.1){for(let i=0;i<this.count;i++){const g=this.grains[i];g.vx=g.vy=g.vz=0;}return;}
  this.agitation=Math.max(energy,this.agitation*Math.exp(-dt/.11));
  this.quiet=energy<.012?this.quiet+dt:0;
  if(this.quiet>.6){for(let i=0;i<this.count;i++){const g=this.grains[i];g.vx=g.vy=g.vz=0;}return;}
  const steps=Math.max(1,Math.ceil(dt/.0042)),h=dt/steps,drag=Math.exp(-h*10),r=this.radius;
  const ax=(-acc[0]+tilt[0]*.35)*9.80665,ay=(-acc[1]+tilt[1]*.35)*9.80665-1.6,az=-acc[2]*9.80665;
  const hw=Math.max(.003,this.w/2-r),hh=Math.max(.003,this.h/2-r),hd=Math.max(.003,this.d/2-r);
  for(let s=0;s<steps;s++){
   for(let i=0;i<this.count;i++){
    const g=this.grains[i];g.vx=clamp((g.vx+ax*h)*drag,-3,3);g.vy=clamp((g.vy+ay*h)*drag,-3,3);g.vz=clamp((g.vz+az*h)*drag,-3,3);
    g.x+=g.vx*h;g.y+=g.vy*h;g.z+=g.vz*h;
    if(this.shape==='box'){
     if(Math.abs(g.x)>hw){this.contact(g,Math.abs(g.vx),g.x>0?1:0,now);g.x=Math.sign(g.x)*hw;g.vx=-g.vx*g.r;g.vy*=.92;g.vz*=.92;}
     if(Math.abs(g.y)>hh){this.contact(g,Math.abs(g.vy),g.y>0?2:3,now);g.y=Math.sign(g.y)*hh;g.vy=-g.vy*g.r;g.vx*=.92;g.vz*=.92;}
    }else{
     const q=g.x*g.x/(hw*hw)+g.y*g.y/(hh*hh);
     if(q>1){const length=Math.sqrt(q);g.x/=length;g.y/=length;let nx=g.x/(hw*hw),ny=g.y/(hh*hh),n=Math.hypot(nx,ny);nx/=n;ny/=n;
      const vn=g.vx*nx+g.vy*ny;if(vn>0){this.contact(g,vn,Math.abs(nx)>Math.abs(ny)?(nx>0?1:0):(ny>0?2:3),now);g.vx-=(1+g.r)*vn*nx;g.vy-=(1+g.r)*vn*ny;}
     }
    }
    if(Math.abs(g.z)>hd){this.contact(g,Math.abs(g.vz),g.z>0?4:5,now);g.z=Math.sign(g.z)*hd;g.vz=-g.vz*g.r;g.vx*=.95;g.vy*=.95;}
   }
   // Inelastic grain interactions disperse the fill rather than one bouncing swarm.
   const separation=r*2;
   for(let i=0;i<this.count;i++)for(let j=i+1;j<this.count;j++){
    const a=this.grains[i],b=this.grains[j],dx=b.x-a.x,dy=b.y-a.y,dz=b.z-a.z,d2=dx*dx+dy*dy+dz*dz;
    if(d2>=separation*separation||d2<1e-16)continue;
    const d=Math.sqrt(d2),nx=dx/d,ny=dy/d,nz=dz/d,closing=(b.vx-a.vx)*nx+(b.vy-a.vy)*ny+(b.vz-a.vz)*nz;
    const overlap=(separation-d)*.35;
    a.x-=nx*overlap;a.y-=ny*overlap;a.z-=nz*overlap;b.x+=nx*overlap;b.y+=ny*overlap;b.z+=nz*overlap;
    if(closing<0){const impulse=-closing*.6;a.vx-=impulse*nx;a.vy-=impulse*ny;a.vz-=impulse*nz;b.vx+=impulse*nx;b.vy+=impulse*ny;b.vz+=impulse*nz;}
   }
   // Resolve only penetration after grain separation; do not invent another hit.
   for(let i=0;i<this.count;i++){const g=this.grains[i];g.z=clamp(g.z,-hd,hd);if(this.shape==='box'){g.x=clamp(g.x,-hw,hw);g.y=clamp(g.y,-hh,hh);}else{const q=g.x*g.x/(hw*hw)+g.y*g.y/(hh*hh);if(q>1){const l=Math.sqrt(q);g.x/=l;g.y/=l;}}}
  }
 }
}
export class Grip {
 x:number[]|null=null;y:number[]|null=null;
 center(g:number[]){const n=Math.hypot(...g);if(n<.5)return;g=g.map(x=>x/n);let x=[1-g[0]*g[0],-g[0]*g[1],-g[0]*g[2]],l=Math.hypot(...x);
  if(l<.1){x=[-g[1]*g[0],1-g[1]*g[1],-g[1]*g[2]];l=Math.hypot(...x);}this.x=x.map(v=>v/l);
  this.y=[g[1]*this.x[2]-g[2]*this.x[1],g[2]*this.x[0]-g[0]*this.x[2],g[0]*this.x[1]-g[1]*this.x[0]];
 }
 project(g:number[]){if(!this.x)this.center(g);const n=Math.hypot(...g);if(!this.x||!this.y||n<.5)return [0,0];return [g.reduce((a,b,i)=>a+b*this.x![i],0)/n,g.reduce((a,b,i)=>a+b*this.y![i],0)/n];}
}

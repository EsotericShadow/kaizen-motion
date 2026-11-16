export const clamp=(v:number,a:number,b:number)=>Math.max(a,Math.min(b,v));
export class GrainChamber {
 grains:Array<{x:number,y:number,z:number,vx:number,vy:number,vz:number,r:number}>=[];
 pulses:Array<{x:number,y:number,t:number,strength:number}>=[];
 w=.045;h=.052;d=.024;radius=.0008;shape='box';quiet=0;seed=12345;
 constructor(){this.reset(36);}
 random(){this.seed^=this.seed<<13;this.seed^=this.seed>>>17;this.seed^=this.seed<<5;return (this.seed>>>0)/4294967296;}
 reset(count:number){this.grains=[];for(let i=0;i<count;i++){const a=this.random()*Math.PI*2,r=Math.sqrt(this.random())*.3;this.grains.push({x:Math.cos(a)*this.w*r,y:Math.sin(a)*this.h*r,z:(this.random()-.5)*this.d*.7,vx:0,vy:0,vz:0,r:.7+this.random()*.2});}this.pulses=[];this.quiet=0;}
 step(dt:number,acc:number[],tilt:number[],energy:number,now:number){
  if(dt>.1){for(const g of this.grains)g.vx=g.vy=g.vz=0;return;}
  this.quiet=energy<.01?this.quiet+dt:0;if(this.quiet>.75)return;
  const steps=Math.ceil(dt/.003),h=dt/steps,drag=Math.exp(-h*7),r=this.radius;
  const ax=(-acc[0]+tilt[0]*1.2)*14,ay=(-acc[1]+tilt[1]*1.8)*14-1.8,az=-acc[2]*14;
  const hw=this.w/2-r,hh=this.h/2-r,hd=this.d/2-r;
  for(let s=0;s<steps;s++)for(const g of this.grains){
   g.vx=clamp((g.vx+ax*h)*drag,-3,3);g.vy=clamp((g.vy+ay*h)*drag,-3,3);g.vz=clamp((g.vz+az*h)*drag,-3,3);
   g.x+=g.vx*h;g.y+=g.vy*h;g.z+=g.vz*h;
   let hit=0;
   if(this.shape==='box'){
    if(Math.abs(g.x)>hw){g.x=Math.sign(g.x)*hw;hit=Math.abs(g.vx);g.vx=-g.vx*g.r;}
    if(Math.abs(g.y)>hh){g.y=Math.sign(g.y)*hh;hit=Math.max(hit,Math.abs(g.vy));g.vy=-g.vy*g.r;}
   }else{
    const q=g.x*g.x/(hw*hw)+g.y*g.y/(hh*hh);
    if(q>1){const length=Math.sqrt(q);g.x/=length;g.y/=length;let nx=g.x/(hw*hw),ny=g.y/(hh*hh),n=Math.hypot(nx,ny);nx/=n;ny/=n;
     const vn=g.vx*nx+g.vy*ny;if(vn>0){hit=vn;g.vx-=(1+g.r)*vn*nx;g.vy-=(1+g.r)*vn*ny;}
    }
   }
   if(Math.abs(g.z)>hd){g.z=Math.sign(g.z)*hd;hit=Math.max(hit,Math.abs(g.vz));g.vz=-g.vz*g.r;}
   if(hit>.1&&energy>.02&&this.pulses.length<20)this.pulses.push({x:g.x,y:g.y,t:now,strength:hit});
  }
  this.pulses=this.pulses.filter(p=>now-p.t<.35);
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

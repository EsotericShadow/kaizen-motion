import { GrainChamber, Grip } from '../src/physics';
import assert from 'node:assert/strict';
for(const shape of ['box','circle','oval']){
 const c=new GrainChamber();c.shape=shape;c.h=shape==='oval'?.035:.052;
 for(let i=0;i<1500;i++){const t=i*.01;c.step(.01,[Math.sin(t*12),Math.cos(t*9),Math.sin(t*7)],[0,0],.7,t);
  for(const g of c.grains){assert(Math.abs(g.z)<=c.d/2-c.radius+1e-8);if(shape==='box'){assert(Math.abs(g.x)<=c.w/2-c.radius+1e-8);assert(Math.abs(g.y)<=c.h/2-c.radius+1e-8);}else assert((g.x/(c.w/2-c.radius))**2+(g.y/(c.h/2-c.radius))**2<=1+1e-6);}
 }
 for(let i=0;i<200;i++)c.step(.01,[0,0,0],[0,0],0,15+i*.01);
 const before=JSON.stringify(c.grains);for(let i=0;i<20;i++)c.step(.01,[0,0,0],[0,0],0,17+i*.01);assert.equal(JSON.stringify(c.grains),before);
}
const grip=new Grip();grip.center([0,-1,0]);assert.deepEqual(grip.project([0,-1,0]),[0,0]);assert(grip.project([0,-.8,.6])[1]>.5);
console.log('PASS: box/circle/oval containment, idle rest and grip-relative Y.');

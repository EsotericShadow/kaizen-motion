import assert from 'node:assert/strict';
import {MotionExcitation} from '../src/motion-excitation';
function run(axis:number,angular:number,linear:number,rate=60){const e=new MotionExcitation();let level=0;for(let i=0;i<rate;i++){const a=[0,0,0],r=[0,0,0];a[axis]=linear;r[axis]=angular;e.update(a,r,i*1000/rate);level=e.value(i*1000/rate,.62);}return {e,level};}
for(const axis of [0,1,2]){
 const slow=run(axis,.5,0),fast=run(axis,2,0),reverse=run(axis,-2,0);assert(slow.level>.1);assert(fast.level>slow.level*1.5);assert(Math.abs(fast.level-reverse.level)<1e-10);
 assert(run(axis,0,.12).level>.2);assert(run(axis,0,-.12).level>.2);
 let level=fast.level;for(let i=60;i<150;i++){fast.e.update([0,0,0],[0,0,0],i*1000/60);level=fast.e.value(i*1000/60,.62);}assert.equal(level,0,'still phone must fall silent');
}
const noise=new MotionExcitation();for(let i=0;i<600;i++){noise.update([.003,-.003,.002],[.01,.01,.01],i*1000/60);assert.equal(noise.value(i*1000/60,.62),0,'resting noise must not excite');}
const missing=run(0,2,0);for(let t=1200;t<2200;t+=16)missing.e.value(t,.62);assert.equal(missing.e.level,0,'missing sensors must release excitation');
const rates=[30,60,120].map(rate=>run(1,1,0,rate).level);assert(Math.max(...rates)-Math.min(...rates)<.005,'response depends on sensor cadence');
const continuous=new MotionExcitation();let before=0,after=0;for(let i=0;i<90;i++){continuous.update([0,0,0],[0,1,0],i*1000/60);const l=continuous.value(i*1000/60,.62);if(i===45)before=l;if(i===89)after=l;}assert(Math.abs(before-after)<.005,'steady angular velocity must sustain excitation');
console.log('PASS: speed increases excitation; XYZ and both directions; steady angular velocity sustains; still/noise/missing input silent; 30/60/120 Hz.');

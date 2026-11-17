/** Short-term IMU speed estimate for playing, not position tracking.
 * Integrates gravity-free acceleration (g); gyro is actual angular velocity (rad/s).
 * Leaky integration prevents sensor bias becoming a permanent breath source.
 */
export class MotionExcitation{
 velocity=new Float64Array(3);level=0;lastSample=-Infinity;lastRead=-Infinity;speed=0;
 reset(){this.velocity.fill(0);this.level=this.speed=0;this.lastSample=this.lastRead=-Infinity;}
 update(acceleration:readonly number[],rotation:readonly number[],now:number){
  const elapsed=(now-this.lastSample)/1000;
  if(elapsed>.2)this.velocity.fill(0);
  const dt=Number.isFinite(elapsed)&&elapsed>0?Math.min(.05,elapsed):1/60;
  const leak=Math.exp(-dt/.35);
  for(let i=0;i<3;i++){
   const a=Number.isFinite(acceleration[i])?Math.max(-6,Math.min(6,acceleration[i]))*9.80665:0;
   const clean=Math.abs(a)>.12?a-Math.sign(a)*.12:0;
   this.velocity[i]=this.velocity[i]*leak+clean*dt;
  }
  const angular=Math.hypot(...rotation.map(v=>Number.isFinite(v)?Math.max(-25,Math.min(25,v)):0));
  // A 12cm hand arc makes turning the phone playable without requiring translation.
  this.speed=Math.max(Math.hypot(...this.velocity),Math.max(0,angular-.04)*.12);
  this.lastSample=now;
 }
 value(now:number,sensitivity:number){
  const dt=Number.isFinite(this.lastRead)?Math.max(0,Math.min(.1,(now-this.lastRead)/1000)):1/60;this.lastRead=now;
  const speed=now-this.lastSample<150?this.speed:0;
  const target=Math.sqrt(Math.max(0,Math.min(1,(speed-.012)*(.5+sensitivity)/.45)));
  this.level+=(target-this.level)*(1-Math.exp(-dt/(target>this.level?.018:.065)));
  if(target===0&&this.level<.003)this.level=0;
  return this.level;
 }
}

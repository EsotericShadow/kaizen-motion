export const SYNTH_VOICES=[
 {name:'Theremin',tag:'VOWEL',description:'Continuous pitch and OO–AH–EE colour.'},
 {name:'Velvet',tag:'WARMTH',description:'Warm sine layers with an octave below.'},
 {name:'Glass',tag:'SHIMMER',description:'Clear, bell-like partials that bloom with tilt.'},
 {name:'Orbit',tag:'SPREAD',description:'A drifting, detuned ensemble in your hand.'},
 {name:'Reed',tag:'BRIGHTNESS',description:'A woody harmonic voice that opens into a buzz.'}
] as const;
const TAU=Math.PI*2,GLASS_RATIOS=[1,2.756,5.404,8.933],GLASS_AMPS=[1,.3,.16,.09];
/** Continuous additive voices. Every partial is faded before Nyquist. */
export class SynthBank {
 phase=0;phases=new Float64Array([0,.9,1.7,2.6]);clock=0;
 weights=new Float64Array(16);desired=new Float64Array(16);
 weightMix:number;
 constructor(public rate:number){this.weightMix=1-Math.exp(-1/(rate*.012));}
 prepare(frequency:number,vowel:number){
  const p=vowel*2,k=p<1?0:1,t=p-k,formants=[[350,900,2200],[800,1250,2900],[300,2300,3100]],band=[180,280,450];let sum=0;
  for(let h=0;h<16;h++){const f=frequency*(h+1);let w=.045/(h+1);for(let b=0;b<3;b++){const c=formants[k][b]*(1-t)+formants[k+1][b]*t,d=(f-c)/band[b];w+=Math.exp(-.5*d*d)*(b===0?1:.65)/Math.sqrt(h+1);}if(h===0)w+=.3;this.desired[h]=w;sum+=w*w;}
  const norm=1/Math.sqrt(sum);for(let h=0;h<16;h++)this.desired[h]*=norm;
 }
 fade(f:number){return Math.max(0,Math.min(1,(this.rate*.45-f)/(this.rate*.07)));}
 render(f:number,y:number,voice:number){
  const mix=this.weightMix;this.clock+=1/this.rate;this.phase=(this.phase+TAU*f/this.rate)%TAU;
  let value=0;
  if(voice===0){for(let h=0;h<16;h++){this.weights[h]+=(this.desired[h]-this.weights[h])*mix;value+=Math.sin(this.phase*(h+1))*this.weights[h]*this.fade(f*(h+1));}return value*.24;}
  if(voice===1){this.phases[0]=(this.phases[0]+TAU*f*.5/this.rate)%TAU;return (Math.sin(this.phase)*.8+Math.sin(this.phases[0])*.25+Math.sin(this.phase*2)*y*.25*this.fade(f*2)+Math.sin(this.phase*3)*y*.1*this.fade(f*3))*.3;}
  if(voice===2){const ratios=GLASS_RATIOS,amps=GLASS_AMPS;for(let i=0;i<4;i++){const hz=f*ratios[i];this.phases[i]=(this.phases[i]+TAU*hz/this.rate)%TAU;value+=Math.sin(this.phases[i])*amps[i]*(i===0?1:.1+y)*this.fade(hz);}return value*.27;}
  if(voice===3){const spread=.001+y*.009;for(let i=0;i<4;i++){const hz=f*(i===3?.5:1+(i-1)*spread);this.phases[i]=(this.phases[i]+TAU*hz/this.rate)%TAU;value+=Math.sin(this.phases[i])*(.85+Math.sin(this.clock*(.7+i*.17)+i)*.15);}return value*.12;}
  const cutoff=400+y*6500;let norm=0;
  for(let h=1;h<=12;h++){const hz=f*h,weight=(h%2?1:.25)/h*Math.exp(-hz/cutoff)*this.fade(hz);value+=Math.sin(this.phase*h)*weight;norm+=weight*weight;}
  return value/Math.sqrt(Math.max(.05,norm))*.25;
 }
}

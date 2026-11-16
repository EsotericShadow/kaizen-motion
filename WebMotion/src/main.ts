import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Anatomy3D } from './ui/render/anatomy3d';
import { initChimera, chimeraModule, call } from './wasm/chimera';
import { NEUTRAL } from './neutral';
import { GrainChamber, Grip, clamp } from './physics';

const $=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
const canvas=$<HTMLCanvasElement>('field'),ctx=canvas.getContext('2d')!;
const startButton=$<HTMLButtonElement>('start'),touchStart=$<HTMLButtonElement>('touch-start');
const pause=$<HTMLButtonElement>('pause'),chamber=new GrainChamber(),grip=new Grip();
const keys=['jaw','tbX','tbY','ttX','ttY','ttCurl','root','lipAp','lipProt','lipWidth','labiodental','velum','larynx','epilarynx','ventricular','lateral','dorsum'];
let audio:AudioContext|undefined,node:AudioWorkletNode|undefined,mode=0,playing=false,busy=false,loaded=false;
let catalog:any,pcm:ArrayBuffer,vowels:number[][],artic:any={...NEUTRAL};
let head:Anatomy3D|undefined,gl:THREE.WebGLRenderer|undefined,orbit:OrbitControls|undefined,model:any;
let gravity=[0,-1,0],acceleration=[0,0,0],rotation=[0,0,0],tilt=[0,0],lastSensor=0;
let manualX=.5,manualY=.5,touchedUntil=0,pulseUntil=0,effort=0,lastFrame=performance.now(),lastSent=0,lastHead=0,sensitivity=.62;
let filteredPitch=.5,filteredVowel=.5,sensorPermission=false,firstSensor=true,gestureTime=0;
let width=360,height=240,activePointer=false,lastPoint:any=null,orientationZero:number|null=null,rawGamma=0;
let transferPointer:number|undefined;
startButton.disabled=touchStart.disabled=true;
const resources=(async()=>{
 await initChimera('./chimera.wasm');
 catalog=call('catalog');
 const table=catalog.vowelTargets.male;
 vowels=['u','a','i'].map(v=>keys.map(k=>table[v]?.artic[k]??catalog.neutral[k]));
 const response=await fetch('./shaker.pcm');if(!response.ok)throw new Error('Shaker samples could not load.');pcm=await response.arrayBuffer();
 if(pcm.byteLength!==64*2048*2)throw new Error('Incomplete shaker samples.');
 loaded=true;startButton.disabled=touchStart.disabled=false;$('load-status').textContent='Ready. Start with your volume low.';
})().catch(e=>{notice('The instruments could not load. Check your connection and reload.');$('load-status').textContent=String(e);throw e;});
function notice(text:string){$('notice').textContent=text;}
function status(){
 $('status').textContent=playing?'SOUND ON':'SOUND PAUSED';$('live-led').classList.toggle('on',playing);
 pause.disabled=!node;pause.textContent=playing?'Ⅱ':'▶';pause.setAttribute('aria-label',playing?'Pause sound':'Resume sound');
 $('sensor-status').textContent=lastSensor&&performance.now()-lastSensor<2000?'MOTION LIVE · PHONE SOUND':sensorPermission?'WAITING FOR MOTION':'TOUCH / MOUSE · PHONE SOUND';
}
function requestMotion():Promise<boolean>{
 const D:any=window.DeviceMotionEvent,O:any=window.DeviceOrientationEvent;
 if(!D)return Promise.resolve(false);
 // Invoke permission APIs directly in the tap handler, before awaiting anything.
 const asks:Promise<any>[]=[];
 if(typeof D.requestPermission==='function')asks.push(D.requestPermission());
 if(typeof O?.requestPermission==='function')asks.push(O.requestPermission());
 return asks.length?Promise.all(asks).then(r=>r.every(v=>v==='granted')):Promise.resolve(true);
}
async function begin(motion:boolean){
 if(busy)return;busy=true;startButton.textContent='Opening the instruments…';
 try{
  if ('audioSession' in navigator) { try { (navigator as any).audioSession.type = 'playback'; } catch {} }
  audio??=new AudioContext({latencyHint:'interactive'});
  const resumed=audio.resume();
  const allowed=motion?requestMotion().catch(()=>false):Promise.resolve(false);
  await Promise.all([resumed,resources]);sensorPermission=await allowed;
  await audio.audioWorklet.addModule('./audio-worklet.js');
  node=new AudioWorkletNode(audio,'motion-audio',{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2],processorOptions:{module:chimeraModule(),pcm,vowels}});
  node.onprocessorerror=()=>{playing=false;status();notice('The audio engine stopped. Reload to restart it.');};
  node.port.onmessage=e=>{
   if(e.data.type==='artic'){for(let i=0;i<keys.length;i++)artic[keys[i]]=e.data.values[i];}
   if(e.data.type==='error'){playing=false;status();notice('The audio engine stopped. Reload to restart it.');}
  };
  // Reserve output headroom. No microphone or remote audio is used.
  const output=audio.createGain();output.gain.value=.8;node.connect(output);output.connect(audio.destination);
  playing=true;$('welcome').hidden=true;$('gesture-caption').hidden=false;
  if(sensorPermission){firstSensor=true;grip.x=null;notice('Hold your phone comfortably, tap CENTRE, then move gently.');}
  else notice(motion?'Motion is unavailable or permission was declined. Drag to play; try opening this link in Safari or Chrome.':'Drag across the display to play. On a phone, tap “Enable motion” below to use its sensors.');
  status();send(true);
 }catch(e){notice(`Could not start sound: ${e instanceof Error?e.message:String(e)}. Try Safari or Chrome.`);startButton.textContent='Try enabling sound again';}
 finally{busy=false;}
}
startButton.addEventListener('click',()=>begin(true));touchStart.addEventListener('click',()=>begin(false));
pause.addEventListener('click',async()=>{if(!audio)return;await audio.resume();playing=!playing;status();send(true);});
$('centre').addEventListener('click',()=>{grip.center(gravity);orientationZero=rawGamma;manualX=manualY=.5;filteredPitch=filteredVowel=.5;notice('Centred on this grip.');});
$('test').addEventListener('click',async()=>{if(!node){await begin(false);if(!node)return;}if(audio?.state!=='running')await audio?.resume();playing=true;manualX=.5;manualY=.5;touchedUntil=performance.now()+1000;pulseUntil=performance.now()+220;gestureTime=performance.now();status();send(true);});
$('sensitivity').addEventListener('input',e=>{sensitivity=Number((e.target as HTMLInputElement).value)/100;$('sensitivity-output').textContent=String(Math.round(sensitivity*100)).padStart(2,'0');});
document.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach(b=>b.addEventListener('click',()=>setMode(Number(b.dataset.mode))));
function setMode(next:number){
 mode=next;effort=0;pulseUntil=0;chamber.reset(chamber.grains.length);
 document.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach(b=>{const selected=Number(b.dataset.mode)===mode;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});
 $('chamber').hidden=mode!==0;$('touch-pad').hidden=mode===0;
 $('touch-pad').setAttribute('aria-valuemax',mode===2?'880':'1760');
 $('screen-name').textContent=['LOOSE GRAIN CHAMBER','CONTINUOUS THEREMIN','LIVE VOCAL ANATOMY'][mode];
 $('screen-detail').textContent=['XYZ','110—1760 HZ','CHIMERA'][mode];
 $('gesture-caption').textContent=mode===0?'SHAKE IN ANY DIRECTION · DRAG TO RATTLE':mode===1?'SIDE TILT: PITCH · FORWARD / BACK: VOWEL':'TILT TO SING · DRAG THE HEAD TO ROTATE';
 $('description').innerHTML=['A handful of grains.<br>A chamber in your hand.<br>Every movement has a texture.','A continuous voice.<br>No keys. No steps.<br>Just the shape of a gesture.','A living vocal tract.<br>Tongue, lips and breath.<br>Play the anatomy of a voice.'][mode];
 $('voice-credit').textContent=mode===2?'CHIMERA · JAMESON HODGE':'PLAYED BY MOVEMENT';
 $('x-label').textContent=mode===0?'X / Y':'PITCH';$('y-label').textContent=mode===0?'ENERGY':'VOWEL';$('z-label').textContent=mode===0?'Z':'BREATH Z';
 canvas.hidden=mode===2;$('head').hidden=mode!==2;
 if(mode===2&&loaded)ensureHead();status();send(true);
}
function ensureHead(){
 if(gl)return;
 try{
  const h=$('head');gl=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});gl.setPixelRatio(Math.min(devicePixelRatio,1.5));gl.setClearColor(0,0);h.appendChild(gl.domElement);
  head=new Anatomy3D();head.centred=true;
  const m:any=call('model',{body:{female:0,child:0},sampleRate:audio?.sampleRate??48000});
  const k=m.body.scale,ph=m.body.pharynx;
  model={bodyParams:m.body,tract:{scale:k,P:(x:number,y:number)=>({x:(x>.5?.5+(x-.5)*.86:x)*k,y:(y<7?7-(7-y)*ph:y)*k}),unP:(x:number,y:number)=>({x:x/k>.5?.5+(x/k-.5)/.86:x/k,y:y/k<7?7-(7-y/k)/ph:y/k})},frame:(a:any)=>call('frame',{model:m.model,artic:a})};
  resize();const p=head.poses(model);head.camera.position.copy(p.home);head.camera.lookAt(p.target);
  orbit=new OrbitControls(head.camera,gl.domElement);orbit.target.copy(p.target);orbit.enablePan=orbit.enableZoom=false;orbit.update();
 }catch(e){notice('The 3D view is unavailable in this browser. The voice can still play.');console.error(e);}
}
function resize(){
 const rect=canvas.getBoundingClientRect(),parent=$('glass');width=parent.clientWidth;height=parent.clientHeight-71;
 const dpr=Math.min(devicePixelRatio,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
 if(gl&&head){gl.setSize(width,height);head.resize(width,height);if(model&&orbit){const p=head.poses(model);head.camera.position.copy(p.home);orbit.target.copy(p.target);orbit.update();}}
}
addEventListener('resize',resize);new ResizeObserver(resize).observe($('glass'));resize();
addEventListener('devicemotion',(event:DeviceMotionEvent)=>{
 if(!sensorPermission)return;const a=event.acceleration,g=event.accelerationIncludingGravity;
 if(!g||g.x==null||g.y==null||g.z==null)return;
 const now=performance.now();lastSensor=now;
 acceleration=[a?.x??0,a?.y??0,a?.z??0].map(x=>x/9.80665);
 gravity=[g.x-(a?.x??0),g.y-(a?.y??0),g.z-(a?.z??0)].map(x=>x/9.80665);
 rotation=[event.rotationRate?.alpha??0,event.rotationRate?.beta??0,event.rotationRate?.gamma??0].map(x=>x*Math.PI/180);
 if(firstSensor){grip.center(gravity);orientationZero=rawGamma;firstSensor=false;}
 tilt=grip.project(gravity);
 const sensed=Math.max(0,Math.hypot(...acceleration)-.035)*1.8+Math.max(0,Math.hypot(...rotation)-.15)*.08;
 effort=Math.max(effort,clamp(sensed*(.5+sensitivity),0,1));send(false);status();
},{passive:true});
addEventListener('deviceorientation',(event:DeviceOrientationEvent)=>{if(event.gamma!=null)rawGamma=event.gamma;},{passive:true});
function control(now=performance.now()){
 const manual=now<touchedUntil||!sensorPermission||now-lastSensor>1500;
 const pitch=manual?manualX:clamp(.5+Math.asin(clamp(tilt[0],-1,1))/Math.PI*(.5+sensitivity),0,1);
 const vowel=manual?manualY:clamp(.5-tilt[1]*(.7+sensitivity),0,1);
 filteredPitch+=(pitch-filteredPitch)*.35;filteredVowel+=(vowel-filteredVowel)*.35;
 const frequency=110*Math.pow(2,filteredPitch*(mode===2?3:4));
 return {frequency,vowel:filteredVowel,breath:clamp(.55-acceleration[2]*.65,.05,1)};
}
function send(force:boolean){if(!node)return;const now=performance.now();if(!force&&now-lastSent<9)return;lastSent=now;
 const c=control(now);node.port.postMessage({type:'state',mode,enabled:playing,...c,effort:Math.max(effort,now<pulseUntil?.65:0)});
}
function pointerMove(event:PointerEvent){
 const area=event.currentTarget as HTMLElement,rect=area.getBoundingClientRect(),x=clamp((event.clientX-rect.left)/rect.width,0,1),y=clamp((event.clientY-rect.top)/rect.height,0,1),now=performance.now();
 manualX=x;manualY=1-y;touchedUntil=now+2000;gestureTime=now;
 if(lastPoint&&mode===0){const dt=Math.max(8,now-lastPoint.t),dx=(x-lastPoint.x)/dt*1000,dy=(y-lastPoint.y)/dt*1000;effort=Math.max(effort,clamp(Math.hypot(dx,dy)*.13,0,1));acceleration=[clamp(dx*.3,-2,2),clamp(-dy*.3,-2,2),0];}
 lastPoint={x,y,t:now};
 const dot=$('touch-pad').querySelector('i')!;dot.style.left=`${x*100}%`;dot.style.top=`${y*100}%`;
 $('touch-pad').setAttribute('aria-valuenow',String(Math.round(110*Math.pow(2,x*(mode===2?3:4)))));send(true);
}
for(const element of [canvas,$('touch-pad')]){
 element.addEventListener('pointerdown',(e:any)=>{if(!node)return;activePointer=true;lastPoint=null;element.setPointerCapture(e.pointerId);pointerMove(e);});
 element.addEventListener('pointermove',(e:any)=>{if(activePointer)pointerMove(e);});
 const end=()=>{activePointer=false;lastPoint=null;};element.addEventListener('pointerup',end);element.addEventListener('pointercancel',end);
}
$('touch-pad').addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();manualX=clamp(manualX+(e.key==='ArrowRight'?.025:e.key==='ArrowLeft'?-.025:0),0,1);manualY=clamp(manualY+(e.key==='ArrowUp'?.05:e.key==='ArrowDown'?-.05:0),0,1);touchedUntil=performance.now()+3000;$('touch-pad').setAttribute('aria-valuenow',String(Math.round(110*Math.pow(2,manualX*(mode===2?3:4)))));send(true);}});
function geometry(){const size=Number($<HTMLInputElement>('size').value)/1000;chamber.shape=$<HTMLSelectElement>('shape').value;chamber.w=size;chamber.h=chamber.shape==='circle'?size:chamber.shape==='oval'?size*.62:size*1.12;chamber.radius=Number($<HTMLInputElement>('grain-size').value)/2000;chamber.reset(Number($<HTMLInputElement>('fill').value));}
for(const id of ['shape','fill','size','grain-size'])$(id).addEventListener('input',geometry);
function draw(now:number,dt:number){
 ctx.clearRect(0,0,width,height);ctx.save();ctx.translate(width/2,height/2);
 if(mode===0){
  const scale=Math.min((width-70)/chamber.w,(height-48)/chamber.h),hw=chamber.w*scale/2,hh=chamber.h*scale/2;
  ctx.lineWidth=1;ctx.strokeStyle='#8b9b6e77';ctx.beginPath();if(chamber.shape==='box')ctx.roundRect(-hw,-hh,hw*2,hh*2,12);else ctx.ellipse(0,0,hw,hh,0,0,Math.PI*2);ctx.stroke();
  for(const p of chamber.pulses){const age=now/1000-p.t;if(age<0||age>.35)continue;ctx.strokeStyle=`rgba(233,180,94,${(1-age/.35)*.5})`;ctx.lineWidth=1;ctx.beginPath();ctx.arc(p.x*scale,-p.y*scale,3+age*90,0,Math.PI*2);ctx.stroke();}
  const sorted=[...chamber.grains].sort((a,b)=>a.z-b.z);
  for(const g of sorted){const depth=1+g.z*4;ctx.fillStyle=`rgba(216,202,150,${.4+(g.z/chamber.d+.5)*.5})`;ctx.beginPath();ctx.arc(g.x*scale,-g.y*scale,Math.max(1.5,chamber.radius*scale)*depth,0,Math.PI*2);ctx.fill();}
 }else{
  ctx.strokeStyle='#70876233';ctx.lineWidth=1;for(let i=-2;i<=2;i++){ctx.beginPath();ctx.moveTo(-width*.4,i*height*.14);ctx.lineTo(width*.4,i*height*.14);ctx.stroke();}
  const c=control(now),strength=playing?1:.2;ctx.strokeStyle=`rgba(209,195,145,${strength})`;ctx.lineWidth=1.4;ctx.beginPath();
  for(let x=-width*.42;x<=width*.42;x+=2){const y=Math.sin((x/width*7+now/1600)*Math.PI*2)*(12+filteredVowel*25)*Math.sin((x/width+.42)/.84*Math.PI);if(x===-width*.42)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.stroke();
  const x=(filteredPitch-.5)*width*.7,y=(.5-filteredVowel)*height*.65;ctx.fillStyle='#ead9aa';ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fill();
 }
 ctx.restore();
}
function frame(now:number){requestAnimationFrame(frame);const dt=Math.min(.05,(now-lastFrame)/1000);lastFrame=now;
 effort*=Math.exp(-dt/.06);if(effort<.004)effort=0;
 if(!lastSensor||now-lastSensor>500){acceleration=acceleration.map(x=>x*Math.exp(-dt/.05));rotation=[0,0,0];}
 const energy=Math.max(effort,now<pulseUntil?.65:0);chamber.step(dt,acceleration,tilt,energy,now/1000);
 if(mode===0||mode===1)draw(now,dt);
 else if(head&&gl&&model&&now-lastHead>40){const elapsed=Math.min(.08,(now-lastHead)/1000);lastHead=now;head.face.update(null,elapsed);head.update(model,model.frame(artic),artic,null,{pressure:false,particles:false,calipers:false,grid:false},elapsed);gl.render(head.scene,head.camera);}
 if(now-lastSent>30)send(false);
 if(Math.floor(now/100)!==Math.floor((now-dt*1000)/100)){
  const c=control(now);$('xy-value').textContent=mode===0?`${Math.round(tilt[0]*99).toString().padStart(2,'0')} / ${Math.round(tilt[1]*99).toString().padStart(2,'0')}`:`${Math.round(c.frequency)} HZ`;
  $('energy-value').textContent=mode===0?String(Math.round(energy*127)).padStart(3,'0'):['OO','OO–AH','AH','AH–EE','EE'][Math.min(4,Math.floor(c.vowel*5))];
  $('z-value').textContent=String(Math.round((mode===0?Math.abs(acceleration[2]):c.breath)*100)).padStart(3,'0');
 }
}
requestAnimationFrame(frame);
document.addEventListener('visibilitychange',()=>{if(document.hidden&&node){playing=false;send(true);status();audio?.suspend();notice('Sound paused while you were away. Tap ▶ to resume.');}});
$('share').addEventListener('click',async()=>{try{const url=location.origin+location.pathname;if(navigator.share)await navigator.share({title:'Kaizen Motion',text:'Your phone is an instrument. Shake, tilt, play.',url});else{await navigator.clipboard.writeText(url);notice('Link copied. Share it anywhere.');}}catch(e){if((e as Error).name!=='AbortError')notice('Copy this page’s address to share Motion.');}});
const motionButton=document.createElement('button');motionButton.textContent='Enable motion';motionButton.addEventListener('click',async()=>{sensorPermission=await requestMotion().catch(()=>false);firstSensor=true;notice(sensorPermission?'Motion enabled. Hold comfortably and tap CENTRE.':'Motion permission is unavailable here. Open in Safari/Chrome or keep playing with touch.');status();});document.querySelector('footer nav')?.appendChild(motionButton);

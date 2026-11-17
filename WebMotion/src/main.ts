import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Anatomy3D } from './ui/render/anatomy3d';
import { initChimera, chimeraModule, call } from './wasm/chimera';
import { NEUTRAL } from './neutral';
import { GrainChamber, Grip, clamp } from './physics';
import { SYNTH_VOICES } from './synth';
import { initCommunity } from './community';
import { noteFrequency, pitchNote, scaleNotes, nearestAllowedNote, pitchClass } from './notes';
import { initUsage } from './usage';
import { MotionExcitation } from './motion-excitation';

const $=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
const canvas=$<HTMLCanvasElement>('field'),ctx=canvas.getContext('2d')!;
const startButton=$<HTMLButtonElement>('start'),touchStart=$<HTMLButtonElement>('touch-start');
const pause=$<HTMLButtonElement>('pause'),chamber=new GrainChamber(),grip=new Grip();
const keys=['jaw','tbX','tbY','ttX','ttY','ttCurl','root','lipAp','lipProt','lipWidth','labiodental','velum','larynx','epilarynx','ventricular','lateral','dorsum'];
let audio:AudioContext|undefined,node:AudioWorkletNode|undefined,mode=2,playing=false,busy=false,loaded=false;
let synthVoice=0,lastSnapshot=0,scope=new Float32Array(512),scopeWrite=0;
let catalog:any,pcm:ArrayBuffer,shakerBank:any,vowels:number[][],artic:any={...NEUTRAL};
let head:Anatomy3D|undefined,gl:THREE.WebGLRenderer|undefined,orbit:OrbitControls|undefined,model:any;
let gravity=[0,-1,0],acceleration=[0,0,0],rotation=[0,0,0],tilt=[0,0],lastSensor=0;
let manualX=.5,manualY=.5,touchedUntil=0,pulseUntil=0,effort=0,lastFrame=performance.now(),lastSent=0,lastHead=0,sensitivity=.62;
const gravityEstimate=[0,-9.80665,0];let lastMotionTime=0;
let filteredPitch=.5,filteredVowel=.5,sensorPermission=false,firstSensor=true,gestureTime=0;
let width=360,height=240,activePointer=false,lastPoint:any=null,orientationZero:number|null=null,rawGamma=0;
let transferPointer:number|undefined;
let heldMidi:number|null=null,noteOctave=4,noteBrowse=false,actualFrequency=311;
let scaleEnabled=false,scaleRoot=0,scalePreset='major',allowedNotes=scaleNotes(0,'major'),lastSnapped:number|null=null,notesVisible=true,editingNotes=false;
const motionExcitation=new MotionExcitation();
let touchExcitation=0,touchExcitationAt=-Infinity;
let lastControl:{frequency:number;vowel:number;breath:number;excitation?:number}={frequency:311,vowel:.5,breath:.55};
startButton.disabled=touchStart.disabled=true;
const resources=(async()=>{
 await initChimera('./chimera.wasm');
 catalog=call('catalog');
 const table=catalog.vowelTargets.male;
 vowels=['u','a','i'].map(v=>keys.map(k=>table[v]?.artic[k]??catalog.neutral[k]));
 const [response,metadata]=await Promise.all([fetch('./shaker-strokes.pcm'),fetch('./shaker-bank.json')]);
 if(!response.ok||!metadata.ok)throw new Error('Shaker recordings could not load.');
 [pcm,shakerBank]=await Promise.all([response.arrayBuffer(),metadata.json()]);
 if(pcm.byteLength!==shakerBank.count*shakerBank.frames_per_stroke*2)throw new Error('Incomplete shaker recordings.');
 loaded=true;if(mode===2)ensureHead();startButton.disabled=touchStart.disabled=false;$('load-status').textContent='Ready. Start with your volume low.';
})().catch(e=>{notice('The instruments could not load. Check your connection and reload.');$('load-status').textContent=String(e);throw e;});
let noticeTimer:ReturnType<typeof setTimeout>|undefined;
function notice(text:string){$('notice').textContent=text;clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>{$('notice').textContent='';},4500);}
function status(){
 $('status').textContent=node?(playing?'SOUND ON':'SOUND PAUSED'):'READY TO PLAY';$('live-led').classList.toggle('on',playing);
 pause.disabled=!node;pause.textContent=playing?'Ⅱ':'▶';pause.setAttribute('aria-label',playing?'Pause sound':'Resume sound');
 $('sensor-status').textContent=!node?'SOUND ON THIS DEVICE':lastSensor&&performance.now()-lastSensor<2000?'MOTION LIVE · PHONE SOUND':sensorPermission?'WAITING FOR MOTION':'TOUCH / MOUSE · PHONE SOUND';
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
  await Promise.all([resumed,resources]);sensorPermission=await allowed;motionExcitation.reset();
  await audio.audioWorklet.addModule('./audio-worklet.js');
  node=new AudioWorkletNode(audio,'motion-audio',{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2],processorOptions:{module:chimeraModule(),pcm,shakerBank,vowels}});
  node.onprocessorerror=()=>{playing=false;status();notice('The audio engine stopped. Reload to restart it.');};
  node.port.onmessage=e=>{
   if(Number.isFinite(e.data.frequency)&&e.data.frequency>0)actualFrequency=e.data.frequency;
   if(e.data.type==='scope'){scope=e.data.values;scopeWrite=e.data.writeIndex;}
   if(e.data.type==='artic'){for(let i=0;i<keys.length;i++)artic[keys[i]]=e.data.values[i];}
   if(e.data.type==='grains'){
    chamber.count=e.data.count;const pos=e.data.positions,now=performance.now()/1000;
    for(let i=0;i<chamber.count;i++){const g=chamber.grains[i];g.x=pos[i*3];g.y=pos[i*3+1];g.z=pos[i*3+2];}
    for(let i=0;i<6;i++){const p=chamber.pulses[i],j=i*4;p.x=e.data.impacts[j];p.y=e.data.impacts[j+1];p.t=now-e.data.impacts[j+2];p.strength=e.data.impacts[j+3];}
   }
   if(e.data.type==='error'){playing=false;status();notice('The audio engine stopped. Reload to restart it.');}
  };
  // Reserve output headroom. No microphone or remote audio is used.
  const output=audio.createGain();output.gain.value=.8;node.connect(output);output.connect(audio.destination);
  geometry();playing=true;$('welcome').hidden=true;$('gesture-caption').hidden=false;
  if(sensorPermission){firstSensor=true;grip.x=null;notice('Hold comfortably and tap CENTRE. Move to breathe; faster movement gives stronger excitation. Stop to fall silent.');}
  else notice(motion?'Motion is unavailable or permission was declined. Drag to play; try opening this link in Safari or Chrome.':'Drag across the display to play. On a phone, tap “Enable motion” below to use its sensors.');
  status();send(true);
 }catch(e){notice(`Could not start sound: ${e instanceof Error?e.message:String(e)}. Try Safari or Chrome.`);startButton.textContent='Try enabling sound again';}
 finally{busy=false;}
}
startButton.addEventListener('click',()=>begin(true));touchStart.addEventListener('click',()=>begin(false));
pause.addEventListener('click',async()=>{if(!audio)return;await audio.resume();playing=!playing;status();send(true);});
$('centre').addEventListener('click',()=>{motionExcitation.reset();heldMidi=null;noteBrowse=false;updateHeld();grip.center(gravity);orientationZero=rawGamma;manualX=manualY=.5;filteredPitch=filteredVowel=.5;notice('Centred on this grip.');});
$('test').addEventListener('click',async()=>{heldMidi=null;updateHeld();if(!node){await begin(false);if(!node)return;}if(audio?.state!=='running')await audio?.resume();playing=true;manualX=.5;manualY=.5;touchedUntil=performance.now()+1000;pulseUntil=performance.now()+220;gestureTime=performance.now();status();send(true);});
$('sensitivity').addEventListener('input',e=>{sensitivity=Number((e.target as HTMLInputElement).value)/100;$('sensitivity-output').textContent=String(Math.round(sensitivity*100)).padStart(2,'0');});
document.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach(b=>b.addEventListener('click',()=>setMode(Number(b.dataset.mode))));
function setMode(next:number){
 mode=next;motionExcitation.reset();touchExcitation=0;touchExcitationAt=-Infinity;if(heldMidi!==null&&noteFrequency(heldMidi)>(mode===2?880:1760))heldMidi=null;effort=0;pulseUntil=0;chamber.reset(chamber.count);
 document.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach(b=>{const selected=Number(b.dataset.mode)===mode;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});
 $('excitation-controls').hidden=mode!==2;
 $('note-panel').hidden=mode===0;$('shaker-options').hidden=mode!==0;$('note-plane').hidden=mode===0;$('mode-hint').hidden=mode===1;renderNoteGrid();
 $('chamber').hidden=mode!==0;$('touch-pad').hidden=mode===0;$('synth-bank').hidden=mode!==1;
 $('touch-pad').setAttribute('aria-valuemax',mode===2?'880':'1760');
 $('screen-name').textContent=['LOOSE GRAIN CHAMBER','CONTINUOUS THEREMIN','LIVE VOCAL ANATOMY'][mode];
 $('screen-detail').textContent=['XYZ','110—1760 HZ','CHIMERA'][mode];$('mode-hint').textContent=mode===0?'Shake in any direction.':'Move to breathe · tilt for pitch.';
 $('gesture-caption').textContent=mode===0?'SHAKE IN ANY DIRECTION · DRAG TO RATTLE':mode===1?'SIDE TILT: PITCH · FORWARD / BACK: VOWEL':'MOVE TO BREATHE · TILT FOR PITCH';
 $('description').innerHTML=['A handful of grains.<br>A chamber in your hand.<br>Every movement has a texture.','A continuous voice.<br>No keys. No steps.<br>Just the shape of a gesture.','A living vocal tract.<br>Tongue, lips and breath.<br>Play the anatomy of a voice.'][mode];
 $('voice-credit').textContent=mode===2?'CHIMERA · JAMESON HODGE':'PLAYED BY MOVEMENT';
 $('x-label').textContent=mode===0?'X / Y':'PITCH';$('y-label').textContent=mode===0?'ENERGY':'VOWEL';$('z-label').textContent=mode===0?'Z':mode===2?'EXCITATION':'BREATH Z';
 canvas.hidden=mode===2;$('head').hidden=mode!==2;
 if(mode===2&&loaded)ensureHead();if(mode===1)updateSynthLabels();status();send(true);
}

function updateSynthLabels(){
 const voice=SYNTH_VOICES[synthVoice];
 document.querySelectorAll<HTMLButtonElement>('[data-synth]').forEach(b=>{const selected=Number(b.dataset.synth)===synthVoice;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});
 $('screen-name').textContent=voice.name.toUpperCase()+' / CONTINUOUS SYNTH';
 $('y-label').textContent=voice.tag;
 $('description').textContent=voice.description;
 $('gesture-caption').textContent='SIDE TILT: PITCH · FORWARD / BACK: '+voice.tag;
 $('touch-pad').querySelector('span:last-child')!.textContent=synthVoice===0?'LOW ↔ HIGH · OO ↕ EE':'X: PITCH · Y: COLOUR';
}
document.querySelectorAll<HTMLButtonElement>('[data-synth]').forEach(b=>b.addEventListener('click',()=>{synthVoice=Number(b.dataset.synth);updateSynthLabels();send(true);}));

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
 const rect=canvas.getBoundingClientRect(),parent=$('glass');width=parent.clientWidth;height=parent.clientHeight-83;
 const dpr=Math.min(devicePixelRatio,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
 if(gl&&head){gl.setSize(width,height);head.resize(width,height);if(model&&orbit){const p=head.poses(model);head.camera.position.copy(p.home);orbit.target.copy(p.target);orbit.update();}}
}
addEventListener('resize',resize);new ResizeObserver(resize).observe($('glass'));resize();
addEventListener('devicemotion',(event:DeviceMotionEvent)=>{
 if(!sensorPermission)return;const a=event.acceleration,g=event.accelerationIncludingGravity;
 if(!g||g.x==null||g.y==null||g.z==null)return;
 const now=performance.now();lastSensor=now;
 const dt=Math.min(.05,Math.max(.005,(now-lastMotionTime)/1000));lastMotionTime=now;
 const raw=[g.x,g.y,g.z];
 for(let i=0;i<3;i++)gravityEstimate[i]+=(raw[i]-gravityEstimate[i])*(1-Math.exp(-dt/.22));
 if(a?.x!=null&&a?.y!=null&&a?.z!=null){acceleration=[a.x,a.y,a.z].map(x=>x/9.80665);gravity=[g.x-a.x,g.y-a.y,g.z-a.z].map(x=>x/9.80665);}
 else{acceleration=raw.map((x,i)=>(x-gravityEstimate[i])/9.80665);gravity=gravityEstimate.map(x=>x/9.80665);}
 rotation=[event.rotationRate?.alpha??0,event.rotationRate?.beta??0,event.rotationRate?.gamma??0].map(x=>x*Math.PI/180);
 if(firstSensor){grip.center(gravity);orientationZero=rawGamma;firstSensor=false;}
 tilt=grip.project(gravity);
 motionExcitation.update(acceleration,rotation,now);
 const sensed=Math.max(0,Math.hypot(...acceleration)-.035)*1.8+Math.max(0,Math.hypot(...rotation)-.15)*.08;
 effort=Math.max(effort,clamp(sensed*(.5+sensitivity),0,1));send(false);
},{passive:true});
addEventListener('deviceorientation',(event:DeviceOrientationEvent)=>{if(event.gamma!=null)rawGamma=event.gamma;},{passive:true});
function control(now=performance.now()){
 const manual=now<touchedUntil||!sensorPermission||now-lastSensor>1500;
 const pitch=manual?manualX:clamp(.5+Math.asin(clamp(tilt[0],-1,1))/Math.PI*(.5+sensitivity),0,1);
 const vowel=manual?manualY:clamp(.5-tilt[1]*(.7+sensitivity),0,1);
 filteredPitch+=(pitch-filteredPitch)*.35;filteredVowel+=(vowel-filteredVowel)*.35;
 let frequency=heldMidi===null?110*Math.pow(2,filteredPitch*(mode===2?3:4)):Math.min(mode===2?880:1760,noteFrequency(heldMidi));
 if(scaleEnabled&&mode!==0){lastSnapped=nearestAllowedNote(frequency,allowedNotes,mode===2?880:1760,heldMidi??lastSnapped);frequency=noteFrequency(lastSnapped);}else lastSnapped=null;
 return {frequency,vowel:filteredVowel,breath:clamp(.55-acceleration[2]*.65,.05,1),excitation:mode===2?(sensorPermission&&lastSensor>0&&now-lastSensor<1500?motionExcitation.value(now,sensitivity):Math.max(now<pulseUntil?.65:0,touchExcitation*Math.exp(-Math.max(0,now-touchExcitationAt)/85))):undefined};
}
function send(force:boolean){if(!node)return;const now=performance.now();if(!force&&now-lastSent<9)return;lastSent=now;
 const c=control(now);lastControl=c;node.port.postMessage({type:'state',mode,voice:synthVoice,enabled:playing,...c,acceleration:acceleration.map(x=>x*(.45+sensitivity*1.55)),tilt,pulse:now<pulseUntil});
}
function pointerMove(event:PointerEvent){
 heldMidi=null;updateHeld();
 const area=event.currentTarget as HTMLElement,rect=area.getBoundingClientRect(),x=clamp((event.clientX-rect.left)/rect.width,0,1),y=clamp((event.clientY-rect.top)/rect.height,0,1),now=performance.now();
 manualX=x;manualY=1-y;touchedUntil=now+2000;gestureTime=now;
 if(mode===2&&(!sensorPermission||!lastSensor||now-lastSensor>1500)){
  const dt=lastPoint?Math.max(8,now-lastPoint.t)/1000:0;
  touchExcitation=lastPoint?clamp(Math.hypot(x-lastPoint.x,y-lastPoint.y)/dt*.4,0,1):.45;touchExcitationAt=now;
 }
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
$('touch-pad').addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();heldMidi=null;updateHeld();manualX=clamp(manualX+(e.key==='ArrowRight'?.025:e.key==='ArrowLeft'?-.025:0),0,1);manualY=clamp(manualY+(e.key==='ArrowUp'?.05:e.key==='ArrowDown'?-.05:0),0,1);touchedUntil=performance.now()+3000;$('touch-pad').setAttribute('aria-valuenow',String(Math.round(110*Math.pow(2,manualX*(mode===2?3:4)))));send(true);}});
function geometry(){const size=Number($<HTMLInputElement>('size').value)/1000;chamber.shape=$<HTMLSelectElement>('shape').value;chamber.w=size;chamber.h=chamber.shape==='circle'?size:chamber.shape==='oval'?size*.62:size*1.12;chamber.radius=Number($<HTMLInputElement>('grain-size').value)/2000;chamber.reset(Number($<HTMLInputElement>('fill').value));node?.port.postMessage({type:'geometry',shape:chamber.shape,width:chamber.w,height:chamber.h,depth:chamber.d,radius:chamber.radius,count:chamber.count,material:Number($<HTMLSelectElement>('material').value)});}
for(const id of ['shape','fill','size','grain-size','material'])$(id).addEventListener('input',geometry);
function draw(now:number,dt:number){
 ctx.clearRect(0,0,width,height);ctx.save();ctx.translate(width/2,height/2);
 if(mode===0){
  const scale=Math.min((width-70)/chamber.w,(height-48)/chamber.h),hw=chamber.w*scale/2,hh=chamber.h*scale/2;
  ctx.lineWidth=1;ctx.strokeStyle='#8b9b6e77';ctx.beginPath();if(chamber.shape==='box')ctx.roundRect(-hw,-hh,hw*2,hh*2,12);else ctx.ellipse(0,0,hw,hh,0,0,Math.PI*2);ctx.stroke();
  for(const p of chamber.pulses){const age=now/1000-p.t;if(age<0||age>.35)continue;ctx.strokeStyle=`rgba(233,180,94,${(1-age/.35)*.5})`;ctx.lineWidth=1;ctx.beginPath();ctx.arc(p.x*scale,-p.y*scale,3+age*90,0,Math.PI*2);ctx.stroke();}
  const sorted=chamber.grains.slice(0,chamber.count).sort((a,b)=>a.z-b.z);
  for(const g of sorted){const depth=1+g.z*4;ctx.fillStyle=`rgba(216,202,150,${.4+(g.z/chamber.d+.5)*.5})`;ctx.beginPath();ctx.arc(g.x*scale,-g.y*scale,Math.max(1.5,chamber.radius*scale)*depth,0,Math.PI*2);ctx.fill();}
 }else{
  ctx.strokeStyle='#70876233';ctx.lineWidth=1;for(let i=-2;i<=2;i++){ctx.beginPath();ctx.moveTo(-width*.4,i*height*.14);ctx.lineTo(width*.4,i*height*.14);ctx.stroke();}
  const c=control(now),strength=playing?1:.2;ctx.strokeStyle=`rgba(209,195,145,${strength})`;ctx.lineWidth=1.4;ctx.beginPath();
  let zero=0,peak=.1;for(let i=0;i<512;i++)peak=Math.max(peak,Math.abs(scope[i]));for(let i=1;i<128;i++){if(scope[(scopeWrite+i-1)&511]<=0&&scope[(scopeWrite+i)&511]>0){zero=i;break;}}for(let i=0;i<384;i++){const x=(i/383-.5)*width*.84,y=-scope[(scopeWrite+zero+i)&511]/Math.max(.2,peak)*height*.25;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.stroke();
  const x=(filteredPitch-.5)*width*.7,y=(.5-filteredVowel)*height*.65;ctx.fillStyle='#ead9aa';ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fill();
 }
 ctx.restore();
}
function frame(now:number){requestAnimationFrame(frame);const dt=Math.min(.05,(now-lastFrame)/1000);lastFrame=now;
 effort*=Math.exp(-dt/.06);if(effort<.004)effort=0;
 if(!lastSensor||now-lastSensor>500){acceleration=acceleration.map(x=>x*Math.exp(-dt/.05));rotation=[0,0,0];}
 const energy=Math.max(effort,now<pulseUntil?.65:0);
 if(node&&now-lastSnapshot>40){lastSnapshot=now;node.port.postMessage({type:'snapshot'});}
 if(mode===0||mode===1)draw(now,dt);
 else if(head&&gl&&model&&now-lastHead>40){const elapsed=Math.min(.08,(now-lastHead)/1000);lastHead=now;head.face.update(null,elapsed);head.update(model,model.frame(artic),artic,null,{pressure:false,particles:false,calipers:false,grid:false},elapsed);gl.render(head.scene,head.camera);}
 if(now-lastSent>30)send(false);
 if(Math.floor(now/100)!==Math.floor((now-dt*1000)/100)){
  status();
  const c=lastControl;const shown=playing?actualFrequency:c.frequency;const note=pitchNote(shown);const currentOctave=Math.max(2,Math.min(mode===2?5:6,Math.floor(note.midi/12)-1));if(mode!==0&&playing&&heldMidi===null&&!noteBrowse&&currentOctave!==noteOctave){noteOctave=currentOctave;renderNoteGrid();}$('note-value').textContent=mode===0?'':`${note.label} ${note.cents>0?'+':''}${note.cents}¢`;
  document.querySelectorAll<HTMLButtonElement>('[data-note]').forEach(b=>{const active=Number(b.dataset.note)===pitchNote(scaleEnabled?c.frequency:shown).midi;b.classList.toggle('sounding',playing&&active&&(mode!==2||(c.excitation??0)>.005));b.setAttribute('aria-current',playing&&active?'true':'false');});
  $('xy-value').textContent=mode===0?`${Math.round(tilt[0]*99).toString().padStart(2,'0')} / ${Math.round(tilt[1]*99).toString().padStart(2,'0')}`:`${Math.round(shown)} HZ`;
  $('energy-value').textContent=mode===0?String(Math.round(energy*127)).padStart(3,'0'):mode===1&&synthVoice!==0?String(Math.round(c.vowel*127)).padStart(3,'0'):['OO','OO–AH','AH','AH–EE','EE'][Math.min(4,Math.floor(c.vowel*5))];
  $('z-value').textContent=String(Math.round((mode===0?Math.abs(acceleration[2]):mode===2?(c.excitation??0):c.breath)*100)).padStart(3,'0');
  if(mode===2){const level=c.excitation??0;$<HTMLMeterElement>('excitation-meter').value=level;$('excitation-output').textContent=`${Math.round(level*100)}%`;}
 }
}
requestAnimationFrame(frame);
document.addEventListener('visibilitychange',()=>{if(document.hidden&&node){motionExcitation.reset();touchExcitation=0;touchExcitationAt=-Infinity;playing=false;send(true);status();audio?.suspend();notice('Sound paused while you were away. Tap ▶ to resume.');}});
$('share').addEventListener('click',async()=>{try{const url=location.origin+location.pathname;if(navigator.share)await navigator.share({title:'Kaizen Motion',text:'Your phone is an instrument. Shake, tilt, play.',url});else{await navigator.clipboard.writeText(url);notice('Link copied. Share it anywhere.');}}catch(e){if((e as Error).name!=='AbortError')notice('Copy this page’s address to share Motion.');}});
const motionButton=document.createElement('button');motionButton.textContent='Enable motion';motionButton.addEventListener('click',async()=>{sensorPermission=await requestMotion().catch(()=>false);motionExcitation.reset();firstSensor=true;notice(sensorPermission?'Motion enabled. Hold comfortably and tap CENTRE.':'Motion permission is unavailable here. Open in Safari/Chrome or keep playing with touch.');status();});document.querySelector('footer nav')?.appendChild(motionButton);

function updateHeld(){
 $('follow-motion').disabled=heldMidi===null&&!noteBrowse;
 $('note-help').textContent=editingNotes?'Tap pitches to allow or block. Applies in every octave.':heldMidi!==null?`Holding ${pitchNote(noteFrequency(heldMidi)).label} · move to breathe.`:scaleEnabled?'Pitch follows the enabled scale notes.':'Continuous pitch · tap a note to hold.';
 document.querySelectorAll<HTMLButtonElement>('[data-note]').forEach(b=>b.setAttribute('aria-pressed',String(editingNotes?allowedNotes.has(pitchClass(Number(b.dataset.note))):Number(b.dataset.note)===heldMidi)));
}
function renderNoteGrid(){
 const max=mode===2?880:1760;noteOctave=Math.max(2,Math.min(mode===2?5:6,noteOctave));
 const grid=$('note-grid');grid.replaceChildren();grid.hidden=!notesVisible;
 $('show-notes').setAttribute('aria-pressed',String(notesVisible));$('edit-notes').setAttribute('aria-pressed',String(editingNotes));$('edit-notes').textContent=editingNotes?'Done':'Edit';$('edit-notes').setAttribute('aria-label',editingNotes?'Finish editing notes':'Edit enabled notes');
 for(const midi of Array.from({length:12},(_,i)=>(noteOctave+1)*12+i)){
  const button=document.createElement('button'),label=pitchNote(noteFrequency(midi)).label;
  const inRange=noteFrequency(midi)>=110-1e-6&&noteFrequency(midi)<=max+1e-6,allowed=!scaleEnabled||allowedNotes.has(pitchClass(midi));
  button.type='button';button.dataset.note=String(midi);button.textContent=label;button.classList.toggle('excluded',!allowed);button.classList.toggle('outside-range',!inRange);button.disabled=!editingNotes&&(!inRange||!allowed);
  button.setAttribute('aria-label',editingNotes?`${allowedNotes.has(pitchClass(midi))?'Exclude':'Include'} ${label.replace(/-?\d+$/,'')} in every octave`:`${allowed?'Play':'Excluded'} ${label}, ${noteFrequency(midi).toFixed(1)} hertz`);
  button.addEventListener('click',async()=>{
   if(editingNotes){
    if(!scaleEnabled){allowedNotes=scaleNotes(0,'chromatic');scaleEnabled=true;$<HTMLInputElement>('scale-enabled').checked=true;}
    const pc=pitchClass(midi);if(allowedNotes.has(pc)){if(allowedNotes.size===1){notice('Keep at least one pitch enabled.');return;}allowedNotes.delete(pc);}else allowedNotes.add(pc);
    scalePreset='custom';$<HTMLSelectElement>('scale-preset').value='custom';applyScale();return;
   }
   if(!inRange||!allowed)return;
   if(!node){await begin(sensorPermission);if(!node)return;}else await audio?.resume();
   heldMidi=midi;lastSnapped=midi;if(!sensorPermission||!lastSensor||performance.now()-lastSensor>1500)pulseUntil=performance.now()+220;playing=true;filteredPitch=manualX=Math.log2(noteFrequency(midi)/110)/(mode===2?3:4);updateHeld();status();send(true);
  });grid.appendChild(button);
 }
 $('note-octave').textContent=String(noteOctave);
 $<HTMLButtonElement>('octave-down').disabled=noteOctave===2;$<HTMLButtonElement>('octave-up').disabled=noteOctave===(mode===2?5:6);updateHeld();
}
function applyScale(){
 lastSnapped=null;if(scaleEnabled&&heldMidi!==null)heldMidi=nearestAllowedNote(noteFrequency(heldMidi),allowedNotes,mode===2?880:1760);
 renderNoteGrid();send(true);
}
$('scale-enabled').addEventListener('change',()=>{scaleEnabled=$<HTMLInputElement>('scale-enabled').checked;if(!scaleEnabled)editingNotes=false;applyScale();});
$('scale-root').addEventListener('change',()=>{
 const next=Number($<HTMLSelectElement>('scale-root').value);allowedNotes=scalePreset==='custom'?new Set([...allowedNotes].map(pc=>(pc+next-scaleRoot+12)%12)):scaleNotes(next,scalePreset);scaleRoot=next;applyScale();
});
$('scale-preset').addEventListener('change',()=>{scalePreset=$<HTMLSelectElement>('scale-preset').value;allowedNotes=scaleNotes(scaleRoot,scalePreset);applyScale();});
$('show-notes').addEventListener('click',()=>{notesVisible=!notesVisible;if(!notesVisible)editingNotes=false;renderNoteGrid();});
$('edit-notes').addEventListener('click',()=>{editingNotes=!editingNotes;if(editingNotes){notesVisible=true;if(!scaleEnabled){scaleEnabled=true;allowedNotes=scaleNotes(0,'chromatic');scalePreset='custom';$<HTMLInputElement>('scale-enabled').checked=true;$<HTMLSelectElement>('scale-preset').value='custom';}}applyScale();});
$('more-open').addEventListener('click',()=>$<HTMLDialogElement>('more-dialog').showModal());
$('more-close').addEventListener('click',()=>$<HTMLDialogElement>('more-dialog').close());
$('octave-down').addEventListener('click',()=>{noteBrowse=true;noteOctave--;renderNoteGrid();});
$('octave-up').addEventListener('click',()=>{noteBrowse=true;noteOctave++;renderNoteGrid();});
$('follow-motion').addEventListener('click',()=>{heldMidi=null;noteBrowse=false;updateHeld();send(true);});
initUsage();

setMode(2);

initCommunity(()=>({instrument:["Shaker","Synth","CHIMERA"][mode],voice:mode===1?SYNTH_VOICES[synthVoice].name:mode===2?"CHIMERA":"Shaker",sensitivity:Math.round(sensitivity*100),shape:chamber.shape,grainCount:chamber.count}),()=>{$<HTMLDialogElement>('more-dialog').close();playing=false;send(true);status();});

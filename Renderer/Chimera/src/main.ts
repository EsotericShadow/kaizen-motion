import * as THREE from 'three';
import { Anatomy3D } from './ui/render/anatomy3d';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// Only drawing runs here. Native Rust remains the sole audio engine.
const gl = new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
gl.setPixelRatio(Math.min(devicePixelRatio,1.5));
gl.setClearColor(0,0);document.body.appendChild(gl.domElement);
const head = new Anatomy3D();head.centred=true;
const controls = new OrbitControls(head.camera, gl.domElement);
controls.enablePan=false;controls.enableZoom=false;controls.enableDamping=false;
let packet:any, model:any, last=0, ready=false;
const flags={pressure:false,particles:false,calipers:false,grid:false};
function resize(){ const w=innerWidth,h=innerHeight;gl.setSize(w,h);head.resize(w,h);if(model&&!ready)home(); }
function home(){const p=head.poses(model);head.camera.position.copy(p.home);controls.target.copy(p.target);controls.update();ready=true;}
(window as any).motionScene=(next:any)=>{
 packet=next;
 if(!model){
  const k=next.body.scale,ph=next.body.pharynx;
  model={bodyParams:next.body,tract:{scale:k,
   P:(x:number,y:number)=>({x:(x>.5?.5+(x-.5)*.86:x)*k,y:(y<7?7-(7-y)*ph:y)*k}),
   unP:(x:number,y:number)=>({x:x/k>.5?.5+(x/k-.5)/.86:x/k,y:y/k<7?7-(7-y/k)/ph:y/k})},
   frame:()=>packet.restFrame};
  resize();home();
 }
};
function tick(now:number){requestAnimationFrame(tick);if(document.hidden||!packet||now-last<1000/25)return;
 const dt=Math.min(.08,(now-last)/1000);last=now;
 head.face.update(null,dt);head.update(model,packet.frame,packet.artic,null,flags,dt);gl.render(head.scene,head.camera);
}
addEventListener('resize',resize);resize();requestAnimationFrame(tick);

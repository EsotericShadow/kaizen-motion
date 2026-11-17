// Opt-in only. No sensor/audio values, URLs, IPs, user agents or form data.
const API='https://kaizendsp.com/api/motion/usage';
const CHOICE='motion-usage-consent-v1',VISITOR='motion-usage-browser-v1',SESSION='motion-usage-session-v1';
const MAX_AGE=90*86400000,IDLE=30*60000;
type Session={visitor:string;session:string;seconds:number;updated:number};
export class VisibleClock{
 seconds=0;last:number|null=null;
 update(now:number,visible:boolean){if(this.last!==null)this.seconds+=Math.max(0,(now-this.last)/1000);this.last=visible?now:null;return Math.floor(this.seconds);}
}
export function initUsage(){
 const checkbox=document.getElementById('usage-consent') as HTMLInputElement,status=document.getElementById('usage-status')!;
 const clock=new VisibleClock();let state:Session|null=null,enabled=false,hiddenAt=0;
 const read=(storage:Storage,key:string)=>{try{return storage.getItem(key);}catch{return null;}};
 const write=(storage:Storage,key:string,value:string|null)=>{try{if(value===null)storage.removeItem(key);else storage.setItem(key,value);}catch{}};
 // Storage can be unavailable in private/embedded browsers. Keep a memory-only fallback.
 let local:Storage|undefined,tab:Storage|undefined;try{local=localStorage;tab=sessionStorage;}catch{}
 const get=(storage:Storage|undefined,key:string)=>storage?read(storage,key):null;
 const put=(storage:Storage|undefined,key:string,value:string|null)=>{if(storage)write(storage,key,value);};
 function openSession(){
  const now=Date.now();let visitor:string|undefined;
  try{const record=JSON.parse(get(local,VISITOR)||'null');if(record&&now-record.created<MAX_AGE&&/^[0-9a-f-]{36}$/.test(record.id))visitor=record.id;}catch{}
  if(!visitor){visitor=crypto.randomUUID();put(local,VISITOR,JSON.stringify({id:visitor,created:now}));}
  try{const saved=JSON.parse(get(tab,SESSION)||'null');if(saved?.visitor===visitor&&Number.isFinite(saved.updated)&&now>=saved.updated&&now-saved.updated<IDLE&&Number.isFinite(saved.seconds)&&saved.seconds>=0&&saved.seconds<14400&&/^[0-9a-f-]{36}$/.test(saved.session))state=saved;}catch{}
  state??={visitor,session:crypto.randomUUID(),seconds:0,updated:now};clock.seconds=state!.seconds;clock.last=document.hidden?null:performance.now();
 }
 function send(final=false){
  if(!enabled||!state)return;
  const seconds=Math.min(14400,clock.update(performance.now(),!document.hidden));state.seconds=seconds;state.updated=Date.now();put(tab,SESSION,JSON.stringify(state));
  const body=JSON.stringify({visitor:state.visitor,session:state.session,seconds,consent:true});
  if(final&&navigator.sendBeacon?.(API,new Blob([body],{type:'application/json'})))return;
  fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body,credentials:'omit',referrerPolicy:'no-referrer',keepalive:final}).then(r=>{if(enabled)status.textContent=r.ok?'On · counting anonymous visits and visible time':'On · counts temporarily unavailable';}).catch(()=>{if(enabled)status.textContent='On · counts temporarily unavailable';});
 }
 function enable(){enabled=true;openSession();status.textContent='On · counting anonymous visits and visible time';send();}
 checkbox.checked=get(local,CHOICE)==='yes';if(checkbox.checked)enable();
 checkbox.addEventListener('change',()=>{
  put(local,CHOICE,checkbox.checked?'yes':'no');
  if(checkbox.checked)enable();else{enabled=false;state=null;clock.seconds=0;clock.last=null;put(local,VISITOR,null);put(tab,SESSION,null);status.textContent='Off · browser ID cleared on this device';}
 });
 setInterval(()=>{if(enabled&&!document.hidden){if(clock.seconds>=14400){send(true);state=null;put(tab,SESSION,null);openSession();}send();}},15000);
 document.addEventListener('visibilitychange',()=>{
  if(!enabled)return;
  if(document.hidden){hiddenAt=Date.now();send(true);clock.last=null;}
  else{if(hiddenAt&&Date.now()-hiddenAt>IDLE){state=null;put(tab,SESSION,null);openSession();}clock.last=performance.now();send();}
 });
 addEventListener('pagehide',()=>{send(true);clock.last=null;});
 addEventListener('pageshow',()=>{if(enabled&&!document.hidden)clock.last=performance.now();});
 addEventListener('storage',event=>{if(event.key===CHOICE&&event.newValue!=='yes'){enabled=false;state=null;clock.seconds=0;clock.last=null;checkbox.checked=false;put(tab,SESSION,null);status.textContent='Off · disabled in another tab';}});
}

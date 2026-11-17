type Bounds={width:number;height:number;clientHeight?:number;visualWidth?:number;visualHeight?:number;offsetLeft?:number;offsetTop?:number};
const positive=(values:Array<number|undefined>,fallback:number)=>Math.min(...values.filter((v):v is number=>typeof v==='number'&&Number.isFinite(v)&&v>0),fallback);
export function performanceViewport(bounds:Bounds,forceCompact=false){
 const width=Math.floor(positive([bounds.width,bounds.visualWidth],bounds.width));
 const available=positive([bounds.height,bounds.clientHeight,bounds.visualHeight],bounds.height);
 const height=Math.floor(forceCompact?Math.min(available,Math.max(440,available*.6)):available);
 return {width,height,left:Math.max(0,bounds.offsetLeft??0)+Math.max(0,(width-760)/2),top:Math.max(0,bounds.offsetTop??0),compact:height<650};
}
export function initPerformanceViewport(){
 const root=document.documentElement;let queued=false,forced=false,last='';
 try{forced=sessionStorage.getItem('motion-compact-view')==='yes';}catch{}
 function update(){queued=false;const v=window.visualViewport,rect=performanceViewport({width:innerWidth,height:innerHeight,clientHeight:root.clientHeight,visualWidth:v?.width,visualHeight:v?.height,offsetLeft:v?.offsetLeft,offsetTop:v?.offsetTop},forced),key=JSON.stringify(rect);if(key===last)return;last=key;
  root.style.setProperty('--app-height',`${rect.height}px`);root.style.setProperty('--app-width',`${rect.width}px`);root.style.setProperty('--app-left',`${rect.left}px`);root.style.setProperty('--app-top',`${rect.top}px`);root.classList.toggle('viewport-compact',rect.compact);
 }
 function schedule(){if(!queued){queued=true;requestAnimationFrame(update);}}
 addEventListener('resize',schedule);addEventListener('pageshow',schedule);window.visualViewport?.addEventListener('resize',schedule);window.visualViewport?.addEventListener('scroll',schedule);document.addEventListener('visibilitychange',schedule);
 const option=document.getElementById('compact-view') as HTMLInputElement;option.checked=forced;option.addEventListener('change',()=>{forced=option.checked;try{if(forced)sessionStorage.setItem('motion-compact-view','yes');else sessionStorage.removeItem('motion-compact-view');}catch{}update();});update();
}

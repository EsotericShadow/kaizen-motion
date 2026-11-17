type InstrumentDetails=()=>Record<string,unknown>;
const API='https://kaizendsp.com/api/motion/';
const $=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
export function initCommunity(details:InstrumentDetails,onOpen:()=>void){
 for(const name of ['feedback','beta']){
  const dialog=$<HTMLDialogElement>(name+'-dialog'),form=$<HTMLFormElement>(name+'-form'),status=$(name+'-status');
  $(name+'-open').addEventListener('click',()=>{status.textContent='';onOpen();dialog.showModal();});
  dialog.querySelector<HTMLButtonElement>('[data-close]')!.addEventListener('click',()=>dialog.close());
  form.addEventListener('submit',async event=>{
   event.preventDefault();if(!form.reportValidity())return;
   const data=new FormData(form),button=form.querySelector<HTMLButtonElement>('[type=submit]')!;
   const body:Record<string,unknown>={email:String(data.get('email')||''),website:String(data.get('website')||''),version:'web-07'};
   if(name==='beta'){
    const platforms=data.getAll('platform');if(!platforms.length){status.textContent='Choose at least one platform.';return;}
    Object.assign(body,{name:String(data.get('name')||''),platforms,consent:data.get('consent')==='on'});
   }else Object.assign(body,{category:String(data.get('category')||'other'),message:String(data.get('message')||''),includeDetails:data.get('details')==='on',details:data.get('details')==='on'?{...details(),browser:navigator.userAgent}:undefined});
   button.disabled=true;status.textContent='Saving…';
   try{
    const response=await fetch(API+name,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),credentials:'omit'});
    const result=await response.json().catch(()=>({}));if(!response.ok||!result.ok)throw new Error(result.error||'Could not save this. Please try again.');
    status.textContent=name==='beta'?'Request saved. We’ll use this address for Motion beta access and testing updates.':'Feedback saved—thank you. It goes directly to the Motion development team.';
    form.reset();
   }catch(e){status.textContent=e instanceof Error?e.message:'Could not save this. Please try again.';}
   finally{button.disabled=false;}
  });
 }
}

import assert from 'node:assert/strict';
import {initUsage} from '../src/usage';
class Store{data=new Map<string,string>();getItem(k:string){return this.data.get(k)??null;}setItem(k:string,v:string){this.data.set(k,v);}removeItem(k:string){this.data.delete(k);}}
const local=new Store(),tab=new Store(),events=new Map<string,Function>(),listeners=new Map<string,Function>();
const checkbox={checked:false,addEventListener:(name:string,fn:Function)=>listeners.set(name,fn)},status={textContent:''};
Object.assign(globalThis,{localStorage:local,sessionStorage:tab,document:{hidden:false,getElementById:(id:string)=>id==='usage-consent'?checkbox:status,addEventListener:(name:string,fn:Function)=>events.set(name,fn)},addEventListener:(name:string,fn:Function)=>events.set(name,fn),setInterval:(fn:Function)=>{events.set('tick',fn);return 0;}});
const requests:any[]=[];globalThis.fetch=(async(_url:any,options:any)=>{requests.push(JSON.parse(options.body));return {ok:true};}) as any;
initUsage();assert.equal(requests.length,0);assert.equal(local.data.has('motion-usage-browser-v1'),false);assert.equal(tab.data.size,0);
checkbox.checked=true;listeners.get('change')!();assert.equal(requests.length,1);const first=requests[0];assert.deepEqual(Object.keys(first).sort(),['consent','seconds','session','visitor']);assert(first.consent);assert.match(first.visitor,/^[a-f0-9-]{36}$/);events.get('tick')!();assert.equal(requests[1].visitor,first.visitor);assert.equal(requests[1].session,first.session);
// A new tab keeps the browser identity, but starts a new session.
tab.data.clear();initUsage();assert.equal(requests[2].visitor,first.visitor);assert.notEqual(requests[2].session,first.session);
checkbox.checked=false;listeners.get('change')!();const count=requests.length;events.get('tick')!();assert.equal(requests.length,count);assert.equal(local.data.has('motion-usage-browser-v1'),false);assert.equal(tab.data.size,0);
console.log('PASS: no collection before consent, browser deduplication across sessions, exact payload allowlist and withdrawal.');

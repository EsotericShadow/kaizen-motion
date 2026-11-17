const NAMES=['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
export const noteFrequency=(midi:number)=>440*Math.pow(2,(midi-69)/12);
export function pitchNote(frequency:number){
 const exact=69+12*Math.log2(frequency/440),midi=Math.round(exact);
 return {midi,label:NAMES[((midi%12)+12)%12]+(Math.floor(midi/12)-1),cents:Math.round((exact-midi)*100)};
}
export function octaveNotes(octave:number,maxFrequency:number){
 return Array.from({length:12},(_,i)=>12*(octave+1)+i).filter(m=>noteFrequency(m)>=110-1e-6&&noteFrequency(m)<=maxFrequency+1e-6);
}
export const SCALE_INTERVALS:Record<string,readonly number[]>={chromatic:[0,1,2,3,4,5,6,7,8,9,10,11],major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10],majorPentatonic:[0,2,4,7,9],minorPentatonic:[0,3,5,7,10],dorian:[0,2,3,5,7,9,10]};
export const pitchClass=(midi:number)=>((midi%12)+12)%12;
export function scaleNotes(root:number,preset:string){return new Set((SCALE_INTERVALS[preset]??SCALE_INTERVALS.chromatic).map(i=>(i+root)%12));}
export function nearestAllowedNote(frequency:number,allowed:ReadonlySet<number>,maxFrequency:number,previous:number|null=null){
 const exact=69+12*Math.log2(frequency/440);let best:number|null=null,distance=Infinity;
 for(let midi=45;midi<=93;midi++)if(noteFrequency(midi)<=maxFrequency+1e-6&&allowed.has(pitchClass(midi))){const delta=Math.abs(midi-exact);if(delta<distance){best=midi;distance=delta;}}
 if(best===null)throw new Error('Keep at least one playable pitch enabled.');
 if(previous!==null&&previous>=45&&noteFrequency(previous)<=maxFrequency+1e-6&&allowed.has(pitchClass(previous))&&Math.abs(previous-exact)<=distance+.08)return previous;
 return best;
}

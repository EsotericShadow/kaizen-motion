const NAMES=['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
export const noteFrequency=(midi:number)=>440*Math.pow(2,(midi-69)/12);
export function pitchNote(frequency:number){
 const exact=69+12*Math.log2(frequency/440),midi=Math.round(exact);
 return {midi,label:NAMES[((midi%12)+12)%12]+(Math.floor(midi/12)-1),cents:Math.round((exact-midi)*100)};
}
export function octaveNotes(octave:number,maxFrequency:number){
 return Array.from({length:12},(_,i)=>12*(octave+1)+i).filter(m=>noteFrequency(m)>=110-1e-6&&noteFrequency(m)<=maxFrequency+1e-6);
}

import assert from 'node:assert/strict';
import {SCALE_INTERVALS,scaleNotes,nearestAllowedNote,noteFrequency,pitchClass} from '../src/notes';
assert.deepEqual([...scaleNotes(0,'major')],[0,2,4,5,7,9,11]);
assert.deepEqual([...scaleNotes(9,'minor')],[9,11,0,2,4,5,7]);
for(const root of Array.from({length:12},(_,i)=>i))for(const preset of Object.keys(SCALE_INTERVALS))for(const max of [880,1760]){
 const allowed=scaleNotes(root,preset);let previous:number|null=null;
 for(let i=0;i<=200;i++){const f=110*Math.pow(max/110,i/200),midi=nearestAllowedNote(f,allowed,max,previous);assert(allowed.has(pitchClass(midi)));assert(noteFrequency(midi)>=110-1e-6);assert(noteFrequency(midi)<=max+1e-6);previous=midi;}
}
const custom=scaleNotes(0,'chromatic');custom.delete(6);for(let i=0;i<100;i++)assert.notEqual(pitchClass(nearestAllowedNote(110+i*14,custom,1760)),6);
const onlyA=new Set([9]);for(const max of [880,1760])for(const f of [1,110,200,440,880,1760,20000])assert.equal(pitchClass(nearestAllowedNote(f,onlyA,max)),9);
// Boundary hysteresis keeps jitter from alternating between two scale targets.
const midpoint=noteFrequency(61);assert.equal(nearestAllowedNote(midpoint*1.001,scaleNotes(0,'major'),880,60),60);assert.equal(nearestAllowedNote(noteFrequency(62),scaleNotes(0,'major'),880,60),62);
assert.throws(()=>nearestAllowedNote(440,new Set(),880));
console.log('PASS: every root/preset/range, custom excluded pitches, one-pitch scales, boundaries and jitter hysteresis.');

import assert from 'node:assert/strict';
import {noteFrequency,pitchNote,octaveNotes} from '../src/notes';
import {VisibleClock} from '../src/usage';
for(const midi of Array.from({length:49},(_,i)=>45+i)){const note=pitchNote(noteFrequency(midi));assert.equal(note.midi,midi);assert.equal(note.cents,0);}
assert.equal(pitchNote(440).label,'A4');assert.equal(pitchNote(261.625565).label,'C4');
assert.equal(pitchNote(440*Math.pow(2,25/1200)).cents,25);
for(const max of [880,1760])for(let octave=2;octave<=6;octave++)for(const midi of octaveNotes(octave,max)){assert(noteFrequency(midi)>=110-1e-6);assert(noteFrequency(midi)<=max+1e-6);}
const clock=new VisibleClock();assert.equal(clock.update(0,true),0);assert.equal(clock.update(15000,true),15);assert.equal(clock.update(20000,false),20);assert.equal(clock.update(90000,false),20);assert.equal(clock.update(100000,true),20);assert.equal(clock.update(110000,true),30);
console.log('PASS: A440 tuning, full playable note ranges, cents, visible-session time and hidden-tab exclusion.');

import assert from 'node:assert/strict';
import {PitchSelection,noteFrequency,pitchNote,pitchClass,scaleNotes} from '../src/notes';
import {performanceViewport} from '../src/viewport';
const selection=new PitchSelection(),major=scaleNotes(0,'major');
selection.hold(69);assert.equal(selection.frequency(110,true,major,880),440);assert.equal(selection.frequency(880,true,major,880),440);
// Scale/exclusion editing calls followMotion: an old note hold cannot freeze the sensor mapping.
selection.followMotion();const allowed=new Set(major);allowed.delete(9);const visited=new Set<number>();
for(let i=0;i<=100;i++){const f=110*Math.pow(8,i/100),note=pitchNote(selection.frequency(f,true,allowed,880));assert(allowed.has(pitchClass(note.midi)));visited.add(note.midi);}
assert(visited.size>10,'scale editing left moving pitch frozen');assert.equal(selection.held,null);
selection.followMotion();assert.equal(selection.frequency(317.2,false,major,880),317.2);
selection.hold(64);selection.followMotion();assert.notEqual(selection.frequency(noteFrequency(72),true,major,880),noteFrequency(64));
const full=performanceViewport({width:390,height:844,clientHeight:844,visualHeight:844,visualWidth:390});assert.equal(full.height,844);assert(!full.compact);
const sheet=performanceViewport({width:390,height:844,clientHeight:844,visualHeight:520,visualWidth:390});assert.equal(sheet.height,520);assert(sheet.compact);
const forced=performanceViewport({width:390,height:844,visualHeight:844},true);assert(forced.height<560&&forced.compact);
const zoomed=performanceViewport({width:390,height:844,visualWidth:260,visualHeight:562,offsetTop:12,offsetLeft:5});assert.equal(zoomed.width,260);assert.equal(zoomed.height,562);assert.equal(zoomed.top,12);assert.equal(zoomed.left,5);
assert.equal(performanceViewport({width:390,height:640,clientHeight:844,visualHeight:700}).height,640);
console.log('PASS: held-note -> scale/exclusion -> moving pitches; free pitch restores; partial visual viewport, offsets and compact fallback.');

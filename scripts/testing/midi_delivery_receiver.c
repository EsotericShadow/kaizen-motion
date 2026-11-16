#include <CoreMIDI/CoreMIDI.h>
#include <CoreFoundation/CoreFoundation.h>
#include <stdio.h>
// Diagnostic client only: receives from another process, never runs in the app.
int main(void) {
 setvbuf(stdout, NULL, _IOLBF, 0);
 MIDIClientRef client = 0; MIDIPortRef port = 0;
 OSStatus status = MIDIClientCreateWithBlock(CFSTR("Motion delivery probe"), &client, ^(const MIDINotification *n){});
 if (status) return 2;
 status = MIDIInputPortCreateWithProtocol(client, CFSTR("Motion probe input"), kMIDIProtocol_1_0, &port, ^(const MIDIEventList *list, void *context) {
   const MIDIEventPacket *p = &list->packet[0];
   for (UInt32 i=0;i<list->numPackets;i++,p=MIDIEventPacketNext(p))
     for (UInt32 w=0;w<p->wordCount;w++) printf("WORD %08x TIME %llu\n", p->words[w], p->timeStamp);
 });
 if (status) { fprintf(stderr,"input status %d\n",(int)status); return 3; }
 MIDIEndpointRef source = 0;
 unsigned int matches = 0;
 CFAbsoluteTime deadline = CFAbsoluteTimeGetCurrent()+5;
 while (!source && CFAbsoluteTimeGetCurrent()<deadline) {
   for (ItemCount i=0;i<MIDIGetNumberOfSources();i++) {
     MIDIEndpointRef s=MIDIGetSource(i); CFStringRef name=NULL;
     if (MIDIObjectGetStringProperty(s,kMIDIPropertyName,&name)==noErr && name) {
       if (CFStringCompare(name,CFSTR("Kaizen Motion"),0)==kCFCompareEqualTo) { source=s; matches++; }
       CFRelease(name);
     }
   }
   CFRunLoopRunInMode(kCFRunLoopDefaultMode,0.05,false);
 }
 if(!source) { fprintf(stderr,"source missing\n"); return 4; }
 if(matches!=1) { fprintf(stderr,"Expected one source; stop other Motion bridges first\n"); return 6; }
 status=MIDIPortConnectSource(port,source,NULL);
 if(status) { fprintf(stderr,"connect status %d\n",(int)status); return 5; }
 puts("READY");
 CFRunLoopRunInMode(kCFRunLoopDefaultMode,20,false);
 MIDIPortDisconnectSource(port,source); MIDIPortDispose(port); MIDIClientDispose(client);
 return 0;
}

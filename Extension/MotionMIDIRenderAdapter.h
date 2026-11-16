#import <AudioToolbox/AudioToolbox.h>
#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface MotionMIDIRenderAdapter : NSObject

@property(nonatomic) AUAudioFrameCount maximumFramesToRender;
@property(nonatomic, getter=isBypassed) BOOL bypassed;
@property(nonatomic, readonly) NSUInteger droppedEventCount;

- (void)initializeWithSampleRate:(double)sampleRate;
- (void)deinitialize;
- (void)reset;
- (void)setMIDIOutputEventListBlock:(nullable AUMIDIEventListBlock)block;
- (AUInternalRenderBlock)internalRenderBlock;
- (void)enqueueNote:(uint8_t)note
           velocity:(uint8_t)velocity
            channel:(uint8_t)channel
    durationSeconds:(double)durationSeconds;
- (void)enqueueControlChange:(uint8_t)controller
                       value:(uint8_t)value
                     channel:(uint8_t)channel;

@end

NS_ASSUME_NONNULL_END

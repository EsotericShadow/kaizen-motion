import Foundation

@main struct MotionBenchmark {
    static func main() {
        for shape in MotionChamberShape.allCases {
            var times: [Double] = [], rates: [Double] = []
            var worstJolt = 0.0
            for run in 0..<10 {
                var chamber = MotionShakerChamber()
                let geometry = MotionChamberGeometry(widthMM: 52, heightMM: 26, shape: shape, grainCount: 64)
                var last: [MotionVector] = []
                var events = 0
                let start = ContinuousClock.now
                for index in 0..<1500 {
                    let t = Double(index) * 0.01
                    let frame = MotionFeatureFrame(timestamp: t, acceleration: .init(x: sin(t * 17) * 2, y: cos(t * 11) * 1.8, z: sin(t * 19)), gravity: .init(y: -1))
                    let before = ContinuousClock.now
                    let hits = chamber.process(frame, sensitivity: 0.7, geometry: geometry)
                    let duration = before.duration(to: .now).components
                    if index > 500 { times.append(Double(duration.seconds) * 1000 + Double(duration.attoseconds) / 1e15) }
                    events += hits.count
                    let grains = chamber.grainPositions
                    if run == 0, !last.isEmpty {
                        for (a,b) in zip(last,grains) { worstJolt = max(worstJolt, hypot(a.x-b.x,a.y-b.y)) }
                    }
                    last = grains
                }
                let elapsed = start.duration(to: .now).components
                rates.append(Double(events) / (Double(elapsed.seconds) + Double(elapsed.attoseconds)/1e18))
            }
            times.sort()
            print("physics \(shape): median=\(times[times.count/2])ms p99=\(times[times.count*99/100])ms max=\(times.last!)ms peakNormalizedStep=\(worstJolt)")
        }
        let synth = MotionShakerRenderer(sampleRate: 48000)
        var buffer = [Float](repeating: 0, count: 128)
        var times: [Double] = [], energy=0.0, peak=0.0, loud=0
        for block in 0..<16000 {
            if block % 4 == 0 { for wall in 0..<6 { synth.trigger(velocity: 100, wall: UInt8(wall)) } }
            let start = ContinuousClock.now
            buffer.withUnsafeMutableBufferPointer { synth.render(into: $0.baseAddress!, frameCount: 128) }
            let duration = start.duration(to: .now).components
            if block > 500 { times.append(Double(duration.seconds)*1000+Double(duration.attoseconds)/1e15) }
            for sample in buffer { let s=Double(sample);energy += s*s;peak=max(peak,abs(s));if abs(s)>0.6 {loud += 1} }
        }
        times.sort()
        print("audio 6 clouds/10.7ms: median=\(times[times.count/2])ms p99=\(times[times.count*99/100])ms max=\(times.last!)ms rms=\(sqrt(energy/(16000*128))) peak=\(peak) samplesAbove0.6=\(loud)")
    }
}

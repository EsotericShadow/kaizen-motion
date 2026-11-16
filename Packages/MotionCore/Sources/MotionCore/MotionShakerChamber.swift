import Foundation

/// A small two-dimensional chamber in the phone's screen plane. Beads are independent
/// inertial particles; sound events come from wall collisions, not acceleration gates.
public struct MotionShakerChamber: Sendable {
    public enum Wall: Int, CaseIterable, Sendable {
        case left, right, top, bottom, front, back
        var direction: MotionDirection {
            switch self {
            case .left: .xNegative
            case .right: .xPositive
            case .top: .yPositive
            case .bottom: .yNegative
            case .front: .zPositive
            case .back: .zNegative
            }
        }
    }
    public struct Impact: Sendable {
        public var timestamp: Double = 0
        public var wall: Wall
        public var velocity: UInt8
        public var beadCount: Int
        public var coordinate: Double
        public var contact: MotionVector
    }
    private struct Bead: Sendable {
        var x: Double; var y: Double; var z: Double = 0; var vx = 0.0; var vy = 0.0; var vz = 0.0
        var bounce: Double
    }
    private struct Plane: Sendable {
        var nx: Double; var ny: Double; var offset: Double
        var contactX: Double; var contactY: Double
    }
    private var planes: [Plane] = []
    private var beads: [Bead] = []
    private var lastTime: Double?
    private var lastExcitationTime: Double?
    private var excitationTilt = MotionVector()
    private var tiltReference = MotionGripTilt()
    private var geometry = MotionChamberGeometry()
    private var halfWidth: Double { geometry.travelHalfWidth }
    private var halfHeight: Double { geometry.travelHalfHeight }

    public init() { reset() }
    public var grainPositions: [MotionVector] {
        beads.map { .init(x: $0.x / halfWidth, y: $0.y / halfHeight, z: $0.z / geometry.travelHalfDepth) }
    }
    public var ballPosition: MotionVector {
        guard let ball = beads.first else { return .init() }
        return .init(x: ball.x / halfWidth, y: ball.y / halfHeight, z: ball.z / geometry.travelHalfDepth)
    }

    public mutating func reset() {
        lastTime = nil
        lastExcitationTime = nil
        excitationTilt = .init()
        tiltReference.reset()
        seedGrains()
    }

    private mutating func seedGrains() {
        beads = (0..<geometry.effectiveGrainCount).map { index in
            let fraction = (Double(index) + 0.5) / Double(geometry.effectiveGrainCount)
            let angle = Double(index) * 2.399963229728653
            return Bead(x: cos(angle) * sqrt(fraction) * halfWidth * 0.88,
                        y: sin(angle) * sqrt(fraction) * halfHeight * 0.88,
                        z: ((Double(index) * 0.61803398875).truncatingRemainder(dividingBy: 1) * 2 - 1) * geometry.travelHalfDepth * 0.88,
                        bounce: 0.16 + 0.12 * fraction)
        }
        if beads.count == 1 { beads[0].x = 0; beads[0].y = 0; beads[0].z = 0 }
    }

    public mutating func process(_ frame: MotionFeatureFrame, sensitivity: Double, geometry requested: MotionChamberGeometry = .init()) -> [Impact] {
        let nextGeometry = requested.validated
        if geometry != nextGeometry {
            geometry = nextGeometry
            rebuildPlanes()
            seedGrains()
            for index in beads.indices {
                var bead = beads[index]
                bead.x = max(-halfWidth, min(halfWidth, bead.x))
                bead.y = max(-halfHeight, min(halfHeight, bead.y))
                bead.vx = 0
                bead.vy = 0
                bead.vz = 0
                if geometry.shape != .box { fitInsideCurve(&bead) }
                beads[index] = bead
            }
        }
        guard frame.timestamp.isFinite,
              frame.acceleration.x.isFinite, frame.acceleration.y.isFinite, frame.acceleration.z.isFinite,
              frame.rotationRate.z.isFinite else { return [] }
        if let lastTime, frame.timestamp <= lastTime { return [] }
        let elapsed = frame.timestamp - (lastTime ?? (frame.timestamp - 0.01))
        if elapsed > 0.1 {
            // A late sensor callback must never teleport/reseed the grain cloud.
            // Discard unavailable travel while preserving all visible positions.
            lastTime = frame.timestamp
            for i in beads.indices { beads[i].vx = 0; beads[i].vy = 0; beads[i].vz = 0 }
            return []
        }
        let dt = min(0.025, max(0.001, elapsed))
        lastTime = frame.timestamp
        let sensitivity = max(0, min(1, sensitivity))
        let drive = 0.7 + sensitivity * 1.3
        // Keep the chamber causal, stable and bounded even for a hard accidental movement.
        // Project gravity onto two tangents to the user's initial grip. In portrait,
        // gravity X drives horizontal and gravity Z drives vertical. Unlike absolute
        // device Y gravity, both are zero at neutral and respond symmetrically to tilt.
        let tilt = tiltReference.project(frame.gravity)
        let tiltChange = hypot(tilt.x - excitationTilt.x, tilt.y - excitationTilt.y)
        if lastExcitationTime == nil || frame.acceleration.magnitude > 0.035 || tiltChange > 0.004 {
            lastExcitationTime = frame.timestamp
            excitationTilt = tilt
        }
        // Resting granular piles use sleeping just as rigid-body engines do. A
        // fresh translation or changed grip wakes them, with no event on wake itself.
        if frame.timestamp - (lastExcitationTime ?? frame.timestamp) > 0.75 {
            for i in beads.indices { beads[i].vx = 0; beads[i].vy = 0; beads[i].vz = 0 }
            return []
        }
        let ax = (-max(-6, min(6, frame.acceleration.x)) + tilt.x * 1.2) * drive * 9.80665
        // User's on-device direction/sensitivity correction, applied only to tilt.
        let polarity = geometry.invertY ? -1.0 : 1.0
        let ay = (-max(-6, min(6, frame.acceleration.y)) + tilt.y * 1.2 * geometry.yTiltSensitivity * polarity) * drive * 9.80665
        let az = -max(-6, min(6, frame.acceleration.z)) * drive * 9.80665
        // A modest gravity component settles the loose fill instead of leaving a
        // synchronized swarm floating in the centre. User acceleration drives strokes.
        let settleY = beads.count > 1 ? frame.gravity.y * 2.2 : 0
        let settleZ = beads.count > 1 ? frame.gravity.z * 2.2 : 0
        let steps = max(1, Int(ceil(dt / 0.0025)))
        let h = dt / Double(steps)
        let drag = exp(-h * 7)
        var impacts: [Impact] = []
        let frameStart = frame.timestamp - dt
        let radius = geometry.ballDiameterMM / 2_000
        for step in 0..<steps {
            for index in beads.indices {
                var bead = beads[index]
                bead.vx = max(-3, min(3, (bead.vx + ax * h) * drag))
                bead.vy = max(-3, min(3, (bead.vy + (ay + settleY) * h) * drag))
                bead.vz = max(-3, min(3, (bead.vz + (az + settleZ) * h) * drag))
                bead.z += bead.vz * h
                if abs(bead.z) > geometry.travelHalfDepth {
                    let front = bead.z > 0
                    let speed = abs(bead.vz)
                    if speed > 0.04 {
                        impacts.append(Impact(timestamp: frameStart + Double(step + 1) * h,
                                              wall: front ? .front : .back,
                                              velocity: UInt8(max(1, min(127, Int(127 * pow(min(1, speed / 2.8), 0.65))))),
                                              beadCount: 1, coordinate: (bead.x / halfWidth + 1) / 2,
                                              contact: .init(x: bead.x / (geometry.widthMM / 2_000), y: bead.y / (geometry.effectiveHeightMM / 2_000), z: front ? 1 : -1)))
                    }
                    bead.z = front ? geometry.travelHalfDepth : -geometry.travelHalfDepth
                    bead.vz *= -bead.bounce
                }
                var remaining = h
                // Consume time of impact, reflect, then integrate the rest of the step.
                // A bounded contact loop prevents corner/resting contact chatter.
                for _ in 0..<4 {
                    guard remaining > 1e-8 else { break }
                    let endX = bead.x + bead.vx * remaining
                    let endY = bead.y + bead.vy * remaining
                    var fraction = 1.0
                    var nx = 0.0, ny = 0.0
                    var point = MotionVector()
                    if geometry.shape == .box {
                        let tx = bead.vx > 0 ? (halfWidth - bead.x) / (bead.vx * remaining)
                            : bead.vx < 0 ? (-halfWidth - bead.x) / (bead.vx * remaining) : 2
                        let ty = bead.vy > 0 ? (halfHeight - bead.y) / (bead.vy * remaining)
                            : bead.vy < 0 ? (-halfHeight - bead.y) / (bead.vy * remaining) : 2
                        if min(tx, ty) <= 1 {
                            fraction = max(0, min(tx, ty))
                            // At an exact corner use the combined contact normal, rather
                            // than two arbitrarily sorted hits at the same instant.
                            if abs(tx - ty) < 1e-7 {
                                nx = bead.vx > 0 ? 1 : -1; ny = bead.vy > 0 ? 1 : -1
                                let length = hypot(nx, ny); nx /= length; ny /= length
                            } else if tx < ty { nx = bead.vx > 0 ? 1 : -1 }
                            else { ny = bead.vy > 0 ? 1 : -1 }
                            let cx = bead.x + bead.vx * remaining * fraction
                            let cy = bead.y + bead.vy * remaining * fraction
                            point = .init(x: nx == 0 ? cx / (geometry.widthMM / 2_000) : (nx > 0 ? 1 : -1),
                                          y: ny == 0 ? cy / (geometry.effectiveHeightMM / 2_000) : (ny > 0 ? 1 : -1))
                        }
                    } else if geometry.shape == .oval {
                        // Sweep the sphere centre against precomputed conservative
                        // support planes. No nested nearest-point trigonometry/root
                        // search for every grain/contact/sensor substep.
                        let a = geometry.widthMM / 2_000, b = geometry.effectiveHeightMM / 2_000
                        let safe = max(0, 1 - radius / min(a, b))
                        if endX * endX / (a * a) + endY * endY / (b * b) >= safe * safe {
                            for plane in planes {
                                let travel = (bead.vx * plane.nx + bead.vy * plane.ny) * remaining
                                guard travel > 1e-12 else { continue }
                                let distance = plane.offset - bead.x * plane.nx - bead.y * plane.ny
                                let t = max(0, distance / travel)
                                if t <= fraction {
                                    fraction = t; nx = plane.nx; ny = plane.ny
                                    point = .init(x: plane.contactX / a, y: plane.contactY / b)
                                }
                            }
                        }
                    } else {
                        let edge = nearestCurve(x: endX, y: endY)
                        if !edge.inside || edge.distance < radius {
                            var low = 0.0, high = 1.0
                            for _ in 0..<12 {
                                let mid = (low + high) / 2
                                let candidate = nearestCurve(x: bead.x + bead.vx * remaining * mid,
                                                             y: bead.y + bead.vy * remaining * mid)
                                if candidate.inside && candidate.distance >= radius { low = mid } else { high = mid }
                            }
                            fraction = low
                            let boundary = nearestCurve(x: bead.x + bead.vx * remaining * fraction,
                                                        y: bead.y + bead.vy * remaining * fraction, exact: true)
                            nx = boundary.nx; ny = boundary.ny
                            point = .init(x: boundary.x / (geometry.widthMM / 2_000),
                                          y: boundary.y / (geometry.effectiveHeightMM / 2_000))
                        }
                    }
                    bead.x += bead.vx * remaining * fraction
                    bead.y += bead.vy * remaining * fraction
                    remaining *= 1 - fraction
                    guard nx != 0 || ny != 0 else { break }
                    let speed = bead.vx * nx + bead.vy * ny
                    if speed > 0.055 {
                        let wall: Wall = abs(nx) > abs(ny) ? (nx < 0 ? .left : .right) : (ny > 0 ? .top : .bottom)
                        let loudness = min(1, speed / 2.8)
                        impacts.append(Impact(timestamp: frameStart + Double(step + 1) * h - remaining,
                                              wall: wall, velocity: UInt8(max(1, min(127, Int(127 * pow(loudness, 0.65))))),
                                              beadCount: 1,
                                              coordinate: max(0, min(1, (wall == .left || wall == .right) ? (1 - point.y) / 2 : (point.x + 1) / 2)),
                                              contact: point))
                    }
                    if speed > 0 {
                        bead.vx -= (1 + bead.bounce) * speed * nx
                        bead.vy -= (1 + bead.bounce) * speed * ny
                    }
                    // Microscopic separation avoids re-detecting the same contact.
                    bead.x -= nx * 1e-9; bead.y -= ny * 1e-9
                }
                beads[index] = bead
            }
        }
        // Particle-particle contacts exchange momentum and dissipate energy. The
        // grains scatter and form a pile instead of all orbiting the shell together.
        resolveGrainContacts()
        let sorted = impacts.sorted { $0.timestamp < $1.timestamp }
        return Wall.allCases.compactMap { wall -> Impact? in
            let contacts = sorted.filter { $0.wall == wall }
            guard var strongest = contacts.max(by: { $0.velocity < $1.velocity }) else { return nil }
            strongest.timestamp = contacts[0].timestamp
            strongest.beadCount = contacts.count
            // Cloud energy scales with fill, with headroom for simultaneous surfaces.
            let energy = contacts.reduce(0.0) { $0 + pow(Double($1.velocity) / 127, 2) }
            strongest.velocity = UInt8(max(1, min(127, Int(127 * sqrt(energy / max(1, Double(beads.count) * 0.12))))))
            return strongest
        }.sorted { $0.timestamp < $1.timestamp }
    }

    private mutating func resolveGrainContacts() {
        guard beads.count > 1 else { return }
        let diameter = geometry.ballDiameterMM / 1_000
        for i in 0..<(beads.count - 1) {
            for j in (i + 1)..<beads.count {
                var a = beads[i], b = beads[j]
                let dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z
                let distance = sqrt(dx * dx + dy * dy + dz * dz)
                guard distance < diameter, distance > 1e-10 else { continue }
                let nx = dx / distance, ny = dy / distance, nz = dz / distance
                let separation = (diameter - distance) * 0.5
                a.x -= nx * separation; a.y -= ny * separation; a.z -= nz * separation
                b.x += nx * separation; b.y += ny * separation; b.z += nz * separation
                let approach = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny + (b.vz - a.vz) * nz
                if approach < 0 {
                    let impulse = -approach * 0.58
                    a.vx -= nx * impulse; a.vy -= ny * impulse; a.vz -= nz * impulse
                    b.vx += nx * impulse; b.vy += ny * impulse; b.vz += nz * impulse
                }
                beads[i] = a; beads[j] = b
            }
        }
        for i in beads.indices {
            beads[i].z = max(-geometry.travelHalfDepth, min(geometry.travelHalfDepth, beads[i].z))
            if geometry.shape == .box {
                beads[i].x = max(-halfWidth, min(halfWidth, beads[i].x))
                beads[i].y = max(-halfHeight, min(halfHeight, beads[i].y))
            } else { var bead = beads[i]; fitInsideCurve(&bead); beads[i] = bead }
        }
    }

    private mutating func rebuildPlanes() {
        guard geometry.shape == .oval else { planes = []; return }
        let a = geometry.widthMM / 2_000, b = geometry.effectiveHeightMM / 2_000
        let radius = geometry.ballDiameterMM / 2_000
        let count = 128
        let margin = max(a, b) * (1 - cos(.pi / Double(count))) + 1e-8
        planes = (0..<count).map { index in
            let angle = Double(index) * 2 * .pi / Double(count)
            let nx = cos(angle), ny = sin(angle)
            let support = sqrt(a * a * nx * nx + b * b * ny * ny)
            return Plane(nx: nx, ny: ny, offset: support - radius - margin,
                         contactX: a * a * nx / support, contactY: b * b * ny / support)
        }
    }

    private func nearestCurve(x: Double, y: Double, exact: Bool = false) -> (x: Double, y: Double, nx: Double, ny: Double, distance: Double, inside: Bool) {
        let a = geometry.widthMM / 2_000
        let b = geometry.effectiveHeightMM / 2_000
        if geometry.shape == .circle {
            let length = hypot(x, y)
            let nx = length > 1e-12 ? x / length : 1
            let ny = length > 1e-12 ? y / length : 0
            return (a * nx, a * ny, nx, ny, abs(a - length), length <= a)
        }
        // A homothetic inset by r/min(a,b) is conservatively at least r from
        // the ellipse. Most free-flight grains need no closest-point iteration.
        let q = x * x / (a * a) + y * y / (b * b)
        let radius = geometry.ballDiameterMM / 2_000
        let safeScale = max(0, 1 - radius / min(a, b))
        if !exact && q < safeScale * safeScale - 1e-9 {
            return (0, 0, 0, 0, radius + 1e-9, true)
        }
        let px = abs(x), py = abs(y)
        var bestDistance = Double.infinity
        var bestX = 0.0, bestY = b
        let estimate = atan2(py * a, px * b)
        let starts = radius / min(a, b) < 0.25 ? [estimate] : [0.0, Double.pi / 2, estimate]
        for start in starts {
            var angle = start
            for _ in 0..<10 {
                let s = sin(angle), c = cos(angle)
                let f = (b * b - a * a) * s * c + a * px * s - b * py * c
                let derivative = (b * b - a * a) * (c * c - s * s) + a * px * c + b * py * s
                if abs(derivative) < 1e-14 { break }
                angle = max(0, min(.pi / 2, angle - f / derivative))
            }
            let qx = a * cos(angle), qy = b * sin(angle)
            let distance = hypot(qx - px, qy - py)
            if distance < bestDistance { bestDistance = distance; bestX = qx; bestY = qy }
        }
        bestX *= x < 0 ? -1 : 1
        bestY *= y < 0 ? -1 : 1
        let nx = bestX / (a * a), ny = bestY / (b * b)
        let length = hypot(nx, ny)
        return (bestX, bestY, nx / length, ny / length, bestDistance, x * x / (a * a) + y * y / (b * b) <= 1)
    }

    private func fitInsideCurve(_ bead: inout Bead) {
        if geometry.shape == .oval {
            for _ in 0..<3 {
                var corrected = false
                for plane in planes {
                    let outside = bead.x * plane.nx + bead.y * plane.ny - plane.offset
                    if outside > 0 {
                        bead.x -= plane.nx * (outside + 1e-9)
                        bead.y -= plane.ny * (outside + 1e-9)
                        corrected = true
                    }
                }
                if !corrected { break }
            }
            return
        }
        let boundary = nearestCurve(x: bead.x, y: bead.y)
        let radius = geometry.ballDiameterMM / 2_000
        guard !boundary.inside || boundary.distance < radius else { return }
        var low = 0.0, high = 1.0
        for _ in 0..<16 {
            let middle = (low + high) / 2
            let candidate = nearestCurve(x: bead.x * middle, y: bead.y * middle)
            if candidate.inside && candidate.distance >= radius { low = middle } else { high = middle }
        }
        bead.x *= low
        bead.y *= low
    }
}

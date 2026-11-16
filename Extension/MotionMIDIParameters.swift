import AudioToolbox

enum MotionParameterAddress: AUParameterAddress, CaseIterable {
    case instrument = 0
    case sensitivity = 1
    case baseNote = 2
    case noteLengthMilliseconds = 3
    case retriggerMilliseconds = 4
    case midiChannel = 5
    case tiltXController = 6
    case tiltYController = 7
    case rotationController = 8
    case armed = 9
    case chamberWidth = 10
    case chamberHeight = 11
    case ballDiameter = 12
    case yTiltSensitivity = 13
    case invertY = 14
    case chamberShape = 15
    case chamberDepth = 16
    case grainCount = 17
}

enum MotionMIDIParameters {
    static func makeTree() -> AUParameterTree {
        let performance = AUParameterTree.createGroup(
            withIdentifier: "performance",
            name: "Performance",
            children: [
                parameter(.instrument, "instrument", "Instrument", 0, 5, .indexed, 0,
                          valueStrings: ["Shaker", "Tambourine", "Maraca", "Cabasa", "Hand Drum", "Theremin / FX"]),
                parameter(.sensitivity, "sensitivity", "Sensitivity", 0, 1, .generic, 0.62),
                parameter(.armed, "armed", "Armed", 0, 1, .boolean, 1),
                parameter(.noteLengthMilliseconds, "noteLength", "Note Length", 20, 1_000, .milliseconds, 75),
                parameter(.retriggerMilliseconds, "retrigger", "Retrigger", 20, 300, .milliseconds, 55),
                parameter(.chamberWidth, "chamberWidth", "Box Width (mm)", 20, 80, .generic, 36),
                parameter(.chamberHeight, "chamberHeight", "Box Height (mm)", 20, 80, .generic, 36),
                parameter(.ballDiameter, "ballDiameter", "Grain Diameter (mm)", 1, 12, .generic, 1.2),
                parameter(.yTiltSensitivity, "yTiltSensitivity", "Y Tilt Sensitivity", 0.25, 4, .generic, 1.6),
                parameter(.invertY, "invertY", "Reverse Y Tilt", 0, 1, .boolean, 1),
                parameter(.chamberShape, "chamberShape", "Chamber Shape", 0, 2, .indexed, 0, valueStrings: ["Box", "Circle", "Oval"]),
                parameter(.chamberDepth, "chamberDepth", "Chamber Depth (mm)", 16, 80, .generic, 24),
                parameter(.grainCount, "grainCount", "Grain Count", 1, 64, .indexed, 48)
            ]
        )

        let mapping = AUParameterTree.createGroup(
            withIdentifier: "mapping",
            name: "MIDI Mapping",
            children: [
                parameter(.baseNote, "baseNote", "Base Note", 0, 127, .midiNoteNumber, 70),
                parameter(.midiChannel, "midiChannel", "MIDI Channel", 1, 16, .indexed, 1),
                parameter(.tiltXController, "tiltXCC", "Tilt X CC", 0, 127, .generic, 74),
                parameter(.tiltYController, "tiltYCC", "Tilt Y CC", 0, 127, .generic, 71),
                parameter(.rotationController, "rotationCC", "Rotation CC", 0, 127, .generic, 1)
            ]
        )
        return AUParameterTree.createTree(withChildren: [performance, mapping])
    }

    private static func parameter(
        _ address: MotionParameterAddress,
        _ identifier: String,
        _ name: String,
        _ min: AUValue,
        _ max: AUValue,
        _ unit: AudioUnitParameterUnit,
        _ defaultValue: AUValue,
        valueStrings: [String]? = nil
    ) -> AUParameter {
        let parameter = AUParameterTree.createParameter(
            withIdentifier: identifier,
            name: name,
            address: address.rawValue,
            min: min,
            max: max,
            unit: unit,
            unitName: nil,
            flags: [.flag_IsReadable, .flag_IsWritable],
            valueStrings: valueStrings,
            dependentParameters: nil
        )
        parameter.value = defaultValue
        return parameter
    }
}

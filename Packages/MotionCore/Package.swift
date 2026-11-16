// swift-tools-version: 6.0

import PackageDescription

let package = Package(
    name: "MotionCore",
    platforms: [
        .iOS(.v17),
        .macOS(.v14)
    ],
    products: [
        .library(name: "MotionCore", targets: ["MotionCore"]),
        .executable(name: "KaizenMotionBridge", targets: ["KaizenMotionBridge"]),
        .executable(name: "KaizenMotionListen", targets: ["KaizenMotionListen"])
    ],
    targets: [
        .binaryTarget(name: "MotionChimeraNative", path: "../MotionChimeraNative/artifacts/MotionChimeraNative.xcframework"),
        .target(name: "MotionToneDSP"),
        .target(name: "MotionCore", dependencies: ["MotionToneDSP", "MotionChimeraNative"], linkerSettings: [.linkedFramework("Security"), .linkedFramework("CoreFoundation"), .linkedLibrary("iconv")]),
        .executableTarget(name: "KaizenMotionBridge", dependencies: ["MotionCore"]),
        .executableTarget(name: "KaizenMotionListen", dependencies: ["MotionCore"], swiftSettings: [.swiftLanguageMode(.v5)]),
        .testTarget(name: "MotionCoreTests", dependencies: ["MotionCore"])
    ]
)

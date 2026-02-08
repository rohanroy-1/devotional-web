"use client"

import { Canvas } from "@react-three/fiber"
import Ring from "./ring"

export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Ring />
        </Canvas>
    )
}

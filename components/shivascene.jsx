"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

export default function ShivaScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 45 }}
            style={{ height: "100vh", width: "100vw" }}
        >
            <color attach="background" args={["#020202"]} />

            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Suspense fallback={null}>
                {/* We will add objects here */}
            </Suspense>
        </Canvas>
    )
}

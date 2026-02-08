"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const Scene = dynamic(() => import("./scene"), {
    ssr: false,
})

export default function SceneClient() {
    return (
        <Suspense fallback={<div className="text-gold">Loading scene…</div>}>
            <Scene />
        </Suspense>
    )
}

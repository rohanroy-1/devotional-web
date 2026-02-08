"use client"

import { motion } from "framer-motion"

export default function MantraRing() {
    return (
        <section className="relative min-h-[50vh] flex flex-col items-center justify-center">
            {/* Rotating Ring */}
            <motion.svg
                style={{ willChange: "transform, filter" }}
                width="360"
                height="360"
                viewBox="0 0 360 360"
                animate={{
                    rotate: 360,
                    scale: [1, 1.03, 1],
                    y: [0, -4, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 28,
                    ease: "linear",
                }}
                className="absolute w-[260px] h-[260px]
                                sm:w-[300px] sm:h-[300px]
                                md:w-[340px] md:h-[340px]
                                lg:w-[360px] lg:h-[360px]
                                "
            >

                <defs>
                    <path
                        id="circlePath"
                        d="M180,180 m-160,0
     a160,160 0 1,1 320,0
     a160,160 0 1,1 -320,0"
                    />

                    <linearGradient id="goldGradient">
                        <stop offset="0%" stopColor="#ffcc70" />
                        <stop offset="100%" stopColor="#c89b3c" />
                    </linearGradient>
                </defs>

                <text
                    fill="url(#goldGradient)"
                    fontSize="17.3"
                    letterSpacing="2"
                    style={{
                        filter: "drop-shadow(0 0 10px rgba(255,200,120,0.4))",
                    }}
                >
                    <textPath href="#circlePath">
                        •• ॐ नमः शिवाय •• ॐ नमः शिवाय •• ॐ नमः शिवाय •• ॐ नमः शिवाय •• ॐ नमः शिवाय •• ॐ नमः शिवाय •• ॐ नमः शिवाय
                    </textPath>
                </text>
            </motion.svg>

            {/* Center Mantra */}
            <div className="text-center z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.85, 1, 0.85],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] text-[#f5c46b] drop-shadow-[0_0_25px_rgba(255,200,120,0.55)]"
                >
                    🔱
                </motion.div>


            </div>
        </section>
    )
}

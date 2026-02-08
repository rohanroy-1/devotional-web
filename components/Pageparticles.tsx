"use client"
import { motion } from "framer-motion"

export default function PageParticles({ count = 40 }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-[#ffd27f] opacity-20 w-[2px] h-[2px] sm:w-[3px] sm:h-[3px]"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        x: [
                            Math.random() * window.innerWidth,
                            Math.random() * window.innerWidth + 15,
                            Math.random() * window.innerWidth - 15,
                            Math.random() * window.innerWidth,
                        ],
                        y: [
                            Math.random() * window.innerHeight,
                            Math.random() * window.innerHeight - 15,
                            Math.random() * window.innerHeight,
                        ],
                        opacity: [0.15, 0.6, 0.15],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 15 + Math.random() * 10, // slow ho jana chahiye isse 
                        ease: "easeInOut",
                    }}
                />

            ))}
        </div>
    )
}

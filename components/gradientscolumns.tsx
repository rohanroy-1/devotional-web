const heights = [
    "h-[70vh]",
    "h-[65vh]",
    "h-[55vh]",
    "h-[40vh]",
    "h-[55vh]",
    "h-[65vh]",
    "h-[70vh]",
]

export default function GradientColumns() {
    return (
        <div className="absolute inset-x-0 top-0 grid grid-cols-7 pointer-events-none">
            {heights.map((h, i) => (
                <div
                    key={i}
                    className={`flex justify-center ${h}`}
                >
                    <div className="w-full bg-gradient-to-b from-teal-500/20 via-teal-300/10 to-transparent" />
                </div>
            ))}
        </div>
    )
}

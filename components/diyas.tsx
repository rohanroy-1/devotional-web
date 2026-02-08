import Image from "next/image"

export default function Diyas() {
    return (
        <div className="absolute inset-x-0 bottom-[10vh] flex justify-center gap-16 z-10">
            {[1, 2, 3].map((i) => (
                <Image
                    unoptimized
                    key={i}
                    src="/diya.avif"
                    alt="Diya"
                    width={48}
                    height={48}
                    className="drop-shadow-[0_0_20px_rgba(255,183,77,0.6)] animate-[flicker_3s_ease-in-out_infinite]"
                />
            ))}
        </div>
    )
}

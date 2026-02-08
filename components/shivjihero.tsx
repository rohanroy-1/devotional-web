import Image from "next/image"
export default function ShivSoft() {
    return (
        <div className="absolute inset-x-0 top-[18vh] flex justify-center z-10">
            <Image
                src="/shiv-parvati.png"
                alt="Shivji"
                width={220}
                height={220}
                className="opacity-90 animate-[float_10s_ease-in-out_infinite]"
                priority
            />
        </div>
    )
}

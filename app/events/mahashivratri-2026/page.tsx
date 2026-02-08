import MantraRing from "@/components/ring"
import PageParticles from "@/components/Pageparticles"

export default function Page() {
    return (
        <main className="min-h-screen flex flex-col items-center relative">
            <PageParticles />
            <section className="w-full flex flex-col items-center justify-center text-center min-h-[85vh] px-4">
                <MantraRing />
                <h1 className="mt-8 text-4xl md:text-5xl text-[#f5c46b] tracking-wide">
                    Mahashivratri 2026
                </h1>

                <p className="mt-4 max-w-xl text-[#d6c9a2] text-lg">
                    The sacred night of Lord Shiva —
                    a time for devotion, silence, and inner awakening.
                </p>

                <p className="mt-2 text-sm tracking-widest text-[#bfa96a] uppercase">
                    Night of 15 February 2026
                </p>
            </section>
        </main>
    )
}

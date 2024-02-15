import CardPress from "@/components/press/CardPress";

export default function page() {
    return (
        <section className="max-w-7xl mx-auto">
            <h2 className="text-6xl lg:text-8xl font-bold text-shadow -tracking-[4px] lg:-tracking-[8px] mb-20 mt-10" style={{ lineHeight: 0.8 }}>PRESS</h2>
            <CardPress isPage={false} />
        </section>
    )
}

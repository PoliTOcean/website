export default function SponsorsHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#28B5E5] via-[#1294C6] to-[#0A6F9D] py-24 border-t border-white/25">
            <div className="absolute inset-0 bubbles-layer" />
            <div className="absolute inset-0 bubbles-layer bubbles-layer-mid" />
            <div className="absolute inset-0 bubbles-layer bubbles-layer-far" />
            <div className="relative mx-auto max-w-6xl px-6 text-center">
                <h1 className="hero-title !text-sea-light whitespace-normal">Our Sponsors</h1>
                <p className="mt-4 hero-desc !whitespace-normal max-w-2xl mx-auto">
                    The partners who help us build, test and push underwater innovation forward.
                </p>
            </div>
        </section>
    );
}
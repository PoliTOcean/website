import { DONATE_URL } from "./DonateHero";

const amounts = [
    { val: "€10", what: "Cables, fasteners and the small parts that hold everything together." },
    { val: "€25", what: "A batch of 3D-printed components for a new prototype." },
    { val: "€50", what: "Sensors and electronics that give our ROVs their senses." },
    { val: "€100+", what: "A meaningful step toward our next vehicle and competition." },
];

export default function SuggestedAmounts() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#28B5E5] via-[#1294C6] to-[#0A6F9D] py-20 border-t border-white/25">
            <div className="absolute inset-0 bubbles-layer" />
            <div className="absolute inset-0 bubbles-layer bubbles-layer-mid" />
            <div className="absolute inset-0 bubbles-layer bubbles-layer-far" />

            <div className="relative mx-auto max-w-6xl px-6 text-center text-sea-light">
                <h2 className="section-title-light mb-4">Every contribution counts</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    Pick a starting point — you&apos;ll set the final amount securely on the Politecnico platform.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    {amounts.map((a) => (
                        <a
                            key={a.val}
                            href={DONATE_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex flex-col gap-3 rounded-card border border-sea-light/20 bg-white/5 p-7 transition-all hover:-translate-y-1 hover:border-sea-light/60 hover:bg-white/10"
                        >
                            <span className="text-4xl font-black leading-none">{a.val}</span>
                            <span className="text-base text-sea-light/85">{a.what}</span>
                            <span className="mt-auto pt-3 text-sm font-bold uppercase tracking-wider text-sea-light/90 transition-transform group-hover:translate-x-1">
                                Donate →
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

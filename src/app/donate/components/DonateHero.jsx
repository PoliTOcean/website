export const DONATE_URL = "https://sostieni.polito.it/team/?team=t26";

export default function DonateHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#28B5E5] via-[#1294C6] to-[#0A6F9D] py-24 border-t border-white/25">
            <div className="absolute inset-0 bubbles-layer" />
            <div className="absolute inset-0 bubbles-layer bubbles-layer-mid" />
            <div className="absolute inset-0 bubbles-layer bubbles-layer-far" />

            <div className="relative mx-auto max-w-6xl px-6 text-center text-sea-light">
                <h1 className="hero-title !text-sea-light whitespace-normal">Help us dive deeper.</h1>
                <p className="mt-4 hero-desc !whitespace-normal max-w-2xl mx-auto">
                    PoliTOcean is built entirely by students. Every donation — large or small — turns
                    directly into parts, prototypes and hours of hands-on engineering.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <a href={DONATE_URL} target="_blank" rel="noreferrer" className="btn-outline-sea-lg">
                        Donate Now
                    </a>
                    <a href="#where-it-goes" className="btn-outline-sea-lg">
                        See Where It Goes
                    </a>
                </div>
            </div>
        </section>
    );
}

import { DONATE_URL } from "./DonateHero";

export default function OfficialPlatform() {
    return (
        <section className="footer-blend-fix relative overflow-hidden bg-gradient-to-b from-[#0A6F9D] via-[#075074] to-[#021726] py-20 border-t border-white/25">
            <div className="absolute inset-0 bubbles-layer" />
            <div className="absolute inset-0 bubbles-layer bubbles-layer-mid" />
            <div className="absolute inset-0 bubbles-layer bubbles-layer-far" />

            <div className="relative max-w-6xl mx-auto px-6 text-center text-sea-light">
                <span className="inline-block rounded-full border border-sea-light/30 px-4 py-2 text-xs font-bold uppercase tracking-wider text-sea-light/70">
                    Official platform · Politecnico di Torino
                </span>

                <h2 className="section-title-light mt-6">Donate securely to PoliTOcean</h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Donations are handled directly by the Polytechnic University of Turin through its
                    official fundraising platform, <strong className="text-white">sostieni.polito.it</strong>.
                    Safe, transparent and going straight to the team.
                </p>

                <div className="mt-10 flex justify-center">
                    <a href={DONATE_URL} target="_blank" rel="noreferrer" className="btn-outline-sea-lg">
                        Go to sostieni.polito.it
                    </a>
                </div>

                <p className="mt-4 text-sm text-sea-light/55">
                    You&apos;ll be redirected to sostieni.polito.it/team/?team=t26
                </p>
            </div>
        </section>
    );
}

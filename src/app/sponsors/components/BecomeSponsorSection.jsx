import { Link } from "next-transition-router";

export default function BecomeSponsorSection() {
    return (
        <section className="footer-blend-fix relative overflow-hidden bg-gradient-to-b from-[#28B5E5] via-[#1294C6] to-[#0A6F9D] py-20 border-t border-white/25">
            <div className="absolute inset-0 bubbles-layer" />
            <div className="absolute inset-0 bubbles-layer bubbles-layer-mid" />
            <div className="absolute inset-0 bubbles-layer bubbles-layer-far" />
            
            <div className="relative max-w-6xl mx-auto px-6 text-center text-sea-light">
                <h2 className="section-title-light">Become a Sponsor</h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Partner with PoliTOcean to support student innovation, hands-on engineering, and international competitions.
                </p>

                <div className="mt-10 flex justify-center">
                    <Link href="/contact" className="btn-outline-sea-lg">
                    Become a Sponsor
                    </Link>
                </div>
            </div>
        </section>
    );
}
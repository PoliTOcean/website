import PrototypeCarousel from "./components/PrototypeCarousel";
import { prototypes } from "./data/prototypes";

export default function PrototypesPage() {
    return (
        <section className="min-h-screen bg-ocean-dark py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-4" />
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                        Our Prototypes
                    </h1>
                    <p className="mt-4 text-sea-light text-lg md:text-xl max-w-2xl leading-relaxed">
                        Explore the vehicles we designed and tested with effort and dedication
                    </p>
                </div>
            </div>

            <PrototypeCarousel prototypes={prototypes} />
        </section>
    );
}
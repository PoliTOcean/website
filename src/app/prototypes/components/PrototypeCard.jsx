import { Link } from "next-transition-router";

export default function PrototypeCard({ name, description, image, slug }) {
    return (
        <Link href={`/prototypes/${slug}`} className="snap-start shrink-0">
            <article className="flex flex-col w-[85vw] sm:w-[70vw] md:w-[46vw] lg:w-[32vw] max-w-[420px] rounded-[28px] overflow-hidden bg-card-bg shadow-[0_12px_35px_rgba(0,50,74,0.30)] h-[520px] transition-transform duration-300 hover:-translate-y-1">
                <div className="h-64 md:h-80 w-full bg-sea-light/40 overflow-hidden">
                <img src={image} alt={name} className="h-full w-full object-cover" />
                </div>

                <div className="p-6 flex-1 overflow-hidden">
                <h2 className="text-2xl font-bold text-ocean-dark">{name}</h2>
                <p className="mt-3 text-base leading-relaxed text-ocean-dark">
                    {description}
                </p>
                </div>
            </article>
        </Link>
    );
}
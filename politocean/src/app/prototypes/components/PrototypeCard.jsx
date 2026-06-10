import { Link } from "next-transition-router";

export default function PrototypeCard({ name, description, image, slug }) {
    return (
        <Link href={`/prototypes/${slug}`} className="snap-start shrink-0">
            <article className="w-[85vw] sm:w-[70vw] md:w-[46vw] lg:w-[32vw] max-w-[420px] rounded-[28px] overflow-hidden bg-card-bg shadow-[0_12px_35px_rgba(0, 50, 74, 0.30)] h-[520px]">
                <div className="h-35 md:h-90 w-full bg-sea-light/40">
                <img src={image} alt={name} className="h-full w-full" />
                </div>

                <div className="p-6">
                <h2 className="text-2xl font-bold text-ocean-dark">{name}</h2>
                <p className="mt-3 text-base leading-relaxed text-ocean-dark">
                    {description}
                </p>
                </div>
            </article>
        </Link>
    );
}
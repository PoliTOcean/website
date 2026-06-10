import PrototypeCard from './PrototypeCard';

export default function PrototypeCarousel( {prototypes} ) {
    return (
        <div className="prototype-scrollbar flex gap-6 overflow-x-auto pb-4 px-6 scroll-px-6 snap-x snap-mandatory scroll-smooth lg:justify-center" aria-label="Prototype list" >
            {prototypes.map((prototype) => (
                <PrototypeCard key={prototype.id} name={prototype.name} description={prototype.summary} image={prototype.image} slug={prototype.slug} />
            ))}
            <div className="shrink-0 w-px" aria-hidden="true" />
        </div>
    );
}
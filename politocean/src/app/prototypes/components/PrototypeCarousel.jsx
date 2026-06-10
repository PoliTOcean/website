import PrototypeCard from './PrototypeCard';

export default function PrototypeCarousel( {prototypes} ) {
    return (
        <div className="prototype-scrollbar flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth" aria-label="Prototype list" >
            {prototypes.map((prototype) => (
                <PrototypeCard key={prototype.id} name={prototype.name} description={prototype.summary} image={prototype.image} slug={prototype.slug} />
            ))}
        </div>
    );
}
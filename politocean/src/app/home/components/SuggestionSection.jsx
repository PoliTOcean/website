import Link from 'next/link';

export default function SuggestionSection({ title, description, linkText, linkHref, bgImage }) {
    return (
        <section className="relative bg-gradient-to-br from-cyan-900/40 to-blue-950 py-24 overflow-hidden">
            {bgImage && (
                <img src={bgImage} alt="" aria-hidden="true" className="absolute right-0 bottom-0 h-full opacity-20 object-contain pointer-events-none select-none" />
            )}
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-start gap-6">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    {title}
                </h2>
                {description && (
                    <p className="text-sea-light/70 text-lg md:text-xl max-w-xl leading-relaxed">
                        {description}
                    </p>
                )}
                <Link href={linkHref} className="mt-2 inline-block border-2 border-sea-light bg-sea-light rounded-btn hover:bg-ocean-dark hover:text-sea-light hover:border-ocean-dark text-base px-8 py-3 rounded-full transition-colors">
                    {linkText}
                </Link>
            </div>
        </section>
    );
}
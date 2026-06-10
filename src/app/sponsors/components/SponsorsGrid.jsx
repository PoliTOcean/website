export default function SponsorsGrid( {sponsors} ) {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-6 text-center">
                <h2 className="section-title mb-8">They Support Our Mission</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {sponsors.map((s, i) => (
                            <a key={s.id} href={s.website} target="_blank" rel="noreferrer" className={`drop-card p-6 sm:p-8 sponsor-card flex flex-col items-center justify-center text-center min-h-40 md:min-h-56 `} style={{ animationDelay: `${i * 80}ms` }} aria-label={s.id} >
                                <div className={s.logoWrapClass ?? ""}>
                                    <img src={s.logo} alt={`${s.id} logo`} loading="lazy" className={`w-auto object-contain ${s.logoClass ?? "max-h-16"}`} />
                                </div>
                                <p className="mt-3 text-base leading-relaxed max-w-md">{s.description}</p>
                            </a>
                    ))}
                </div>
                <p className="mt-8 text-lg max-w-3xl mx-auto" >
                    Every sponsor directly contributes to student growth, prototype development, and competition readiness.
                </p>
            </div>
        </section>
    );
}
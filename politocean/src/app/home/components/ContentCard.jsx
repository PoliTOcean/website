export default function ContentCard({ title, children, imageSource, imageAlt, imagePosition = 'left', bgDark = false }) {
    const isReverse = imagePosition === 'right';

    return (
        <section className={`${bgDark ? "bg-ocean-dark" : "bg-sea-light"} py-20`}>
            <div className={`max-w-7xl mx-auto px-6 flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                {imageSource && (
                    <div className="w-full md:w-1/2 rounded-card overflow-hidden shadow-2xl">
                        <img src={imageSource} alt={imageAlt || title} className="w-full h-auto object-cover" />
                    </div>
                )}

                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h2 className={`text-4xl md:text-5xl font-bold leading-tight ${bgDark ? "text-sea-light" : "text-ocean-dark"}`}>
                        {title}
                    </h2>
                    <div className={`${bgDark ? "text-sea-light" : "text-ocean-dark"} text-base md:text-lg leading-relaxed`}>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
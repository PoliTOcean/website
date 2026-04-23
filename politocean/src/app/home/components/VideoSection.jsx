export default function VideoSection({ title, description, videoSource }) {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {videoSource && (
                <video src={videoSource} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline />
            )}
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex flex-col items-start justify-end h-full max-w-7xl mx-auto px-6 pb-24">7
                <h1 className="text-5xl md:text-6xl lg:text-[74px] font-bold text-sea-light mb-4 leading-tight">
                    {title}
                </h1>
                {description && (
                    <p className="text-lg md:text-xl text-sea-light max-w-xl leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}
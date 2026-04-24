export default function VideoSection({ title, description, videoSource }) {
    return (
        <section className="relative w-full h-screen overflow-hidden isolate bg-ocean-dark">
            {videoSource && (
                <video src={videoSource} className="absolute inset-0 w-full h-full object-cover [filter:brightness(0.55)] [transform:translateZ(0)] will-change-transform" autoPlay muted loop playsInline preload="auto" poster="/HomeAssets/Video-mp4compressed.mp4" />
            )}

            <div className="absolute top-60 left-20 z-10 flex flex-col items-start p-6 md:p-10">
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
import { Link } from "next-transition-router";
import ModelViewer from "./components/ModelViewer";

export default function ModelDetailPage({ prototype }) {
    return (
        <section className="min-h-screen bg-ocean-dark text-sea-light">
            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-10">
                <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sea-light/70">
                    Prototype
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    {prototype.name}
                </h1>
                <p className="text-sea-light/80 text-lg">{prototype.summary}</p>
                <p className="text-sea-light/70 leading-relaxed">
                    {prototype.description}
                </p>

                {prototype.wip ? (
                    <div className="flex flex-col items-start gap-4 mt-6">
                        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 text-xs uppercase tracking-widest font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            Work in progress
                        </div>
                        <Link
                            href="/prototypes"
                            className="inline-flex items-center gap-2 border border-sea-light/50 text-sea-light px-5 py-2 rounded-full hover:bg-sea-light hover:text-ocean-dark transition"
                        >
                            Back to prototypes
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="mt-6 divide-y divide-white/10">
                            {prototype.specs.map((spec) => (
                                <div
                                    key={spec.label}
                                    className="flex items-center justify-between py-3 text-sm"
                                >
                                    <span className="text-sea-light/60">{spec.label}</span>
                                    <span className="text-sea-light">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                        <Link
                            href="/prototypes"
                            className="inline-flex items-center gap-2 border border-sea-light/50 text-sea-light px-5 py-2 rounded-full hover:bg-sea-light hover:text-ocean-dark transition"
                        >
                            Back to prototypes
                        </Link>
                    </>
                )}
                </div>

                <div className="relative rounded-[28px] bg-gradient-to-br from-[#0b2a38] to-[#0a1620] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] overflow-hidden">
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <span className="px-3 py-1 text-xs uppercase tracking-widest bg-white/10 border border-white/20 rounded-full">
                    Interactive 3D
                    </span>
                    <span className="px-3 py-1 text-xs uppercase tracking-widest bg-white/10 border border-white/20 rounded-full">
                    GLB
                    </span>
                </div>

                    <div className="h-[60vh] lg:h-[70vh]">
                        {prototype.modelUrl ? (
                            <ModelViewer modelUrl={prototype.modelUrl} />
                        ) : (
                            <div className="h-full w-full grid place-items-center text-sea-light/70">
                            <div className="text-center">
                                <div className="text-sm uppercase tracking-widest">3D model</div>
                                <div className="text-lg font-semibold mt-2">Coming soon</div>
                            </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
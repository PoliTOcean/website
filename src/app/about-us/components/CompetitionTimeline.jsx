'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

const competitions = [
    {
        year: '2018',
        location: 'Federal Way, Washington',
        theme: 'Jet City Energy',
        rov: 'NEREO',
        photo: '/AboutUsAssets/competitions/photos/2018.jpg',
        logo: '/AboutUsAssets/competitions/logos/2018.png',
    },
    {
        year: '2019',
        location: 'Kingsport, Tennessee',
        theme: 'Innovations for Inshore: ROV Operations in Rivers, Lakes, and Dams',
        rov: 'NEREO',
        photo: '/AboutUsAssets/competitions/photos/2019.jpg',
        logo: '/AboutUsAssets/competitions/logos/2019.png',
    },
    {
        year: '2022',
        location: 'Long Beach, California',
        theme: 'UN Decade of the Ocean:MATE Inspires ESG',
        rov: 'EVA',
        photo: '/AboutUsAssets/competitions/photos/2022.jpg',
        logo: '/AboutUsAssets/competitions/logos/2022.png',
        note: 'First edition of the EVA ROV.',
    },
    {
        year: '2023',
        location: 'Longmont, Colorado',
        theme: 'UN Decade of the Ocean:MATE Goes to the Mountains!',
        rov: 'EVA',
        photo: '/AboutUsAssets/competitions/photos/2023.jpg',
        logo: '/AboutUsAssets/competitions/logos/2023.png',
    },
    {
        year: '2024',
        location: 'Kingsport, Tennessee',
        theme: 'MATE ROV Competition World Championship in Kingsport, TN!',
        rov: 'EVA',
        photo: '/AboutUsAssets/competitions/photos/2024.jpg',
        logo: '/AboutUsAssets/competitions/logos/2024.png',
    },
    {
        year: '2025',
        location: 'Alpena, Michigan',
        theme: 'MATE ROV Competition World Championship in Alpena, MI!',
        rov: 'EVA',
        photo: '/AboutUsAssets/competitions/photos/2025.jpg',
        logo: '/AboutUsAssets/competitions/logos/2025.png',
    },
];

function CompetitionCard({ comp, index }) {
    const [imgError, setImgError] = useState(false);
    const [logoError, setLogoError] = useState(false);

    return (
        <div className="flex-shrink-0 w-72 md:w-80 snap-start flex flex-col">
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-cyan-400/40 transition-all duration-300 h-[19rem] flex flex-col">
                <div className="relative h-44 overflow-hidden">
                    {comp.photo && !imgError ? (
                        <Image
                            src={comp.photo}
                            alt={`PoliTOcean team at MATE ROV ${comp.year}`}
                            fill
                            sizes="(max-width: 768px) 288px, 320px"
                            className="object-cover"
                            loading={index === 0 ? 'eager' : 'lazy'}
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-cyan-900/40 to-blue-900/40 flex items-center justify-center">
                            <span className="text-sea-light/20 text-sm uppercase tracking-widest">No photo</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071620] via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 bg-ocean-dark/80 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1">
                        <span className="text-xs font-bold text-cyan-400 tracking-widest">{comp.year}</span>
                    </div>

                    <div className="absolute top-3 right-3 bg-ocean-dark/80 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1">
                        <span className="text-xs font-bold text-cyan-400 tracking-widest">{comp.rov}</span>
                    </div>
                </div>

                <div className="p-4 flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-1 relative">
                        {!logoError ? (
                            <Image
                                src={comp.logo}
                                alt={`MATE ROV ${comp.year} logo`}
                                fill
                                sizes="56px"
                                className="object-contain p-1"
                                loading="lazy"
                                onError={() => setLogoError(true)}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-sea-light/20 text-[10px]">
                                {comp.year}
                            </div>
                        )}
                    </div>

                    <div className="min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                            <svg className="w-3 h-3 text-sea-light/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-xs text-sea-light/50 truncate">{comp.location}</span>
                        </div>
                        <h4 className="text-sm font-bold text-sea-light leading-snug line-clamp-3">{comp.theme}</h4>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mt-4 gap-0">
                <div className="w-3 h-3 rounded-full border-2 border-cyan-400 bg-ocean-dark" />
            </div>
        </div>
    );
}

export default function CompetitionTimeline() {
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    };

    return (
        <section className="bg-ocean-dark text-sea-light py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
                    <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold mb-2">Since 2018</p>
                        <h2 className="text-4xl md:text-5xl font-bold">Our Journey</h2>
                        <p className="mt-3 text-sea-light/60 max-w-xl text-sm md:text-base">
                            Every year we travel to the United States to compete in the MATE ROV Competition,
                            putting months of engineering and teamwork to the test.
                        </p>
                    </div>

                    <div className="flex gap-2 flex-shrink-0">
                        <button
                            onClick={() => scroll(-1)}
                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sea-light/60 hover:border-cyan-400/60 hover:text-cyan-400"
                            aria-label="Scroll left"
                        >
                            ←
                        </button>
                        <button
                            onClick={() => scroll(1)}
                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sea-light/60 hover:border-cyan-400/60 hover:text-cyan-400"
                            aria-label="Scroll right"
                        >
                            →
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute bottom-[calc(1rem+6px)] left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />

                    <div
                        ref={scrollRef}
                        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {competitions.map((comp, i) => (
                            <CompetitionCard key={comp.year} comp={comp} index={i} />
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-xs text-sea-light/30 text-center tracking-widest uppercase">
                    {competitions.length} competitions · {[...new Set(competitions.map(c => c.rov))].join(', ')}
                </div>
            </div>
        </section>
    );
}

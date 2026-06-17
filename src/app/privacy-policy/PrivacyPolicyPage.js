"use client";

import { useState } from "react";
import { privacyContent } from "./content";

export default function PrivacyPolicyPage() {
    const [lang, setLang] = useState("en");
    const c = privacyContent[lang];

    return (
        <main className="bg-sea-light text-ocean-dark">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-b from-[#28B5E5] via-[#1294C6] to-[#0A6F9D] py-20 border-t border-white/25">
                <div className="absolute inset-0 bubbles-layer" />
                <div className="absolute inset-0 bubbles-layer bubbles-layer-mid" />
                <div className="absolute inset-0 bubbles-layer bubbles-layer-far" />

                <div className="relative mx-auto max-w-4xl px-6 text-center text-sea-light">
                    <h1 className="hero-title !text-sea-light whitespace-normal">{c.title}</h1>
                    <p className="mt-4 hero-desc !whitespace-normal max-w-2xl mx-auto">{c.intro}</p>

                    <div className="mt-8 inline-flex rounded-full border border-sea-light/40 p-1">
                        {[
                            { id: "en", label: "English" },
                            { id: "it", label: "Italiano" },
                        ].map((o) => (
                            <button
                                key={o.id}
                                type="button"
                                onClick={() => setLang(o.id)}
                                aria-pressed={lang === o.id}
                                className={`px-5 py-1.5 rounded-full text-sm font-bold transition-colors ${
                                    lang === o.id
                                        ? "bg-sea-light text-ocean-dark"
                                        : "text-sea-light hover:text-white"
                                }`}
                            >
                                {o.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Body */}
            <section className="py-16">
                <div className="mx-auto max-w-4xl px-6">
                    <p className="text-sm text-ocean-dark/60">{c.lastUpdated}</p>

                    <div className="mt-8 flex flex-col gap-10">
                        {c.sections.map((s, i) => (
                            <div key={i}>
                                <h2 className="section-title !text-2xl mb-3">{s.heading}</h2>
                                {s.body.map((p, j) => (
                                    <p key={j} className="card-body !text-base mb-3">
                                        {p}
                                    </p>
                                ))}
                                {s.list && (
                                    <ul className="list-disc pl-6 flex flex-col gap-2 card-body !text-base">
                                        {s.list.map((li, k) => (
                                            <li key={k}>{li}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

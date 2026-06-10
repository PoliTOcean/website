import dynamic from 'next/dynamic';
import ContentCard from "../home/components/ContentCard";
import SuggestionSection from "../home/components/SuggestionSection";
import CompetitionTimeline from "./components/CompetitionTimeline";
import WorkflowSection from "./components/WorkflowSection";

const Organogram = dynamic(() => import('./components/Organogram'), {
    loading: () => (
        <div className="w-full space-y-6 animate-pulse">
            <div className="flex justify-center">
                <div className="w-48 h-16 rounded-xl bg-white/5" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-64 rounded-xl bg-white/5" />
                ))}
            </div>
        </div>
    )
});

const metrics = [
    { label: "Members", value: "67" },
    { label: "Founded", value: "2017" },
    { label: "Competitions", value: "MATE ROV" },
];

export default function AboutUsPage() {
    return (
        <>
        <section className="relative w-full min-h-[70vh] bg-ocean-dark text-sea-light overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Individually we are one drop, together we are an Ocean.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-sea-light/80 max-w-2xl">
                PoliTOcean is the student team of the Polytechnic University of Turin which, since 2017, has been building remotely operated underwater vehicles (ROVs).
                Behind every project there is passion, creativity, and teamwork: students from different disciplines work side by side, combining expertise in mechanics, electronics, software and firmware, hydrodynamics, control systems, materials, and communication.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
                {metrics.map((item) => (
                <div key={item.label} className="drop-card px-6 py-4 text-ocean-dark">
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="text-sm uppercase tracking-wide">{item.label}</div>
                </div>
                ))}
            </div>
            </div>
        </section>

        <ContentCard
            title="Our Mission"
            imageSource="/AboutUsAssets/AboutUsOurMission.jpg"
            imageAlt="Our Mission Image"
        >
            <p>
            Since 2017 we have been designing and developing ROVs—Remotely Operated Vehicles—testing them each year by taking part in the prestigious MATE ROV Competition in the USA.
            Thanks to the support of the Polytechnic University of Turin and our valued partners, we have the opportunity to experience the full ROV development process, from the early design and 3D printing stages to assembly and software development.
            </p>
        </ContentCard>

        <CompetitionTimeline />

        <section className="bg-ocean-dark text-sea-light py-20">
            <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-sea-light">Meet the Team</h2>
            <Organogram />
            </div>
        </section>

        <section className="flex justify-center items-center bg-sea-light">
            <WorkflowSection />
        </section>

        <SuggestionSection
            title="Want to collaborate with us?"
            description="Placeholder: sponsorships, partnerships, or student applications."
            linkText="Contact us"
            linkHref="/contact"
        />
        </>
    );
}

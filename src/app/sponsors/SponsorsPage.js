import BecomeSponsorSection from "./components/BecomeSponsorSection";
import SponsorsGrid from "./components/SponsorsGrid";
import SponsorsHero from "./components/SponsorsHero";
import { sponsors } from "./data/SponsorsData";

export default function SponsorsPage() {
    return (
        <main className="bg-sea-light text-ocean-dark">
            <SponsorsHero />

            <SponsorsGrid sponsors={sponsors} />

            <BecomeSponsorSection />

        </main>
    )
}
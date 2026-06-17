import DonateHero from "./components/DonateHero";
import WhereItGoes from "./components/WhereItGoes";
import SuggestedAmounts from "./components/SuggestedAmounts";
import OfficialPlatform from "./components/OfficialPlatform";

export default function DonatePage() {
    return (
        <main className="bg-sea-light text-ocean-dark">
            <DonateHero />

            <WhereItGoes />

            <SuggestedAmounts />

            <OfficialPlatform />
        </main>
    );
}

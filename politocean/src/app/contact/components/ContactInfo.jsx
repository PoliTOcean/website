import { BuildingIcon, EmailIcon, LocationIcon } from "./Icons";
import InfoCard from "./InfoCard";

export default function ContactInfo() {
    return (
        <div className="flex flex-col gap-8">
            <div className="w-full aspect-video rounded-2xl bg-blue-deep/20 border border-white/10 flex items-center justify-center text-sea-light/20 text-sm">
                [ Map Placeholder ]
            </div>

            <InfoCard icon={LocationIcon} value="Corso Castelfidardo, 39" subtext="10129, Torino (TO)" footer="DET Electronics Department" />

            <InfoCard icon={EmailIcon} label="Email for People" value="hello@politocean.com" href="mailto:hello@politocean.com" isEmail />

            <InfoCard icon={BuildingIcon} label="Email for Companies" value="contact@politocean.com" href="mailto:contact@politocean.com" isEmail />

        </div>
    )
}
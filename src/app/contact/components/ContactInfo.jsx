import { EmailIcon, LocationIcon } from "./Icons";
import InfoCard from "./InfoCard";

export default function ContactInfo() {
    return (
        <div className="flex flex-col gap-8">
            <div className="w-full aspect-video rounded-2xl bg-blue-deep/20 border border-white/10 flex items-center justify-center text-sea-light/20 text-sm">
                <img src="/Polito-Maps.jpg" alt="Map showing PoliTOcean location at Politecnico di Torino" loading="lazy" className="w-full h-full object-cover rounded-2xl" />
            </div>

            <InfoCard icon={LocationIcon} value="Corso Castelfidardo, 39" subtext="10129, Torino (TO)" footer="DET Electronics Department" />

            <InfoCard icon={EmailIcon} label="Contact Email" value="politocean@gmail.com" href="mailto:politocean@gmail.com" isEmail />
        </div>
    )
}
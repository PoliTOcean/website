export default function SponsorSection({ sponsorImage = '/HomeAssets/sponsorcard.jpg' }) {
    return(
        <section className="bg-bg-dark">
            <img src={sponsorImage} alt="Sponsor Card" loading="lazy" className="w-full h-auto" />
        </section>
    )
}
export default function SponsorSection({ sponsorImage = '/HomeAssets/sponsorcard.jpg' }) {
    const sponsors = ['Massola Giuseppe', 'Altair', 'DEWESoft', 'abel'];

    return(
        <section className="bg-bg-dark">
            <img src={sponsorImage} alt="Sponsor Card" className="w-full h-auto" />
        </section>
    )
}
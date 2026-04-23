import ContentCard from "./components/ContentCard";
import SuggestionSection from "./components/SuggestionSection";
import VideoSection from "./components/VideoSection";

export default function HomePage() {
  return (
    <>
      <VideoSection videoSource="/HomeAssets/Video-mp4compressed.mp4" title="A Sea of Possibilities"
        description={
          <>
            Versatile cost-effective <strong className="text-white">underwater drones</strong> capable of{' '}
            <strong className="text-sea-light">analyzing seabeds</strong> and{' '}
            <strong className="text-sea-light">executing operations</strong> at extremely{' '}
            <strong className="text-sea-light">low depths</strong>.
          </>
        }
      />
      
      <section className="w-full bg-bg-dark">
        <img src="/HomeAssets/Interlude-Section.svg" alt="PoliTOcean logotype banner" className="w-full h-auto" />
      </section>

      <ContentCard
        title={
          <>
            PoliTOcean is pure{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              love
            </span>
            <br />
            for Underwater Engineering.
          </>
        }
        imageSource="/HomeAssets/Card-1-Image.png"
        imageAlt="ROV water testing in the pool"
      >
        <p>
          We&apos;re a <strong className="text-ocean-dark">student team</strong> from the Polytechnic University
          of Turin, made up of <strong className="text-ocean-dark">60 students</strong>, all united by a
          profound passion for underwater robotics.
        </p>
        <p>
          Since 2017 we&apos;ve been designing and crafting <strong className="text-ocean-dark">ROVs</strong> –
          Remotely Operated Vehicles – competing annually in the esteemed{' '}
          <strong className="text-ocean-dark">MATE ROV Competition in the USA</strong>.
        </p>
      </ContentCard>

      <ContentCard
        title="What is a ROV?"
        imageSource="/HomeAssets/Card-2-Image.png"
        imagePosition="right"
        imageAlt="ROV model"
        bgDark
      >
        <p>
          ROVs are remote-controlled underwater vehicles, engineered to navigate and operate in the{' '}
          <strong className="text-white">most remote and challenging underwater environments</strong>.
        </p>
        <p>
          From <strong className="text-white">oceanic explorations</strong> to{' '}
          <strong className="text-white">subsea infrastructure inspections</strong>, ROVs undertake a
          diverse range of tasks, providing crucial data for scientific research,{' '}
          <strong className="text-white">industry</strong>, and environmental conservation.
        </p>
      </ContentCard>

      <ContentCard
        title="What makes a ROV useful?"
        imageSource="/HomeAssets/Card-3-Image.png"
        imagePosition="left"
        imageAlt="ROV underwater"
      >
        <p>
          In <strong className="text-ocean-dark">today&apos;s rapidly evolving world</strong>, ROVs have emerged
          as indispensable tools for a myriad of underwater tasks. Their{' '}
          <strong className="text-ocean-dark">versatility</strong> and{' '}
          <strong className="text-ocean-dark">adaptability</strong> make them{' '}
          <strong className="text-ocean-dark">invaluable assets</strong> across various industries.
        </p>
        <p>
          Here&apos;s a <strong className="text-ocean-dark">Wet Test</strong> in the Monumental Pool driven by
          PoliTOcean MATE Division and our Mentor Prof. Claudio Sansoè.
        </p>
      </ContentCard>

      <SuggestionSection
        title="Yes, we make ROVs."
        description="Explore our prototypes, where cutting-edge technology meets real-world impact!"
        linkText="Take a look"
        linkHref="/prototypes"
        bgImage="/HomeAssets/Suggestion-Section-Image.png"
      />
    </>
  )
}

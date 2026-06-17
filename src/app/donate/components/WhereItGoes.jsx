const funds = [
    {
        title: "Parts & materials",
        text: "Thrusters, sensors, cameras, housings and the countless components every ROV needs.",
    },
    {
        title: "Prototyping & testing",
        text: "3D printing, machining and pool sessions that turn designs into working vehicles.",
    },
    {
        title: "The MATE competition",
        text: "Travel and logistics to take our work to the international MATE ROV Competition in the USA.",
    },
];

export default function WhereItGoes() {
    return (
        <section id="where-it-goes" className="py-16 scroll-mt-24">
            <div className="mx-auto max-w-6xl px-6 text-center">
                <h2 className="section-title mb-4">100% into the water</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    We&apos;re a student team, not a company. Your contribution funds the real cost of
                    building and testing underwater vehicles.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7 text-left">
                    {funds.map((f) => (
                        <div key={f.title} className="drop-card p-8 flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                                <span className="w-3.5 h-3.5 rounded-sm bg-sea-light" />
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-ocean-dark">{f.title}</h3>
                            <p className="mt-2 card-body !text-base">{f.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

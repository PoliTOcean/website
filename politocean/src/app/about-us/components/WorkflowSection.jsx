const WorkflowSection = () => {
    const sections = [
        {
            index: "01",
            title: "MATE ROV",
            desc: "The aim of the MATE area is to participate in the MATE ROV competition, an annual challenge held in the United States where univversities from around the world compete in tasks that replicate real-world underwater maintenance and exploration activities.",
        },
        {
            index: "02",
            title: "R&D",
            desc: "The purpose of the R&D area is to handle all work that is not directly related to the competitive part of the team, in particular the group is dealing with projects in collaboration with companies, tests and studies in the field of marine robotics, creating theses and scientific treatises, finalize secondary works of the team and innovate applied technologies in the competitive environment.",
        },
        {
            index: "03",
            title: "Communication & Marketing",
            desc: "The communication and marketing division oversees the team's social media presence, ensuring consistent and engaging content, identifies potential companies for collaboration, nurtures partnerships with existing sponsors and organizes promotional activities to boost the team's visibility and impact.",
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-20 text-sea-light">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-ocean-dark">How We Work</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sections.map((item) => (
                    <div key={item.index} className="drop-card px-6 py-6 text-ocean-dark">
                        <h3 className="text-xl font-bold mt-3 mb-3">{item.title}</h3>
                        <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkflowSection;

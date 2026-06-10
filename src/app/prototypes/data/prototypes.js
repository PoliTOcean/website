export const prototypes = [
    {
        id: "eva",
        slug: "eva",
        name: "EVA",
        summary: "Tethered underwater drone, typically used for subsea maintenance operations, seabed exploration, and environmental surveys.",
        description:
        "EVA is a compact, safety‑focused ROV designed for shallow‑water inspections, featuring shrouded thrusters, status LEDs, and over‑current/over‑voltage protection. It delivers stable control with heave, pitch, roll, and attitude control, plus onboard sensors like IMU and pressure, complemented by four cameras for reliable situational awareness.",
        image: "/ROVs/EVA.jpg",
        modelUrl: null,
        specs: [
            { label: "Build time and testing", value: "Over 5k hours of work" },
            { label: "Total cost", value: "14000€" },
            { label: "Mass", value: "17.6 kg" },
            { label: "ROV Dimensions", value: "LxWxH (mm) = 565x498x220" },
        ],
    },
    {
        id: "nereo",
        slug: "nereo",
        name: "Nereo",
        summary: "A versatile and continuously evolving inspection ROV that combines operational capability with technology development and validation.",
        description:
            "Originally developed as the first underwater vehicle by our team, this compact ROV features a tubular electronics housing and is designed for inspection operations at depths of up to 25 meters. Equipped with three cameras, including one remotely adjustable unit, and an integrated sonar system, it provides reliable situational awareness in a wide range of underwater environments. Over the years, the platform has undergone multiple upgrades and redesigns, becoming the team's primary test bench for evaluating and validating new technologies.",
        image: "/ROVs/NEREO.jpg",
        modelUrl: null,
        specs: [
            { label: "Build time and testing", value: "Over 12k hours of work" },
            { label: "Total cost", value: "12000€" },
            { label: "Mass", value: "15 kg" },
            { label: "ROV Dimensions", value: "LxWxH (mm) = 560x385x270" },
        ],
    },
    {
        id: "auv",
        slug: "auv",
        name: "AUV",
        wip: true,
        summary: "Our new prototype we are currently working on.",
        description:
            "Started last year, this project aims to create an autonomous underwater vehicle for exploration and data acquisition. We are currently in the design phase and plan to build the first prototype next year.",
        image: "/ROVs/AUV.png",
        modelUrl: null,
        specs: [
            { label: "Weight", value: "--" },
            { label: "Range", value: "--" },
            { label: "Sensors", value: "--" },
            { label: "Power", value: "--" },
        ],
    },
];
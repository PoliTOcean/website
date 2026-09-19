import { notFound } from "next/navigation";
import ModelDetailPage from "../ModelDetailPage";
import { prototypes } from "../data/prototypes";

export function generateStaticParams() {
    return prototypes.map(({ slug }) => ({ id: slug }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const prototype = prototypes.find((item) => item.slug === id);
    return prototype ? { title: `${prototype.name} - PoliTOcean`, description: prototype.summary } : {};
}

export default async function PrototypeDetailPage({ params }) {
    const { id } = await params;
    const prototype = prototypes.find((item) => item.slug === id);

    if (!prototype) {
        notFound();
    }

    return <ModelDetailPage prototype={prototype} />;
}
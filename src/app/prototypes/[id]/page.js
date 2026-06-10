import { notFound } from "next/navigation";
import ModelDetailPage from "../ModelDetailPage";
import { prototypes } from "../data/prototypes";

export default async function PrototypeDetailPage({ params }) {
    const { id } = await params;
    const prototype = prototypes.find((item) => item.slug === id);

    if (!prototype) {
        notFound();
    }

    return <ModelDetailPage prototype={prototype} />;
}
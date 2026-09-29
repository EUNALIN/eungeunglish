import { notFound } from "next/navigation";
import { constellations } from "@/data/constellations";
import DrawRunner from "./DrawRunner";

export function generateStaticParams() {
  return constellations.map((c) => ({ id: c.id }));
}

export default async function DrawStagePage({ params }: PageProps<"/draw/[id]">) {
  const { id } = await params;
  const constellation = constellations.find((c) => c.id === id);
  if (!constellation) notFound();
  return <DrawRunner constellation={constellation} />;
}

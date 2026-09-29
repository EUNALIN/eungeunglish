import { notFound } from "next/navigation";
import { findTopic, grammarTopics } from "@/data";
import { studyTopics } from "@/data/study";
import TopicRunner from "./TopicRunner";

export function generateStaticParams() {
  return [...grammarTopics, ...studyTopics].map((t) => ({ id: t.id }));
}

export default async function TopicPage({ params }: PageProps<"/study/[id]">) {
  const { id } = await params;
  const topic = findTopic(id);
  if (!topic) notFound();
  return <TopicRunner topic={topic} />;
}

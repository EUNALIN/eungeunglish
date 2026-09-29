"use client";

import Link from "next/link";
import { grammarTopics, LEVELS } from "@/data";
import { studyTopics } from "@/data/study";
import { useProgress } from "@/lib/progress";
import type { GrammarTopic } from "@/lib/types";

export default function StudyPage() {
  const { progress } = useProgress();
  const levels = [1, 2, 3] as const;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-display text-4xl text-star">Study with eung!</h1>
        <p className="mt-2 text-dim">개념을 가볍게 훑고, 바로 영작으로 내 것 만들기 ✍️</p>
      </div>

      {/* 블랙홀 */}
      <Link
        href="/study/blackhole"
        className="glass mt-8 flex items-center gap-4 rounded-3xl p-4 transition hover:border-star/60"
      >
        <span className="text-4xl spin-slow inline-block">🕳️</span>
        <div className="flex-1">
          <p className="font-display text-xl">블랙홀 (오답노트)</p>
          <p className="text-sm text-dim">
            {progress.blackhole.length
              ? `빨려 들어간 문장 ${progress.blackhole.length}개가 구조를 기다리는 중…`
              : "아직 텅 비었어요. 틀린 문장이 여기로 빨려 들어와요."}
          </p>
        </div>
        <span className="text-dim">→</span>
      </Link>

      {studyTopics.length > 0 && (
        <Section title="📚 내 스터디 자료" desc="수업 피드백과 스터디에서 배운 것들">
          {studyTopics.map((t) => (
            <TopicCard key={t.id} topic={t} best={progress.topics[t.id]?.best} />
          ))}
        </Section>
      )}

      {levels.map((lv) => (
        <Section key={lv} title={LEVELS[lv].label} desc={LEVELS[lv].desc}>
          {grammarTopics
            .filter((t) => t.level === lv)
            .map((t) => (
              <TopicCard key={t.id} topic={t} best={progress.topics[t.id]?.best} />
            ))}
        </Section>
      ))}
    </div>
  );
}

function Section({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl">{title}</h2>
      <p className="text-sm text-dim">{desc}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </section>
  );
}

function TopicCard({ topic, best }: { topic: GrammarTopic; best?: number }) {
  const stars = best === undefined ? 0 : best >= 0.9 ? 3 : best >= 0.6 ? 2 : 1;
  return (
    <Link
      href={`/study/${topic.id}`}
      className="glass group flex flex-col rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-star/60"
    >
      <div className="flex items-start justify-between">
        <span className="text-3xl transition group-hover:scale-110">{topic.emoji}</span>
        <span className="text-sm tracking-widest" title={best !== undefined ? `최고 ${Math.round(best * 100)}%` : "아직 안 함"}>
          {[0, 1, 2].map((i) => (
            <span key={i} className={i < stars ? "text-star" : "text-white/15"}>
              ★
            </span>
          ))}
        </span>
      </div>
      <p className="font-display mt-2 text-lg">{topic.title}</p>
      <p className="text-xs text-dim">{topic.titleEn}</p>
      <p className="mt-2 text-sm text-milk/80">{topic.summary}</p>
    </Link>
  );
}

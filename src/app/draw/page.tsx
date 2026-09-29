"use client";

import Link from "next/link";
import ConstellationView from "@/components/ConstellationView";
import { chapters, constellations, titleFor } from "@/data/constellations";
import { dailySentences } from "@/data/daily";
import { useProgress } from "@/lib/progress";

export default function DrawPage() {
  const { progress } = useProgress();
  const done = new Set(progress.constellations);
  const doneCount = constellations.filter((c) => done.has(c.id)).length;
  const { title, next } = titleFor(doneCount);
  const dailyIds = new Set(dailySentences.map((s) => s.id));
  const cleared = progress.cleared.filter((id) => dailyIds.has(id)).length;
  const allDone = doneCount === constellations.length;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-display text-4xl text-star">영어 해보자</h1>
        <p className="text-sm text-dim">Draw a star ✨ 실생활 문장으로 별자리 그리기</p>
      </div>

      {/* 내 기록 */}
      <div className="glass mx-auto mt-6 grid max-w-2xl grid-cols-3 gap-2 rounded-3xl p-4 text-center">
        <div>
          <p className="text-xs text-dim">칭호</p>
          <p className="font-display mt-1 text-base sm:text-lg">{title}</p>
          {next !== undefined && <p className="text-[11px] text-dim">다음 칭호까지 별자리 {next - doneCount}개</p>}
        </div>
        <div>
          <p className="text-xs text-dim">별자리</p>
          <p className="font-display mt-1 text-2xl text-star">
            {doneCount}
            <span className="text-sm text-dim"> / {constellations.length}</span>
          </p>
        </div>
        <div>
          <p className="text-xs text-dim">정복한 문장</p>
          <p className="font-display mt-1 text-2xl" style={{ color: "var(--sky)" }}>
            {cleared}
            <span className="text-sm text-dim"> / {dailySentences.length}</span>
          </p>
        </div>
      </div>

      {/* 나의 밤하늘: 완성한 별자리가 한 하늘에 모인다 */}
      {doneCount > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-2xl">🌌 나의 밤하늘</h2>
          <p className="text-sm text-dim">완성한 별자리가 여기에 하나씩 떠올라요</p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-2 gap-y-1 rounded-3xl border border-card-border bg-surface-deep/60 p-4">
            {constellations
              .filter((c) => done.has(c.id))
              .map((c) => (
                <div key={c.id} className="flex flex-col items-center" title={c.name}>
                  <ConstellationView constellation={c} size={90} allLit />
                  <span className="text-[11px] text-dim">{c.name}</span>
                </div>
              ))}
          </div>
        </section>
      )}

      {chapters.map((ch) => {
        const list = constellations.filter((c) => c.chapter === ch.id);
        const firstIdx = constellations.indexOf(list[0]);
        const chapterOpen = firstIdx === 0 || done.has(constellations[firstIdx - 1].id);
        const chDone = list.filter((c) => done.has(c.id)).length;
        return (
          <section key={ch.id} className="mt-12">
            <div className="flex items-end justify-between gap-2">
              <div>
                <h2 className="font-display text-2xl">
                  {chapterOpen ? "🌌" : "🔒"} {ch.name}{" "}
                  <span className="text-base text-dim">{ch.nameEn}</span>
                </h2>
                <p className="text-sm text-dim">{ch.desc}</p>
              </div>
              <span className="shrink-0 text-sm text-star">
                {chDone} / {list.length}
              </span>
            </div>

            {chapterOpen ? (
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((c) => {
                  const i = constellations.indexOf(c);
                  const completed = done.has(c.id);
                  const unlocked = i === 0 || done.has(constellations[i - 1].id) || completed;
                  const card = (
                    <>
                      <div className="flex justify-center">
                        <div className={unlocked ? "" : "opacity-30 blur-[1px]"}>
                          <ConstellationView constellation={c} size={150} allLit={completed} />
                        </div>
                      </div>
                      <p className="font-display mt-2 text-xl">
                        {unlocked ? c.name : "???"} {completed && <span className="text-star">★</span>}
                      </p>
                      <p className="text-xs text-dim">
                        {unlocked ? `${c.nameEn} · 별 ${c.points.length}개` : "앞 별자리를 완성하면 열려요 🔒"}
                      </p>
                      {completed && <p className="mt-2 text-sm text-milk/80">{c.story}</p>}
                    </>
                  );
                  return unlocked ? (
                    <Link
                      key={c.id}
                      href={`/draw/${c.id}`}
                      className="glass rounded-3xl p-5 text-center transition hover:-translate-y-0.5 hover:border-star/60"
                    >
                      {card}
                    </Link>
                  ) : (
                    <div key={c.id} className="glass rounded-3xl p-5 text-center">
                      {card}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="glass mt-4 rounded-3xl p-8 text-center text-dim">
                앞 은하의 별자리 {list.length}개를 모두 그리면 열려요. 무엇이 기다리고 있을까…? 🛸
              </div>
            )}
          </section>
        );
      })}

      {/* 모든 은하 완성 후 */}
      <section className="glass mt-12 rounded-3xl p-6 text-center">
        {allDone ? (
          <>
            <p className="font-display text-2xl text-star">두 은하를 전부 그렸다…! 진짜 우주 대스타 🌟</p>
            <p className="mt-1 text-sm text-dim">
              새 문장이 추가되면 다음 은하가 열려요. 그동안은 어떤 별자리든 새 문장으로 다시 그릴 수 있어요!
            </p>
          </>
        ) : (
          <>
            <p className="font-display text-xl">🔭 저 너머엔…</p>
            <p className="mt-1 text-sm text-dim">
              은하수 → 안드로메다 → ??? 은하를 하나 다 그릴 때마다 새 은하와 칭호가 열려요.
            </p>
          </>
        )}
      </section>
    </div>
  );
}

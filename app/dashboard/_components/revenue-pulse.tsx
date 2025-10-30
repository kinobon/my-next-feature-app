import { wait } from "@/lib/wait";

const DATA_POINTS = [
  38, 42, 48, 52, 60, 66, 58, 72, 80, 94, 88, 102,
];

export function RevenuePulseSkeleton() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="h-6 w-40 animate-pulse rounded-full bg-white/10" />
      <div className="mt-6 h-48 w-full animate-pulse rounded-2xl bg-white/10" />
    </section>
  );
}

export async function RevenuePulse() {
  await wait(1200);

  const max = Math.max(...DATA_POINTS);

  return (
    <section className="flex flex-1 flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">収益パルス</h2>
          <p className="text-sm text-slate-300">ローリング 12 週間の MRR 変動</p>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-200/80">
          オートリフレッシュ: 5m
        </span>
      </header>

      <div className="relative h-48 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-transparent to-transparent">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:40px_100%]" aria-hidden />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:100%_32px] opacity-50" aria-hidden />

        <div className="relative flex h-full items-end gap-2 px-3">
          {DATA_POINTS.map((value, index) => {
            const height = Math.round((value / max) * 100);
            const delay = 100 + index * 40;

            return (
              <div
                key={index}
                className="relative flex-1"
                style={{ minWidth: "20px" }}
              >
                <div
                  className="animate-[grow_0.6s_ease-out_forwards] origin-bottom rounded-full bg-gradient-to-t from-cyan-400/20 via-cyan-300/60 to-cyan-200"
                  style={{
                    height: `${height}%`,
                    animationDelay: `${delay}ms`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="平均 MRR" value="¥8,320,000" delta="前週 +5.1%" />
        <Stat label="拡張売上" value="¥1,280,000" delta="前日 +12.4%" />
        <Stat label="キャンセル" value="¥380,000" delta="前週 -3.7%" />
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
        {label}
      </p>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
      <p className="text-xs text-cyan-200/80">{delta}</p>
    </div>
  );
}

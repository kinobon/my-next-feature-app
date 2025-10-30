import { wait } from "@/lib/wait";

export type MetricConfig = {
  id: string;
  title: string;
  value: string;
  delta: string;
  badge: string;
  delay: number;
  accent: string;
  trend: "up" | "down" | "flat";
};

export const METRIC_CONFIGS: MetricConfig[] = [
  {
    id: "mrr",
    title: "MRR",
    value: "¥12,480,000",
    delta: "+6.8%",
    badge: "vs 前月",
    delay: 600,
    accent: "from-cyan-400/80 via-sky-400/60 to-blue-500/70",
    trend: "up",
  },
  {
    id: "churn",
    title: "チャーン率",
    value: "1.9%",
    delta: "-0.4pt",
    badge: "改善傾向",
    delay: 1100,
    accent: "from-emerald-400/70 via-teal-400/70 to-emerald-500/70",
    trend: "down",
  },
  {
    id: "nps",
    title: "NPS",
    value: "54",
    delta: "+8",
    badge: "直近 30 日",
    delay: 1500,
    accent: "from-fuchsia-400/80 via-violet-500/70 to-indigo-500/70",
    trend: "up",
  },
  {
    id: "deploys",
    title: "本番デプロイ",
    value: "37",
    delta: "+12",
    badge: "今週",
    delay: 1900,
    accent: "from-amber-300/80 via-orange-400/60 to-amber-500/70",
    trend: "flat",
  },
];

export function MetricSkeleton({ title }: { title: string }) {
  return (
    <article className="animate-pulse rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{title}</span>
        <span className="inline-flex h-5 w-14 rounded-full bg-white/10" />
      </div>
      <div className="mt-6 h-9 w-32 rounded-2xl bg-white/15" />
      <div className="mt-4 h-4 w-24 rounded-full bg-white/10" />
    </article>
  );
}

export async function MetricCard({ config }: { config: MetricConfig }) {
  await wait(config.delay);

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40">
      <div
        className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${config.accent} opacity-50 blur-3xl transition group-hover:opacity-80`}
        aria-hidden
      />
      <div className="relative flex items-center justify-between text-xs font-semibold text-slate-300">
        <span>{config.title}</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          {config.badge}
        </span>
      </div>
      <p className="relative mt-6 text-3xl font-semibold tracking-tight text-white">
        {config.value}
      </p>
      <div className="relative mt-4 flex items-center gap-2 text-sm text-slate-300">
        <TrendPill trend={config.trend} delta={config.delta} />
        <span>今朝 06:00 に更新</span>
      </div>
    </article>
  );
}

function TrendPill({
  trend,
  delta,
}: {
  trend: "up" | "down" | "flat";
  delta: string;
}) {
  const base =
    "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold";

  if (trend === "up") {
    return (
      <span className={`${base} bg-emerald-400/10 text-emerald-200`}>
        <span aria-hidden>▲</span>
        {delta}
      </span>
    );
  }

  if (trend === "down") {
    return (
      <span className={`${base} bg-rose-400/10 text-rose-200`}>
        <span aria-hidden>▼</span>
        {delta}
      </span>
    );
  }

  return (
    <span className={`${base} bg-white/10 text-slate-200`}>
      <span aria-hidden>▬</span>
      {delta}
    </span>
  );
}

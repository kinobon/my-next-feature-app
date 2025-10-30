import { wait } from "@/lib/wait";

type Status = {
  id: string;
  name: string;
  description: string;
  status: "正常" | "警告" | "計画停止";
  latency: string;
  delay: number;
};

const STATUS_ITEMS: Status[] = [
  {
    id: "api",
    name: "パブリック API",
    description: "GraphQL / REST エンドポイント",
    status: "正常",
    latency: "142 ms",
    delay: 1300,
  },
  {
    id: "ingest",
    name: "データ取込",
    description: "イベントストリーム (Kafka)",
    status: "警告",
    latency: "+28%",
    delay: 1800,
  },
  {
    id: "cron",
    name: "バッチジョブ",
    description: "ETL / バックフィル",
    status: "正常",
    latency: "12 min",
    delay: 2200,
  },
  {
    id: "deploy",
    name: "デプロイパイプライン",
    description: "CI/CD",
    status: "計画停止",
    latency: "22:00 - 23:30",
    delay: 2600,
  },
];

export function InfrastructureStatusSkeleton() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="h-6 w-56 animate-pulse rounded-full bg-white/10" />
      <div className="mt-6 space-y-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <div className="space-y-2">
              <div className="h-4 w-40 animate-pulse rounded-full bg-white/10" />
              <div className="h-3 w-48 animate-pulse rounded-full bg-white/5" />
            </div>
            <div className="h-6 w-20 animate-pulse rounded-full bg-white/10" />
          </div>
        ))}
      </div>
    </section>
  );
}

export async function InfrastructureStatus() {
  await wait(2000);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">インフラストラクチャ状況</h2>
          <p className="text-sm text-slate-300">ストリーミング監視と計画停止情報</p>
        </div>
        <span className="text-xs font-semibold text-cyan-200/80">Live</span>
      </header>

      <div className="mt-6 space-y-3">
        {STATUS_ITEMS.map((item) => (
          <article
            key={item.id}
            className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent p-4 transition hover:border-white/40"
          >
            <div>
              <p className="text-sm font-semibold text-white">{item.name}</p>
              <p className="text-xs text-slate-300">{item.description}</p>
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold text-white">
              <StatusBadge kind={item.status} />
              <span className="rounded-full bg-white/10 px-3 py-1 text-slate-200/80">
                {item.latency}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function StatusBadge({ kind }: { kind: Status["status"] }) {
  if (kind === "正常") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-200">
        <span className="h-2 w-2 rounded-full bg-emerald-300" /> 正常
      </span>
    );
  }

  if (kind === "警告") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-3 py-1 text-amber-200">
        <span className="h-2 w-2 rounded-full bg-amber-300" /> 警告
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-rose-400/10 px-3 py-1 text-rose-200">
      <span className="h-2 w-2 rounded-full bg-rose-300" /> 計画停止
    </span>
  );
}

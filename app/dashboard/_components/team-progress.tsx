import { wait } from "@/lib/wait";

type Initiative = {
  id: string;
  name: string;
  owner: string;
  progress: number;
  eta: string;
  status: "順調" | "リスク" | "要レビュー";
  delay: number;
};

const INITIATIVES: Initiative[] = [
  {
    id: "mobile",
    name: "モバイルアプリ刷新",
    owner: "田中",
    progress: 78,
    eta: "残り 2 週間",
    status: "順調",
    delay: 900,
  },
  {
    id: "billing",
    name: "Usage ベース課金",
    owner: "佐々木",
    progress: 42,
    eta: "残り 5 週間",
    status: "要レビュー",
    delay: 1400,
  },
  {
    id: "ml",
    name: "レコメンド AI",
    owner: "王",
    progress: 63,
    eta: "残り 3 週間",
    status: "順調",
    delay: 1800,
  },
  {
    id: "csr",
    name: "サクセスオンボーディング",
    owner: "山本",
    progress: 35,
    eta: "残り 6 週間",
    status: "リスク",
    delay: 2100,
  },
];

export function TeamProgressSkeleton() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="h-6 w-44 animate-pulse rounded-full bg-white/10" />
      <div className="mt-6 space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-3">
            <div className="h-4 w-64 animate-pulse rounded-full bg-white/10" />
            <div className="h-3 w-40 animate-pulse rounded-full bg-white/5" />
            <div className="h-2 w-full animate-pulse rounded-full bg-white/10" />
          </div>
        ))}
      </div>
    </section>
  );
}

export async function TeamProgress() {
  await wait(1500);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">主要イニシアチブ</h2>
          <p className="text-sm text-slate-300">チーム横断の進捗状況</p>
        </div>
        <button
          type="button"
          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-fuchsia-200/60 hover:bg-fuchsia-400/20"
        >
          スタンドアップメモ
        </button>
      </header>

      <div className="mt-6 space-y-5">
        {INITIATIVES.map((item) => (
          <article key={item.id} className="space-y-3">
            <div className="flex items-center justify-between text-sm text-white">
              <div className="flex flex-col">
                <span className="font-semibold">{item.name}</span>
                <span className="text-xs text-slate-400">Owner: {item.owner}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <StatusPill status={item.status} />
                <span>{item.eta}</span>
              </div>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-blue-500"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: Initiative["status"] }) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold";

  if (status === "順調") {
    return (
      <span className={`${base} bg-emerald-400/10 text-emerald-200`}>
        <span aria-hidden>✅</span>
        順調
      </span>
    );
  }

  if (status === "リスク") {
    return (
      <span className={`${base} bg-amber-400/10 text-amber-200`}>
        <span aria-hidden>⚠️</span>
        リスク
      </span>
    );
  }

  return (
    <span className={`${base} bg-rose-400/10 text-rose-200`}>
      <span aria-hidden>🛠</span>
      要レビュー
    </span>
  );
}

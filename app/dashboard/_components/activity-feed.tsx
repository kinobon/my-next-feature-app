import { wait } from "@/lib/wait";

type Activity = {
  id: string;
  title: string;
  actor: string;
  time: string;
  summary: string;
  avatar: string;
};

const ACTIVITIES: Activity[] = [
  {
    id: "1",
    title: "契約書の締結",
    actor: "三浦 里奈",
    time: "09:42",
    summary: "Enterprise プラン / SCS 株式会社",
    avatar: "MR",
  },
  {
    id: "2",
    title: "障害インシデント #4825 終了",
    actor: "Site Reliability",
    time: "08:55",
    summary: "影響: API レイテンシ。回復時間 14 分",
    avatar: "SR",
  },
  {
    id: "3",
    title: "請求書 #1053 発行",
    actor: "Billing Bot",
    time: "08:12",
    summary: "月次請求 780,000 JPY / 40 シート",
    avatar: "BB",
  },
  {
    id: "4",
    title: "プロジェクト Orion フェーズ 2 完了",
    actor: "プロダクトチーム",
    time: "07:48",
    summary: "QA カバレッジ 94% を達成",
    avatar: "PT",
  },
];

export function ActivityFeedSkeleton() {
  return (
    <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="h-6 w-48 animate-pulse rounded-full bg-white/10" />
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <div className="h-10 w-10 animate-pulse rounded-full bg-white/10" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-32 animate-pulse rounded-full bg-white/10" />
              <div className="h-3 w-48 animate-pulse rounded-full bg-white/5" />
              <div className="h-3 w-40 animate-pulse rounded-full bg-white/5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export async function ActivityFeed() {
  await wait(2600);

  return (
    <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">チームの最新アクティビティ</h2>
          <p className="text-sm text-slate-300">過去 12 時間の更新を表示しています。</p>
        </div>
        <button
          type="button"
          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-cyan-200/60 hover:bg-cyan-300/20"
        >
          すべて表示
        </button>
      </header>

      <div className="space-y-3">
        {ACTIVITIES.map((activity) => (
          <article
            key={activity.id}
            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/20 p-4"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
              {activity.avatar}
            </span>
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-white">
                {activity.title}
                <span className="text-xs font-medium text-cyan-200/80">
                  {activity.actor}
                </span>
              </div>
              <p className="text-sm text-slate-300">{activity.summary}</p>
            </div>
            <time className="text-xs font-medium text-slate-400">
              {activity.time}
            </time>
          </article>
        ))}
      </div>
    </section>
  );
}

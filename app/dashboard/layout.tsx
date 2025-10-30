import Link from "next/link";

const primaryNav = [
  { name: "ダッシュボード", href: "/dashboard", active: true, icon: "📊" },
  { name: "分析", href: "/dashboard/analytics", active: false, icon: "📈" },
  { name: "顧客管理", href: "/dashboard/customers", active: false, icon: "👥" },
  { name: "プロジェクト", href: "/dashboard/projects", active: false, icon: "🗂" },
  { name: "レポート", href: "/dashboard/reports", active: false, icon: "🧾" },
  { name: "システム設定", href: "/dashboard/settings", active: false, icon: "⚙" },
];

const quickActions = [
  {
    title: "レポート生成",
    description: "PDF / CSV でエクスポート",
  },
  {
    title: "ワークフロー作成",
    description: "自動化ルールを追加",
  },
  {
    title: "アラート設定",
    description: "閾値とチャンネルを編集",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(236,72,153,0.16),transparent_60%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.12),transparent_60%)]" />

      <div className="relative z-10 flex min-h-screen">
        <aside className="hidden w-72 flex-col justify-between border-r border-white/10 bg-slate-950/80 px-6 py-8 backdrop-blur xl:flex">
          <div className="space-y-8">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 text-lg font-semibold text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/20 text-xl">
                AC
              </span>
              Aurora Control
            </Link>

            <nav className="space-y-1">
              {primaryNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-white/10 ${
                    item.active
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span aria-hidden="true" className="text-lg">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                  {!item.active && (
                    <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-200/70">
                      Soon
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-4">
              <span className="text-xs uppercase tracking-wide text-slate-300/70">
                今日のハイライト
              </span>
              <p className="mt-2 text-sm font-medium text-white">
                重要な KPI を 1 箇所で確認できます。
              </p>
              <p className="mt-1 text-xs text-slate-300">
                プロアクティブな意思決定を支える最新データが 1 時間毎に同期されます。
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              クイックアクション
            </h3>
            <div className="space-y-2">
              {quickActions.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
                >
                  <p className="font-semibold text-slate-50">{item.title}</p>
                  <p className="text-[11px] text-slate-300">{item.description}</p>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">
                  Aurora Control Center
                </p>
                <h1 className="mt-1 text-2xl font-semibold text-white">
                  今日の運用状況レポート
                </h1>
              </div>

              <div className="flex flex-1 flex-col gap-3 lg:flex-row lg:items-center lg:justify-end">
                <label className="relative flex w-full max-w-xs items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 focus-within:border-cyan-300/60 focus-within:outline-0">
                  <span aria-hidden className="text-lg">🔍</span>
                  <input
                    type="search"
                    placeholder="グローバル検索"
                    className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none"
                  />
                </label>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-400/20"
                  >
                    新規作成
                  </button>
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-medium text-white"
                  >
                    HK
                  </button>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 space-y-6 px-4 py-8 lg:px-8 lg:py-10">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

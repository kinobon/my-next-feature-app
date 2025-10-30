interface SectionPageProps {
  params: {
    section: string;
  };
}

const LABELS: Record<string, string> = {
  analytics: "分析",
  customers: "顧客管理",
  projects: "プロジェクト",
  reports: "レポート",
  settings: "システム設定",
};

export default function SectionPage({ params }: SectionPageProps) {
  const { section } = params;
  const label = LABELS[section] ?? section;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-3xl border border-white/15 bg-white/5 p-12 text-center">
      <span className="rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
        Coming Soon
      </span>
      <h2 className="mt-6 text-3xl font-semibold text-white">{label}</h2>
      <p className="mt-4 max-w-xl text-sm text-slate-300">
        このモジュールは Next.js 16 のルーティング機能を示すためのプレースホルダーです。必要に応じて新しいページセグメントを追加してください。
      </p>
    </div>
  );
}

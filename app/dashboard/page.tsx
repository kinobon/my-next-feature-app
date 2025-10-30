import { Suspense } from "react";

import {
  METRIC_CONFIGS,
  MetricCard,
  MetricSkeleton,
} from "./_components/metric-card";
import {
  RevenuePulse,
  RevenuePulseSkeleton,
} from "./_components/revenue-pulse";
import {
  TeamProgress,
  TeamProgressSkeleton,
} from "./_components/team-progress";
import {
  ActivityFeed,
  ActivityFeedSkeleton,
} from "./_components/activity-feed";
import {
  InfrastructureStatus,
  InfrastructureStatusSkeleton,
} from "./_components/infrastructure-status";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
              Executive Summary
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              オペレーションスナップショット
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Next.js 16 の Partial Prerendering と Suspense を活用し、各パネルを独立したストリームでレンダリングします。
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 font-semibold text-emerald-200">
              PPR Active
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-slate-200/80">
              最終同期: 2 分前
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {METRIC_CONFIGS.map((metric) => (
            <Suspense key={metric.id} fallback={<MetricSkeleton title={metric.title} />}>
              <MetricCard config={metric} />
            </Suspense>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <Suspense fallback={<RevenuePulseSkeleton />}>
          <RevenuePulse />
        </Suspense>
        <Suspense fallback={<TeamProgressSkeleton />}>
          <TeamProgress />
        </Suspense>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <Suspense fallback={<ActivityFeedSkeleton />}>
          <ActivityFeed />
        </Suspense>
        <Suspense fallback={<InfrastructureStatusSkeleton />}>
          <InfrastructureStatus />
        </Suspense>
      </section>
    </div>
  );
}

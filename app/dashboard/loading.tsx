export default function Loading() {
  return (
    <div className="space-y-8">
      <div className="h-10 w-64 animate-pulse rounded-full bg-white/10" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-36 animate-pulse rounded-3xl border border-white/10 bg-white/5"
          />
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <div className="h-72 animate-pulse rounded-3xl border border-white/10 bg-white/5" />
        <div className="h-72 animate-pulse rounded-3xl border border-white/10 bg-white/5" />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <div className="h-80 animate-pulse rounded-3xl border border-white/10 bg-white/5" />
        <div className="h-80 animate-pulse rounded-3xl border border-white/10 bg-white/5" />
      </div>
    </div>
  );
}

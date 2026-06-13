export default function PredictorForm() {
  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
          Weather Condition
        </label>
        <select className="w-full appearance-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none">
          <option>Overcast</option>
          <option>Heavy Rain</option>
          <option>Snow</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
            Temp (°F)
          </label>
          <input
            type="number"
            placeholder="20.0"
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
            Visibility (mi)
          </label>
          <input
            type="number"
            placeholder="0.1"
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
        <span className="text-sm font-medium text-zinc-300">
          Traffic Signal Presence
        </span>
        <button
          type="button"
          className="relative h-6 w-11 rounded-full bg-emerald-500 transition-colors focus:outline-none"
        >
          <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-white transition-transform"></span>
        </button>
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded-xl bg-emerald-500 py-3.5 text-sm font-bold tracking-wide text-zinc-950 uppercase transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
      >
        Execute Prediction
      </button>
    </form>
  );
}

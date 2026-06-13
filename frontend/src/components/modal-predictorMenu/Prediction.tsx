export default function Prediction() {
  return (
    <div className="relative mt-6 overflow-hidden rounded-xl border border-rose-500/30 bg-zinc-950 p-5">
      <div className="absolute top-0 left-0 h-full w-1 bg-rose-500"></div>
      <h3 className="mb-1 text-[10px] font-bold tracking-widest text-rose-500 uppercase">
        Impact Level Detected
      </h3>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-black text-white">Severity 3</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div className="flex justify-between text-zinc-400">
          <span>Sev 2:</span> <span className="text-zinc-200">36.0%</span>
        </div>
        <div className="flex justify-between text-zinc-400">
          <span>Sev 3:</span>{" "}
          <span className="font-bold text-rose-400">48.0%</span>
        </div>
      </div>
    </div>
  );
}

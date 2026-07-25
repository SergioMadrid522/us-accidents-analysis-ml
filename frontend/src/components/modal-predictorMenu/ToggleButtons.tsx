import { useState } from "react";

export default function ToggleButtons() {
  const [trafficSignal, setTrafficSignal] = useState(false);
  const [isDay, setIsDay] = useState(true);
  const [junction, setJunction] = useState(true);

  return (
    <>
      <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
        <span className="text-sm font-medium text-zinc-300">
          Traffic Signal Presence
        </span>
        <button
          type="button"
          onClick={() => setTrafficSignal(!trafficSignal)}
          className={`
            cursor-pointer relative h-6 w-11 rounded-full transition-colors focus:outline-none border
            ${trafficSignal ? "bg-emerald-500" : "border-white"}`}
        >
          <span
            className={`
            m-auto transition-all duration-300 ease-in-out
            ${
              trafficSignal
                ? "absolute top-1 translate-x-0 h-3.5 w-3.5 rounded-full bg-white transition-transform"
                : "absolute top-1 -translate-x-4 h-3.5 w-3.5 rounded-full bg-white transition-transform"
            }`}
          ></span>
        </button>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
        <span className="text-sm font-medium text-zinc-300">Is it day?</span>
        <button
          type="button"
          onClick={() => setIsDay(!isDay)}
          className={`
            cursor-pointer relative h-6 w-11 rounded-full transition-colors focus:outline-none border
            ${isDay ? "bg-emerald-500" : "border-white"}`}
        >
          <span
            className={`
            m-auto transition-all duration-300 ease-in-out
            ${
              isDay
                ? "absolute top-1 translate-x-0 h-3.5 w-3.5 rounded-full bg-white transition-transform"
                : "absolute top-1 -translate-x-4 h-3.5 w-3.5 rounded-full bg-white transition-transform"
            }`}
          ></span>
        </button>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
        <span className="text-sm font-medium text-zinc-300">
          Is there a junction?
        </span>
        <button
          type="button"
          onClick={() => setJunction(!junction)}
          className={`
            cursor-pointer relative h-6 w-11 rounded-full transition-colors focus:outline-none border
            ${junction ? "bg-emerald-500" : "border-white"}`}
        >
          <span
            className={`
            m-auto transition-all duration-300 ease-in-out
            ${
              junction
                ? "absolute top-1 translate-x-0 h-3.5 w-3.5 rounded-full bg-white transition-transform"
                : "absolute top-1 -translate-x-4 h-3.5 w-3.5 rounded-full bg-white transition-transform"
            }`}
          ></span>
        </button>
      </div>
    </>
  );
}

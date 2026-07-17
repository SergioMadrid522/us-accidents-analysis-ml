import type { StatePanelProps } from "../../types";
import StateDetails from "./StateDetails";

export default function StatePanel({ stateName, stateCode }: StatePanelProps) {
  return (
    <aside className="absolute z-[999] top-6 bottom-6 left-6 flex w-[400px] h-fit flex-col overflow-hidden rounded-3xl border border-zinc-700/50 bg-zinc-900/80 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md">
      <header className="border-b border-zinc-800 bg-zinc-900/50 px-6 py-5">
        <h1 className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
          {stateName === "" ? "Select a state" : `${stateName} (${stateCode})`}
        </h1>
        {stateName && (
          <>
            <p className="mt-1 text-xs tracking-wider text-zinc-400 uppercase">
              Info Details
            </p>
            <div className="custom-scrollbar flex-1 overflow-y-auto p-6 z-40">
              <StateDetails stateCode={stateCode} />
            </div>
          </>
        )}
      </header>
    </aside>
  );
}

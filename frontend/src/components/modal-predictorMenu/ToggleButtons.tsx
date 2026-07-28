import { Controller } from "react-hook-form";
import type { ToggleButtonProps, ToggleProps } from "../../types";

export default function ToggleButtons({ control }: ToggleButtonProps) {
  return (
    <>
      <Toggle
        control={control}
        name={"isTrafficSignal"}
        label={"Traffic Signal Presence"}
      />

      <Toggle control={control} name={"isDay"} label={"Is it day?"} />

      <Toggle
        control={control}
        name={"isJunction"}
        label={"Is there a junction?"}
      />
    </>
  );
}

export function Toggle({ name, label, control }: ToggleProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
          <span className="text-sm font-medium text-zinc-300">{label}</span>

          <button
            type="button"
            onClick={() => field.onChange(!field.value)}
            className={`
            cursor-pointer relative h-6 w-11 rounded-full transition-colors focus:outline-none border
            ${field.value ? "bg-emerald-500" : "border-white"}`}
          >
            <span
              className={`
                m-auto transition-all duration-300 ease-in-out
                ${
                  field.value
                    ? "absolute top-1 translate-x-0 h-3.5 w-3.5 rounded-full bg-white transition-transform"
                    : "absolute top-1 -translate-x-4 h-3.5 w-3.5 rounded-full bg-white transition-transform"
                }`}
            ></span>
          </button>
        </div>
      )}
    />
  );
}

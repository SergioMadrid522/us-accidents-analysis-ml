import { months, weatherConditions } from "../../data";
import type { PredictorFormProps } from "../../types";
import MakePrediction from "./MakePrediction";
import ToggleButtons from "./ToggleButtons";

export default function PredictorForm({
  register,
  handleSubmit,
  control,
  submit,
  isSubmitting,
}: PredictorFormProps) {
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
          Weather Condition
        </label>
        <select
          className="cursor-pointer w-full appearance-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none"
          {...register("weatherCondition")}
        >
          <option value="">Select an option</option>
          {weatherConditions.map((weather, idx) => (
            <option value={weather} key={idx}>
              {weather}
            </option>
          ))}
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
            step="any"
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none"
            {...register("temperature", { valueAsNumber: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
            Humidity (%)
          </label>
          <input
            type="number"
            placeholder="55.5"
            step="any"
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none"
            {...register("humidity", { valueAsNumber: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
            Visibility (mi)
          </label>
          <input
            type="number"
            placeholder="5.8"
            step="any"
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none"
            {...register("visibility", { valueAsNumber: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
            Wind Speed (mph)
          </label>
          <input
            type="number"
            placeholder="12.7"
            step="any"
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none"
            {...register("windSpeed", { valueAsNumber: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
            Precipitation (in)
          </label>
          <input
            type="number"
            placeholder="1.9"
            step="any"
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none"
            {...register("precipitation", { valueAsNumber: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
            Month
          </label>
          <select
            className="cursor-pointer w-full appearance-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none"
            {...register("month", { valueAsNumber: true })}
          >
            <option value="">Select an option</option>
            {months.map(({ id, label }) => (
              <option value={id} key={id}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ToggleButtons control={control} />

      <MakePrediction isSubmitting={isSubmitting} />
    </form>
  );
}

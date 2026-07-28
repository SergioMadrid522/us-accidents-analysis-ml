export default function MakePrediction({
  isSubmitting,
}: {
  isSubmitting: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`
        ${
          isSubmitting
            ? "bg-emerald-800 cursor-crosshair"
            : "bg-emerald-500 cursor-pointer hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        }
      "w-full rounded-xl py-3.5 text-sm font-bold tracking-wide text-zinc-950 uppercase transition-all"`}
    >
      {isSubmitting ? "Processing..." : "Make Prediction"}
    </button>
  );
}

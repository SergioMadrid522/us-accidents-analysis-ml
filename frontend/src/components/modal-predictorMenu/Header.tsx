export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-900/50 px-6 py-5">
      <h1 className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
        Risk Simulator
      </h1>
      <p className="mt-1 text-xs tracking-wider text-zinc-400 uppercase">
        Machine Learning Predictor
      </p>
    </header>
  );
}

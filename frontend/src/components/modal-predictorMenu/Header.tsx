import { GLOBAL } from "../../icons.data";
import { MoreInfoAlert } from "../../utils/alerts";

export default function Header() {
  const { information: MoreInfoIcon } = GLOBAL;

  return (
    <header className="border-b border-zinc-800 bg-zinc-900/50 px-6 py-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
            Risk Simulator
          </h1>
          <p className="mt-1 text-xs tracking-wider text-zinc-400 uppercase">
            Machine Learning Predictor
          </p>
        </div>
        <div className="">
          <button
            type="button"
            className="cursor-pointer"
            onClick={MoreInfoAlert}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="white"
              viewBox="0 0 16 16"
            >
              <MoreInfoIcon />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

import type { ModalPredictorMenuProps } from "../../types";
import Header from "./Header";
import Prediction from "./Prediction";
import PredictorForm from "./PredictorForm";

export default function ModalPredictorMenu({
  openMenu,
}: ModalPredictorMenuProps) {
  return (
    <aside
      className={`
        absolute z-[999] top-6 bottom-6 left-6 
        flex w-[400px] h-fit flex-col overflow-hidden
        border rounded-3xl border-zinc-700/50
        bg-zinc-900/80 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md
        transition-all duration-300 ease
        select-none
         ${openMenu ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-100 pointer-events-none"}`}
    >
      <Header />

      <div className="custom-scrollbar flex-1 overflow-y-auto p-6 z-40">
        <PredictorForm />

        <Prediction />
      </div>
    </aside>
  );
}

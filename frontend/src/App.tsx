import "./App.css";
import "leaflet/dist/leaflet.css";
import "./MapContainer.css";
import StatePanel from "./components/stateDetailsPanel/StatePanel";
import ModalPredictorMenu from "./components/modal-predictorMenu/ModalPredictorMenu";
import { useSetMapData } from "./hooks/useSetMapData";
import RenderMap from "./components/render-map/RenderMap";
import { Toaster } from "react-hot-toast";

export default function App() {
  const {
    mapData,
    stateName,
    stateCode,
    simpleStyle,
    openPredictorMenu,
    setOpenPredictorMenu,
    onEachState,
  } = useSetMapData();

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <main className="relative">
        <RenderMap
          mapData={mapData}
          simpleStyle={simpleStyle}
          onEachState={onEachState}
        />

        {!openPredictorMenu && (
          <StatePanel stateName={stateName} stateCode={stateCode} />
        )}

        <button
          type="button"
          className="
          absolute z-[999] top-2 right-20 
          flex items-center w-fit p-3
          cursor-pointer
          border rounded-lg border-zinc-700/50 bg-zinc-900/80 
          shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md
          text-sm font-bold tracking-tight text-white 
          hover:border-zinc-700/30 hover:bg-zinc-900/60 
          transition-all duration-100"
          onClick={() => setOpenPredictorMenu(!openPredictorMenu)}
        >
          Make a Prediction
        </button>

        <ModalPredictorMenu openMenu={openPredictorMenu} />
      </main>
    </>
  );
}

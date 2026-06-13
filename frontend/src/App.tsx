import type { FeatureCollection } from "geojson";
import { useState } from "react";
import { MapContainer, GeoJSON, ZoomControl } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import "./MapContainer.css";
import usaStateData from "./us-states.json";
import LayerControls from "./components/layer-controls/LayerControls";
import StatePanel from "./components/stateDetailsPanel/StatePanel";
import ModalPredictorMenu from "./components/modal-predictorMenu/ModalPredictorMenu";

export default function App() {
  const mapData = usaStateData as FeatureCollection;
  const [stateName, setSateName] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [openPredictorMenu, setOpenPredictorMenu] = useState(false);

  const simpleStyle = {
    color: "#000",
    weight: 1.5,
    opacity: 1,
    fillColor: "#EDEBEB",
    fillOpacity: 0.25,
    dashArray: "1, 5",
  };

  const mouseRelease = (event) => {
    event.target.setStyle({
      color: "#000",
      weight: 1.5,
      opacity: 1,
      fillColor: "#EDEBEB",
      fillOpacity: 0.25,
      dashArray: "1, 5",
    });
  };

  const changeStateColor = (event) => {
    event.target.setStyle({
      fillColor: "#4285F4",
      fillOpacity: 0.25,
      dashArray: "1, 5",
      textColor: "#4285f4",
    });
  };

  const onEachState = (feature, layer) => {
    const stateName = feature.properties.name;

    layer.on({
      mouseover: (event) => changeStateColor(event),
      mouseout: mouseRelease,
    });

    layer.on("add", () => {
      const map = layer._map;
      if (!map) return;

      const updateToolTip = () => {
        const zoom = map.getZoom();

        if (zoom >= 6) {
          layer.bindTooltip(stateName, {
            permanent: true,
            direction: "center",
            className: "state-name-badge",
          });
        } else {
          layer.unbindTooltip();
        }
      };

      updateToolTip();
      map.on("zoomend", updateToolTip);

      layer.on("remove", () => {
        map.off("zoomend", updateToolTip);
      });
    });

    layer.on("click", (event) => {
      const map = layer._map;
      const stateName = layer.feature.properties.name;
      const stateCode = layer.feature.properties.stateCode;
      const bounds = layer.getBounds();

      setSateName(stateName);
      setStateCode(stateCode);

      map.flyToBounds(bounds, {
        padding: [50, 50],
        maxZoom: 15,
      });
    });
  };
  return (
    <main className="relative">
      <MapContainer
        center={[40, -105]}
        zoom={5}
        minZoom={5}
        zoomAnimation={true}
        zoomControl={false}
        className="w-full h-dvh"
      >
        <LayerControls />

        <GeoJSON
          key={JSON.stringify(mapData)}
          style={simpleStyle}
          data={mapData}
          onEachFeature={onEachState}
        />
        <ZoomControl position="bottomright" />
      </MapContainer>

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
  );
}

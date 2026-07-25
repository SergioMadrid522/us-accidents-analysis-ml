import type { FeatureCollection } from "geojson";
import usaStateData from "../us-states.json";
import { useState } from "react";

export function useSetMapData() {
  const mapData = usaStateData as FeatureCollection;
  const [stateName, setSateName] = useState<string>("");
  const [stateCode, setStateCode] = useState<string>("");
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

    layer.on("click", () => {
      const map = layer._map;
      const stateName: string = layer.feature.properties.name;
      const stateCode: string = layer.feature.properties.stateCode;
      const bounds = layer.getBounds();

      setSateName(stateName);
      setStateCode(stateCode);

      map.flyToBounds(bounds, {
        padding: [50, 50],
        maxZoom: 15,
      });
    });
  };

  return {
    mapData,
    stateName,
    stateCode,
    simpleStyle,
    openPredictorMenu,
    setOpenPredictorMenu,
    onEachState,
  };
}

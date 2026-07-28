import { MapContainer, GeoJSON, ZoomControl } from "react-leaflet";
import LayerControls from "../layer-controls/LayerControls";
import type { RenderMapsProps } from "../../types";

export default function RenderMap({
  mapData,
  simpleStyle,
  onEachState,
}: RenderMapsProps) {
  return (
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
  );
}

import { LayersControl, TileLayer } from "react-leaflet";

export default function LayerControls() {
  const { BaseLayer } = LayersControl;
  const mapsApiURL = import.meta.env.VITE_MAP_TILER_API_KEY;
  return (
    <LayersControl>
      <BaseLayer checked name="Street map">
        <TileLayer
          url={`https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${mapsApiURL}`}
        />
      </BaseLayer>
      <BaseLayer name="Base map">
        <TileLayer
          url={`https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=${mapsApiURL}`}
        />
      </BaseLayer>
      <BaseLayer name="Satellite hybrid map">
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles © Esri"
        />
      </BaseLayer>
    </LayersControl>
  );
}

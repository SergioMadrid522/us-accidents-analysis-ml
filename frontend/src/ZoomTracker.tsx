import { useMapEvents } from "react-leaflet";

export default function ZoomTracker({
  setZoom,
}: {
  setZoom: React.Dispatch<React.SetStateAction<number>>;
}) {
  useMapEvents({
    zoomend(e) {
      setZoom(e.target.getZoom());
    },
  });

  return null;
}

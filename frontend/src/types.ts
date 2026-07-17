import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";

export interface ModalPredictorMenuProps {
  openMenu: boolean;
}

export interface RenderMapsProps {
  mapData: FeatureCollection<Geometry, GeoJsonProperties>;
  simpleStyle: {
    color: string;
    weight: number;
    opacity: number;
    fillColor: string;
    fillOpacity: number;
    dashArray: string;
  };
  onEachState: (feature: any, layer: any) => void;
}

export interface StatePanelProps {
  stateName: string;
  stateCode: string;
}

export interface ResponseData {
  averageSeverity: number;
  commonWeather: string;
  highRiskZones: string[];
  totalAccidents: number;
}

import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import type { predictorSchema } from "./schemas/predictorSchema";
import { z } from "zod";
import type {
  Control,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export type PredictorSchema = z.infer<typeof predictorSchema>;

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

export type ToggleButtonProps = {
  control: Control<PredictorSchema>;
};

type Names =
  | "weatherCondition"
  | "temperature"
  | "humidity"
  | "visibility"
  | "windSpeed"
  | "precipitation"
  | "month"
  | "isTrafficSignal"
  | "isDay"
  | "isJunction";

export interface ToggleProps {
  name: Names;
  label: string;
  control: Control<PredictorSchema>;
}

export interface PredictorFormProps {
  register: UseFormRegister<PredictorSchema>;
  handleSubmit: UseFormHandleSubmit<PredictorSchema>;
  control: Control<PredictorSchema>;
  submit: (data: PredictorSchema) => Promise<void>;
  isSubmitting: boolean;
}
export interface PredictionResult {
  prediction?: string;
  risk_probabilities_percent?: {
    Severity_1: number;
    Severity_2: number;
    Severity_3: number;
    Severity_4: number;
  };
}

export interface FormattedJSON {
  weather_condition: string;
  temperature: number;
  humidity: number;
  visibility: number;
  wind_speed: number;
  precipitation: number;
  month: number;
  traffic_signal: number;
  is_day: number;
  junction: number;
}

export type risk_probabilities_percent =
  | {
      Severity_1: number;
      Severity_2: number;
      Severity_3: number;
      Severity_4: number;
    }
  | undefined;

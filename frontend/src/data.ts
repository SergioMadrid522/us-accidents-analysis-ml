import type { ResponseData } from "./types";

export const UILayer = (data: ResponseData) => [
  { idx: 1, label: "Total Accidents", value: data.totalAccidents },
  { idx: 2, label: "Average Severity", value: data.averageSeverity },
  { idx: 3, label: "Most Common Weather", value: data.commonWeather },
  { idx: 4, label: "High-Risk Zones", value: data.highRiskZones },
];

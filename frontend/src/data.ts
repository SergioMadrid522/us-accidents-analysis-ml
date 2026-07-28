import type { ResponseData } from "./types";

export const UILayer = (data: ResponseData) => [
  { idx: 1, label: "Total Accidents", value: data.totalAccidents },
  { idx: 2, label: "Average Severity", value: data.averageSeverity },
  { idx: 3, label: "Most Common Weather", value: data.commonWeather },
  { idx: 4, label: "High-Risk Zones", value: data.highRiskZones },
];

export const weatherConditions: string[] = [
  "Light Rain",
  "Overcast",
  "Mostly Cloudy",
  "Rain",
  "Light Snow",
  "Haze",
  "Scattered Clouds",
  "Partly Cloudy",
  "Clear",
  "Snow",
  "Light Freezing Drizzle",
  "Light Drizzle",
  "Fog",
  "Shallow Fog",
  "Heavy Rain",
  "Light Freezing Rain",
  "Cloudy",
  "Drizzle",
  "Light Rain Showers",
  "Mist",
];

export const months = [
  { id: 1, label: "January" },
  { id: 2, label: "February" },
  { id: 3, label: "March" },
  { id: 4, label: "April" },
  { id: 5, label: "May" },
  { id: 6, label: "June" },
  { id: 7, label: "July" },
  { id: 8, label: "August" },
  { id: 9, label: "September" },
  { id: 10, label: "October" },
  { id: 11, label: "November" },
  { id: 12, label: "December" },
];

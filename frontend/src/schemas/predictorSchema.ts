import { z } from "zod";

export const predictorSchema = z.object({
  weatherCondition: z.enum(
    [
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
    ],
    { error: "Select an valid weather." },
  ),
  temperature: z
    .number()
    .min(1, {
      message: "Please enter a valid temperature (1 - 158).",
    })
    .max(158, {
      message: "Please enter a valid temperature (1 - 158).",
    }),
  humidity: z
    .number()
    .min(1, {
      message: "Please enter a valid humidity percentage (1 - 100).",
    })
    .max(100, {
      message: "Please enter a valid humidity percentage (1 - 100).",
    }),
  visibility: z
    .number()
    .min(1, { message: "Please enter a valid visibility (1 - 10)." })
    .max(10, { message: "Please enter a valid visibility (1 - 10)." }),
  windSpeed: z
    .number()
    .min(1, { message: "Please enter a valid wind speed (1 - 253)." })
    .max(253, { message: "Please enter a valid wind speed (1 - 253)." }),
  precipitation: z
    .number()
    .min(1, { message: "Please enter a valid precipitation (1 - 72)." })
    .max(72, { message: "Please enter a valid precipitation (1 - 72)." }),
  month: z.number({ message: "Please select a month." }).min(1).max(12),
  isTrafficSignal: z.boolean(),
  isDay: z.boolean(),
  isJunction: z.boolean(),
});

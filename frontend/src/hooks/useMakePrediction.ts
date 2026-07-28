import { useForm } from "react-hook-form";
import { predictorSchema } from "../schemas/predictorSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import type {
  FormattedJSON,
  PredictionResult,
  PredictorSchema,
} from "../types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { booleanToNumber } from "../utils/booleanToNumber";

export function useMakePrediction() {
  const apiURL = import.meta.env.VITE_BACKEND_API;
  const [isSent, setIsSent] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<PredictionResult | null>(
    null,
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<PredictorSchema>({
    resolver: zodResolver(predictorSchema),
    defaultValues: {
      isTrafficSignal: false,
      isDay: false,
      isJunction: false,
    },
  });

  useEffect(() => {
    const firstError = Object.values(errors)[0];
    if (firstError?.message) {
      toast.error(firstError.message as string);
    }
  }, [errors]);

  const submit = async (data: PredictorSchema) => {
    try {
      const {
        weatherCondition,
        windSpeed,
        isDay,
        isJunction,
        isTrafficSignal,
        ...rest
      } = data;

      const formattedJson: FormattedJSON = {
        weather_condition: weatherCondition,
        ...rest,
        wind_speed: windSpeed,
        traffic_signal: booleanToNumber(String(isTrafficSignal)),
        is_day: booleanToNumber(String(isDay)),
        junction: booleanToNumber(String(isJunction)),
      };

      const res = await axios.post<PredictionResult>(apiURL, formattedJson, {
        headers: { "Content-Type": "application/json" },
      });

      setIsSent(true);
      console.log(res.data);
      setResponseData(res.data);
    } catch (error) {
      toast.error("Cannot connect to the server.");
      console.error("error", error);
      setIsSent(false);
    }
  };

  return {
    register,
    handleSubmit,
    control,
    submit,
    isSubmitting,
    isSent,
    errors,
    responseData,
  };
}

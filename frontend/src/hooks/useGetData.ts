import { useEffect, useState } from "react";
import axios from "axios";
import type { ResponseData } from "../types";

export default function useGetData(stateCode: string) {
  const apiURL = import.meta.env.VITE_BACKEND_API_URL;
  const [data, setData] = useState<ResponseData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!stateCode) throw new Error("No hay statecode");

    const getData = async () => {
      setLoading(true);

      axios
        .get(`${apiURL}/${stateCode}`)
        .then((response) => {
          if (!response.data) {
            throw new Error("There's no data");
          }

          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("error: ", error);
          throw new Error("Error while fetching the data");
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getData();
  }, [apiURL, stateCode]);

  return {
    data,
    stateCode,
    loading,
    setLoading,
  };
}

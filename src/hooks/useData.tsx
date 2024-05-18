import { useEffect, useState } from "react";
import application from "../services/api-client";
import { AxiosRequestConfig } from "axios";

export interface T {
  id: number;
  name: string;
}
interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T,>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(
    () => {
      setLoading(true);
      application
        .get<FetchResponse<T>>(endpoint, { ...requestConfig })
        .then((res) => {
          setData(res.data.results); // Set the games state to the results array

          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    },
    deps ? [...deps] : []
  ); // If deps is not provided, then the effect will run only once

  return { data, error, loading };
};
export default useData;

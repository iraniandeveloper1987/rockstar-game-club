import { useEffect, useState } from "react";
import application from "../services/api-client";

export interface T {
  id: number;
  name: string;
}
interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T,>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    application
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results); // Set the games state to the results array

        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { data, error, loading };
};
export default useData;

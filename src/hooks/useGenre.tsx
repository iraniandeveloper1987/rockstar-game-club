import React, { useEffect, useState } from "react";
import application from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}
const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    application
      .get<FetchGenreResponse>("/genres")
      .then((res) => {
        setGenres(res.data.results); // Set the games state to the results array

        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        console.log("Error : ", error);
      });
  }, []);

  return { genres, error, loading };
};
export default useGenre;

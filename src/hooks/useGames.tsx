import React, { useEffect, useState } from "react";
import application from "../services/api-client";

export interface platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
}
interface FetchGamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}
function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    application
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results); // Set the games state to the results array

        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        console.log("Error : ", error);
      });
  }, []);

  return { games, error, loading };
}

export default useGames;

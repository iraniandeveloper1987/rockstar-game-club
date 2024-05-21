import { GameQuery } from "../App";
import useData from "./useData";

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

interface props {
  gameQuery: GameQuery;
}
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.Genre?.id,
        platforms: gameQuery.Platforms?.id,
        ordering: gameQuery.OrderBy,
      },
    },
    [gameQuery]
  );
export default useGames;

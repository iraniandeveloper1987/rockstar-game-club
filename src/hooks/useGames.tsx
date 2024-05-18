import useData from "./useData";
import { Genre } from "./useGenre";

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

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
export default useGames;

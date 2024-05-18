import useGames, { Game } from "../hooks/useGames";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { Genre } from "../hooks/useGenre";
import { Platforms } from "../hooks/usePlatforms";

interface props {
  selectedGenre: Genre | null;
  selectedPlatform: Platforms | null;
}
function GameGrid({ selectedGenre, selectedPlatform }: props) {
  const { data, error, loading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <div>{error}</div>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={10}
        paddingX="50px"
        justifyContent="center"
      >
        {loading &&
          skeletons.map((Skeleton) => {
            return (
              <GameCardContainer key={Skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            );
          })}
        {data?.map((game: Game) => {
          return (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          );
        })}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;

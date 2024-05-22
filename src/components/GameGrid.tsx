import useGames, { Game } from "../hooks/useGames";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { Genre } from "../hooks/useGenre";
import { Platforms } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface props {
  gameQuery: GameQuery;
}
function GameGrid({ gameQuery }: props) {
  const { data, error, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <div>{error}</div>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={5}
        paddingX="25px"
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

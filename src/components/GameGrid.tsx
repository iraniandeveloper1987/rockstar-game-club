import useGames, { Game } from "../hooks/useGames";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useData from "../hooks/useData";

function GameGrid() {
  const { data, error, loading } = useData<Game>("/games");
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <div>{error}</div>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={10}
        padding="10px"
        justifyContent="center"
      >
        {loading &&
          skeletons.map((Skeleton) => {
            return (
              <GameCardContainer>
                <GameCardSkeleton key={Skeleton} />{" "}
              </GameCardContainer>
            );
          })}
        {data?.map((game: Game) => {
          return (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          );
        })}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;

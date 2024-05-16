import useGames, { Game } from "../hooks/useGames";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { games, error, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <div>{error}</div>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={10}
        padding={5}
        justifyContent="center"
      >
        {loading &&
          skeletons.map((Skeleton) => {
            return <GameCardSkeleton key={Skeleton} />;
          })}
        {games?.map((game: Game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;

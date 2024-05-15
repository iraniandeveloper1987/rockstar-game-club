import useGames, { Game } from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import { platform } from "os";

function GameGrid() {
  const { games, error, loading } = useGames();
  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={10}
        padding={20}
      >
        {games?.map((game: Game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;

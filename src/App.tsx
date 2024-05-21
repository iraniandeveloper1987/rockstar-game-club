import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  Genre: Genre | null;
  Platforms: Platforms | null;
  OrderBy: string;
}
export const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "240px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList
              onSelectedGenre={(genre) =>
                setGameQuery({ ...gameQuery, Genre: genre })
              }
              selectedGenre={gameQuery.Genre}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <HStack>
            <PlatformSelector
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, Platforms: platform })
              }
              selectedPlatform={gameQuery.Platforms}
            />
            <SortSelector
              onSelectedOrderBy={(order: string) =>
                setGameQuery({ ...gameQuery, OrderBy: order })
              }
              selectedOrderBy={gameQuery.OrderBy}
            />
          </HStack>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

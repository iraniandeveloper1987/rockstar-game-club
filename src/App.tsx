import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";

export interface GameQuery {
  Genre: Genre | null;
  Platforms: Platforms | null;
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
          lg: "220px 1fr",
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
          <PlatformSelector
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, Platforms: platform })
            }
            selectedPlatform={gameQuery.Platforms}
          />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

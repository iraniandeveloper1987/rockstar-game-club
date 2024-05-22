import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import "./index.css";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  Genre: Genre | null;
  Platforms: Platforms | null;
  OrderBy: string;
  SearchText: string;
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
          <Navbar
            onSearch={(searchName: string) =>
              setGameQuery({ ...gameQuery, SearchText: searchName })
            }
          />
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
          <Box padding={5}>
            <GameHeading gameQuery={gameQuery} />
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
          </Box>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

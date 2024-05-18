import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import { Genre } from "./hooks/useGenre";

export const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  useEffect(() => {
    console.log("selectedGenre is ", selectedGenre);
  }, [selectedGenre]);
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
              onSelectedGenre={(genre: Genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
};

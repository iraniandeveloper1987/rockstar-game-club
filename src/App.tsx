import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

export const App = () => (
  <>
    {/* <Grid templateAreas={`"nav nav" "aside main"`}> */}
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem>Aside</GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  </>
);

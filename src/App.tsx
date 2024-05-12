import { Grid, GridItem, Show } from "@chakra-ui/react";

export const App = () => (
  <>
    {/* <Grid templateAreas={`"nav nav" "aside main"`}> */}
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="crimson">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="aqua">
        Main
      </GridItem>
    </Grid>
  </>
);

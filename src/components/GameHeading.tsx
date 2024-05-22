import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: props) => {
  const heading = `${gameQuery.Platforms?.name || ""} ${
    gameQuery.Genre?.name || ""
  }  Games`;
  return (
    <Heading as="h1" marginBottom={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;

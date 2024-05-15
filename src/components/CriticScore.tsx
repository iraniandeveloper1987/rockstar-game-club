import { Badge } from "@chakra-ui/react";
import React from "react";

interface props {
  score: number;
}
function CriticScore({ score }: props) {
  let color: string = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge fontSize="20px" colorScheme={color} borderRadius="5px" paddingX={1}>
      {score}
    </Badge>
  );
}

export default CriticScore;

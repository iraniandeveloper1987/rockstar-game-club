import {
  Badge,
  Card,
  CardBody,
  Heading,
  HStack,
  Img,
  Text,
} from "@chakra-ui/react";
import { Game, platform } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface props {
  game: Game;
}
function GameCard({ game }: props) {
  return (
    <Card borderRadius={25} overflow="hidden">
      <Img src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;

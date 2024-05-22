import {
  Badge,
  Card,
  CardBody,
  Heading,
  HStack,
  Img,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface props {
  game: Game;
}
function GameCard({ game }: props) {
  return (
    <Card>
      <Img
        src={getCroppedImageUrl(game.background_image) as string}
        alt={game.name}
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;

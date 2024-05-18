import { Button, HStack, Image, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import type { Genre } from "../hooks/useGenre";

interface Props {
  genre: Genre;
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null; // Add selectedGenre to props
}

const GenreItem = ({ onSelectedGenre, genre, selectedGenre }: Props) => {
  return (
    <ListItem marginY="10px">
      <Button variant="link" onClick={() => onSelectedGenre(genre)}>
        <HStack paddingX={5}>
          <Image
            src={getCroppedImageUrl(genre.image_background)}
            boxSize="45px"
            margin={1}
            borderRadius="15px"
          />
          <Text
            fontSize={genre.id === selectedGenre?.id ? "lg" : "xl"}
            fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
          >
            {genre.name}
          </Text>
        </HStack>
      </Button>
    </ListItem>
  );
};

export default GenreItem;

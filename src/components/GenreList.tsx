import useData from "../hooks/useData";
import useGenre, { Genre } from "../hooks/useGenre";
import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface props {
  onSelectedGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectedGenre }: props) => {
  const { data, loading, error } = useGenre();
  const geneSkeleton = Array.from({ length: 15 }, (_, index) => index + 1);

  if (loading) {
    return (
      <ul>
        {geneSkeleton.map((skeleton) => (
          <li key={skeleton}>
            <GenreSkeleton />
          </li>
        ))}
      </ul>
    );
  }

  if (error) {
    return null;
  }

  return (
    <ul>
      {data.map((genre: Genre) => (
        <li key={genre.id}>
          <Button
            variant="link"
            marginY="10px"
            onClick={() => onSelectedGenre(genre)}
          >
            <List>
              <ListItem>
                <HStack paddingX={5}>
                  <Image
                    src={getCroppedImageUrl(genre.image_background)}
                    boxSize="45px"
                    margin={1}
                    borderRadius="15px"
                  />
                  <Text fontSize="lg" fontWeight="bold">
                    {genre.name}
                  </Text>
                </HStack>
              </ListItem>
            </List>
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;

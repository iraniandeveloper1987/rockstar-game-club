import useGenre, { Genre } from "../hooks/useGenre";
import { Box, Heading, List, ListItem, SkeletonText } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";
import GenreItem from "./GenreItem";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, loading, error } = useGenre();
  const genreSkeleton = Array.from({ length: 15 }, (_, index) => index + 1);

  if (loading) {
    return (
      <List>
        {genreSkeleton.map((skeleton) => (
          <ListItem key={skeleton}>
            <GenreSkeleton />
          </ListItem>
        ))}
      </List>
    );
  }

  if (error) {
    return null;
  }

  return (
    <Box marginTop={9}>
      <Heading as="h3" paddingX={5} marginBottom={5} fontSize="3xl">
        Genres
      </Heading>
      <List>
        {data.map((genre: Genre) => (
          <GenreItem
            key={genre.id}
            genre={genre}
            onSelectedGenre={onSelectedGenre}
            selectedGenre={selectedGenre}
          />
        ))}
      </List>
    </Box>
  );
};

export default GenreList;

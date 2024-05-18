import useGenre, { Genre } from "../hooks/useGenre";
import { List, ListItem } from "@chakra-ui/react";
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
  );
};

export default GenreList;

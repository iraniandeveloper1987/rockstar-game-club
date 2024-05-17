import React from "react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenre";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, loading, error } = useData<Genre>("/genres");
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
        </li>
      ))}
    </ul>
  );
};

export default GenreList;

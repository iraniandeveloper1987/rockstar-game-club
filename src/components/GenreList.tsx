import React from "react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenre";
import { HStack, Image, List, ListItem, Text, VStack } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useData<Genre>("/genres");
  return (
    <ul>
      {data.map((genre: Genre) => (
        <li key={genre.id}>
          <List>
            <ListItem>
              <HStack paddingX={5}>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize={45}
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

import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <List>
      <ListItem>
        <HStack paddingX={5}>
          <Skeleton boxSize={45} margin={1} borderRadius="15px" />
          <SkeletonText noOfLines={1} width="100px" />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreSkeleton;

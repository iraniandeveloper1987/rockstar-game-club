import {
  Card,
  CardBody,
  Heading,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";
import PlatformIconList from "./PlatformIconList";

function GameCardSkeleton() {
  return (
    <Card borderRadius={25} overflow="hidden">
      <Skeleton height="300px" width="600px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;

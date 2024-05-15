import { Icon, HStack } from "@chakra-ui/react";
import { platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGlobe,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";

interface props {
  platforms: { platform: platform }[];
}
function PlatformIconList({ platforms }: props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: FaGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY="15px">
      {platforms.map(({ platform }) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" fontSize="2xl" />
      ))}
    </HStack>
  );
}

export default PlatformIconList;

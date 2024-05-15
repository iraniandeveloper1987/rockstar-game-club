import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack
      justifyContent="space-between"
      paddingRight="30px"
      marginBottom="20px"
    >
      <Image src={logo} boxSize={"100px"} padding={"10px"} borderRadius="15" />

      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

interface props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: props) => {
  return (
    <HStack
      justifyContent="space-around"
      paddingRight="30px"
      marginBottom="20px"
    >
      <Image src={logo} boxSize={"100px"} padding={"10px"} borderRadius="15" />
      <Search onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

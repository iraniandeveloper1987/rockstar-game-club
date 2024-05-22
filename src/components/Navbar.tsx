import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

interface props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: props) => {
  return (
    <HStack justifyContent="space-around" paddingRight="30px">
      <Image src={logo} boxSize={"120px"} padding={"10px"} borderRadius="15" />
      <Search onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

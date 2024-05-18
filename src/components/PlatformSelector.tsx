import {
  Button,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Box,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { platform } from "../hooks/useGames";

const PlatformSelector = () => {
  const { data, loading, error } = usePlatforms();
  if (error) {
    return null;
  }
  return (
    <Box margin={4} paddingLeft={8}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          platforms
        </MenuButton>

        <MenuList>
          {data?.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;

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
import { Platforms } from "../hooks/usePlatforms";
interface props {
  onSelectedPlatform: (platform: Platforms) => void;
  selectedPlatform: Platforms | null;
}
const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatform: selectedPlatform,
}: props) => {
  const { data, error } = usePlatforms();
  if (error) {
    return null;
  }
  return (
    <Box marginBottom={7} >
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform ? selectedPlatform.name : "Platforms"}
        </MenuButton>

        <MenuList>
          {data?.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectedPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;

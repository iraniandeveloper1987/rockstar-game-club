import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface props {
  onSelectedOrderBy: (orderBy: string) => void;
  selectedOrderBy: string;
}
const SortSelector = ({ onSelectedOrderBy, selectedOrderBy }: props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release data" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Box marginBottom={7}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by :{" "}
          {selectedOrderBy
            ? sortOrders.find((s) => s.value === selectedOrderBy)?.label
            : "Relevance"}
        </MenuButton>

        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => onSelectedOrderBy(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortSelector;

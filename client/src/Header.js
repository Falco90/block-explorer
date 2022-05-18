import React from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Header = (props) => {
  const { changeNetwork } = props;

  const select = (network) => {
    changeNetwork(network);
  };

  return (
    <Box display="flex" align-content="space-between">
      <h1>Block Explorer</h1>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Network
        </MenuButton>
        <MenuList>
          <MenuOptionGroup defaultValue="Mainnet" type="radio">
            <MenuItemOption value="Mainnet" onClick={() => select("Mainnet")}>
              Mainnet
            </MenuItemOption>
            <MenuItemOption value="Rinkeby" onClick={() => select("Rinkeby")}>
              Rinkeby
            </MenuItemOption>
            <MenuItemOption value="Ropsten" onClick={() => select("Ropsten")}>
              Ropsten
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Header;

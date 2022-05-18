import React from "react";
import { Box, Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Header = (props) => {
  const { changeNetwork } = props;

  const select = (network) => {
    console.log(network);
    changeNetwork(network);
  } 

  return <Box display="flex" align-content="space-between">
    <h1>Block Explorer</h1>
    <p>Mainnet</p>
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Network
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => select("Mainnet")}>Mainnet</MenuItem>
        <MenuItem onClick={() => select("Rinkeby")}>Rinkeby</MenuItem>
        <MenuItem  onClick={() => select("Ropsten")}>Ropsten</MenuItem>
      </MenuList>
    </Menu>
  </Box>;
};

export default Header;

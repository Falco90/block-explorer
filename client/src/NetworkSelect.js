import React from "react";
import { Box, Select, option } from "@chakra-ui/react";
import axios from "axios";

const server = "http://localhost:3300";

const NetworkSelect = () => {
  const changeNetwork = async (network) => {
    console.log(network);
    await axios.get(`${server}/change-network/${network}`);
  };

  return (
    <Select width={150}
      onChange={(e) => {
        changeNetwork(e.target.value);
      }}
    >
      <option value="Mainnet">Mainnet</option>
      <option value="Rinkeby">Rinkeby</option>
      <option value="Ropsten">Ropsten</option>
    </Select>
  );
};

export default NetworkSelect;

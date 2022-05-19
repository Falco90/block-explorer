import React from "react";
import {
  Box,
  Select
} from "@chakra-ui/react";

const NetworkSelect = (props) => {
  const { changeNetwork } = props;

  const select = (network) => {
    changeNetwork(network);
  };

  return (
    <Box display="flex" align-content="space-between">
      <h1>Block Explorer</h1>
      <Select>
            <option value="Mainnet" onClick={() => select("Mainnet")}>
              Mainnet
            </option>
            <option value="Rinkeby" onClick={() => select("Rinkeby")}>
              Rinkeby
            </option>
            <option value="Ropsten" onClick={() => select("Ropsten")}>
              Ropsten
            </option>
      </Select>
    </Box>
  );
};

export default NetworkSelect;

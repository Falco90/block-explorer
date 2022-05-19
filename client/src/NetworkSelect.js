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
  );
};

export default NetworkSelect;

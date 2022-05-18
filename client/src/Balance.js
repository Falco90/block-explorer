import React, { useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";

const Balance = (props) => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setBalance(await props.getBalance(address));
  };

  return (
    <Box display="flex" flexDirection="column" width="60%" py="5">
      <Input
        width="auto"
        type="text"
        id="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <Button onClick={onSubmit}>Check balance</Button>
      <Box textAlign={"center"} bg={"grey"} borderRadius={"5"}>
        {balance} Ether
      </Box>
    </Box>
  );
};

export default Balance;

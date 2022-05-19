import React, { useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Searchbar = (props) => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setBalance(await props.getBalance(address));
  };

  return (
    <Box display="flex" flexDirection="column" width="60%" py="5">
      <InputGroup width={500}>
        <Input
          placeholder="Enter address"
          type="text"
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <InputRightElement width="4.5rem" mr={2}>
          <Button
            px={10}
            rightIcon={<SearchIcon />}
            size="sm"
            onClick={onSubmit}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
      <Box textAlign={"center"} bg={"grey"} borderRadius={"5"}>
      </Box>
    </Box>
  );
};

export default Searchbar;

import React, { useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [address, setAddress] = useState("");

  return (
    <Box display="flex" flexDirection="column" width="60%">
      <InputGroup width={500}>
        <Input
          placeholder="Enter address"
          type="text"
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <InputRightElement width="4.5rem" mr={2}>
            <Button as={Link} to={"/address/" + address} state={{address:address}} px={10} rightIcon={<SearchIcon />} size="sm">
              Search
            </Button>
        </InputRightElement>
      </InputGroup>
      <Box textAlign={"center"} bg={"grey"} borderRadius={"5"}></Box>
    </Box>
  );
};

export default Searchbar;

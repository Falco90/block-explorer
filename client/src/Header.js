import React from "react";
import NetworkSelect from "./NetworkSelect";
import Searchbar from "./Searchbar";
import { HStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack width="100%" justify="center" mt={2} mb={8}>
      <Link to={"/"}>
        <Heading as="h2" size="md">
          BLOCK EXPLORER
        </Heading>
      </Link>
      <NetworkSelect />
      <Searchbar />
    </HStack>
  );
};

export default Header;

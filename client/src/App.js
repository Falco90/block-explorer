import "./App.css";
import axios from "axios";
import Searchbar from "./Searchbar";
import Blocks from "./Blocks";
import React, { useState, useEffect } from "react";
import {
  Container,
  HStack,
} from "@chakra-ui/react";
import NetworkSelect from "./NetworkSelect";
const ethers = require("ethers");

const server = "http://localhost:3300";

function App() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    let intervalId = setInterval(getBlock, 25000);
    return () => clearInterval(intervalId);
  }, []);

  const getBalance = async (address) => {
    const response = await axios.get(`${server}/balance/${address}`);
    const balance = ethers.utils.formatEther(response.data.balance.hex);
    return balance;
  };

  const getBlock = async () => {
    console.log("getting block");
    const block = await axios.get(`${server}/block`);
    setBlocks((prevState) => [block.data, ...prevState]);
  };

  const changeNetwork = async (network) => {
    await axios.get(`${server}/change-network/${network}`);
  };

  return (
    <Container centerContent maxW="lg">
      <HStack>
        <NetworkSelect changeNetwork={changeNetwork} />
        <Searchbar getBalance={getBalance} />
      </HStack>
      <Blocks blocks={blocks} />
    </Container>
  );
}

export default App;

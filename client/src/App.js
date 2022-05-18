import "./App.css";
import axios from "axios";
import Balance from "./Balance";
import Blocks from "./Blocks";
import React, {useState} from 'react';
import { Container } from '@chakra-ui/react';
import Header from "./Header";
const ethers = require("ethers");

const server = "http://localhost:3300";

function App() {
  const [blocks, setBlocks] = useState([]);
  let intervalID;

  const getBalance = async (address) => {
    console.log("triggered");
    const response = await axios.get(`${server}/balance/${address}`);
    const balance = ethers.utils.formatEther(response.data.balance.hex);
    return balance;
  };

  const getBlock = async () => {
    console.log("getting block");
    const block = await axios.get(`${server}/block`);
    setBlocks([...blocks, block.data]);
    console.log(blocks);
  };

  const pollBlocks = () => {
    console.log("Start polling...");
    intervalID = setInterval(getBlock, 30000);
    console.log(intervalID);
  };

  const stopPollingBlocks = () => {
    console.log("Stopping polling.");
    // intervalID = clearInterval(intervalID);
    for (let i = 1; i <= intervalID; i++) {
      clearInterval(i);
      console.log("cleared interval " + i)
    }
  }

  const changeNetwork = async (network) => {
    console.log(network);
      await axios.get(`${server}/change-network/${network}`);
  };

  // pollBlocks();

  return (
    <Container centerContent maxW="lg">
      <Header changeNetwork={changeNetwork} />
      <Balance getBalance={getBalance}/>
      <Blocks blocks={blocks} pollBlocks={pollBlocks} stopPollingBlocks={stopPollingBlocks} />
    </Container>
  );
}

export default App;

const express = require("express");
const app = express();
const cors = require("cors");
const ethers = require("ethers");
const port = 3300;
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

app.use(cors());

let provider = new ethers.providers.JsonRpcProvider(
  process.env.ALCHEMY_MAINNET_URL
);

let currentNetwork = "Mainnet";

const mainnetBlocks = [];
const rinkebyBlocks = [];
const ropstenBlocks = [];

const getBlocks = async () => {
  console.log("getting blocks...");
  const block = await provider.getBlockWithTransactions("latest");

  if (currentNetwork == "Mainnet") {
    if (!isInArray(block.number, mainnetBlocks)) {
      mainnetBlocks.unshift(block);
    }
  } else if (currentNetwork == "Rinkeby") {
    if (!isInArray(block.number, rinkebyBlocks)) {
      rinkebyBlocks.unshift(block);
    }
  } else {
    if (!isInArray(block.number, ropstenBlocks)) {
      ropstenBlocks.unshift(block);
    }
  }
  console.log("Added new block to " + currentNetwork + " array");
};

const isInArray = (number, array) => {
  return array.some((element) => {
    return element.number === number;
  });
};

getBlocks();
setInterval(getBlocks, 5000);

app.get("/block", async (req, res) => {
  if (currentNetwork == "Mainnet") {
    res.send(JSON.stringify(mainnetBlocks));
  } else if (currentNetwork == "Rinkeby") {
    res.send(JSON.stringify(rinkebyBlocks));
  } else {
    res.send(JSON.stringify(ropstenBlocks));
  }
});

app.get("/address/:address", async (req, res) => {
  try {
  const { address } = req.params;
  const balance = await provider.getBalance(address);
  const transactionCount = await provider.getTransactionCount(address);
  const code = await provider.getCode(address);
  console.log("Balance is: " + balance);
  res.send({ balance, transactionCount, hasCode: code !== '0x'});
  } catch (e) {
    console.log(e);
    res.send({});
  }
});

app.get("/change-network/:network", async (req, res) => {
  const { network } = req.params;
  currentNetwork = network;
  if (network == "Rinkeby") {
    provider = new ethers.providers.JsonRpcProvider(
      process.env.ALCHEMY_RINKEBY_URL
    );
  } else if (network == "Ropsten") {
    provider = new ethers.providers.JsonRpcProvider(
      process.env.ALCHEMY_ROPSTEN_URL
    );
  } else {
    provider = new ethers.providers.JsonRpcProvider(
      process.env.ALCHEMY_MAINNET_URL
    );
  }
  console.log("Network changed to " + currentNetwork);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

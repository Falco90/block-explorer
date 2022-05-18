const express = require('express');
const app = express();
const cors = require("cors");
const ethers = require("ethers");
const port = 3300;
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

let provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_MAINNET_URL);

app.use(cors());

app.get('/balance/:address', async (req, res) => {
    const { address } = req.params;
    const balance = await provider.getBalance(address);
    console.log("Balance is: " + balance);
    res.send({ balance });
});

app.get('/block', async (req, res) => {
    console.log("getting block...");
    const response = await provider.getBlock("latest");
    console.log(response);
    res.send(response);
});

app.get('/change-network/:network', async (req, res) => {
    const { network } = req.params;
    if (network == "Rinkeby") {
        provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_RINKEBY_URL);
    } else if (network == "Ropsten") {
        provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_ROPSTEN_URL);
    } else {
        provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_MAINNET_URL);
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`));
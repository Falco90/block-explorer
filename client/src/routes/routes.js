import React from "react";
import { Routes, Route } from "react-router-dom";
import BlockDetails from "../BlockDetails";
import AddressDetails from "../AddressDetails";
import Transactions from "../Transactions";
import Blocks from "../Blocks";

export default function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<Blocks />}></Route>
      <Route path="/blocks/:blocknumber" element={<BlockDetails />}></Route>
      <Route path="/blocks/:blocknumber/transactions" element={<Transactions />}></Route>
      <Route path="/address/:address" element={<AddressDetails />}></Route>
    </Routes>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Tbody,
  Flex,
  Button,
  Th,
  Td,
  Spinner,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
const ethers = require("ethers");
const server = "http://localhost:3300";

const AddressDetails = () => {
  const location = useLocation();
  const { address } = location.state;
  const [balance, setBalance] = useState("");
  const [transactionCount, setTransactionCount] = useState("");
  const [hasCode, setHasCode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasAccount, setHasAccount] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAddressDetails(address);
  }, [address]);

  const getAddressDetails = async (address) => {
    const response = await axios.get(`${server}/address/${address}`);
    const balance = ethers.utils.formatEther(response.data.balance.hex);
    const transactionCount = response.data.transactionCount;
    const hasCode = response.data.hasCode;
    setBalance(balance);
    setTransactionCount(transactionCount);
    setHasCode(hasCode);
    setIsLoading(false);
    setHasAccount(true);
  };

  return (
    <Box>
      {isLoading ? (
        <Flex direction="column" mt={20}>
          <p>Fetching address {address}...</p>
          <Spinner
            thickness="4px"
            speed="0.95s"
            color="white.500"
            size="lg"
            mt={10}
            alignSelf="center"
          />
        </Flex>
      ) : (
        <Box>
          {hasAccount ? (
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Address Details</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Address:</Td>
                  <Td>{address}</Td>
                </Tr>
                <Tr>
                  <Td>Balance:</Td>
                  <Td>{balance} Ether</Td>
                </Tr>
                <Tr>
                  <Td>Transactions:</Td>
                  <Td>{transactionCount}</Td>
                </Tr>
                <Tr>
                  <Td>Type:</Td>
                  <Td>
                    {hasCode ? "Smart Contract" : "Externally Owned Account"}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          ) : (
            <p>Address {address} not found.</p>
          )}
          <Flex>
            <Link to={"/"}>
              <Button
                mt={5}
                size="sm"
                leftIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
            </Link>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default AddressDetails;

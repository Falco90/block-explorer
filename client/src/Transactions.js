import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  Flex,
  Link,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useLocation, Link as RouterLink } from "react-router-dom";
import truncate from "./utils/utils";
const ethers = require('ethers');

const Transactions = (props) => {
  const location = useLocation();
  const { block } = location.state;
  console.log(block.transactions[0]);

  return (
    <Box>
      <TableContainer overflowY="auto" height={600} px={5}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>TXN Hash</Th>
              <Th>Block</Th>
              <Th>From</Th>
              <Th>To</Th>
              <Th>Value (ETH)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {block.transactions.map((transaction) => {
              return (
                <Tr>
                  <Td>{truncate(transaction.hash)}</Td>
                  <Td>{transaction.blockNumber}</Td>
                  <Td color="blue.100">
                    {transaction.from ? (
                      <Link
                        as={RouterLink}
                        to={"/address/" + transaction.from}
                        state={{ address: transaction.from }}
                      >
                        {truncate(transaction.from)}
                      </Link>
                    ) : (
                      ""
                    )}
                  </Td>
                  <Td color="blue.100">
                    {transaction.to ? (
                      <Link
                        as={RouterLink}
                        to={"/address/" + transaction.to}
                        state={{ address: transaction.to }}
                      >
                        {truncate(transaction.to)}
                      </Link>
                    ) : (
                      ""
                    )}
                  </Td>
                  <Td>{ethers.utils.formatEther(transaction.value.hex).slice(0,7)}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex>
        <RouterLink to={"/blocks/" + block.number} state={{ block: block }}>
          <Button mt={5} float="center" size="sm" leftIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </RouterLink>
      </Flex>
    </Box>
  );
};

export default Transactions;

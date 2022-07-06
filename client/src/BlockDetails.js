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
} from "@chakra-ui/react";
import { ViewIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useLocation, Link } from "react-router-dom";

const BlockDetails = () => {
  const location = useLocation();
  const { block } = location.state;

  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Block Details</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Number:</Td>
              <Td>{block.number}</Td>
            </Tr>
            <Tr>
              <Td>Hash:</Td>
              <Td>{block.hash}</Td>
            </Tr>
            <Tr>
              <Td>Miner:</Td>
              <Td>{block.miner}</Td>
            </Tr>
            <Tr>
              <Td>Transactions:</Td>
              <Td>
                {block.transactions ? (
                  <Link
                    to={"/blocks/" + block.number + "/transactions"}
                    state={{ block: block }}
                  >
                    <Button size="sm" rightIcon={<ViewIcon />}>
                      {block.transactions.length} transactions{" "}
                    </Button>
                  </Link>
                ) : (
                  ""
                )}
              </Td>
            </Tr>
            <Tr>
              <Td>Nonce:</Td>
              <Td>{block.nonce}</Td>
            </Tr>
            <Tr>
              <Td>ParentHash:</Td>
              <Td>{block.parentHash}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Flex>
        <Link to={"/"}>
          <Button mt={5} size="sm" leftIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default BlockDetails;

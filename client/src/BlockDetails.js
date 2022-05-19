import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tag,
  Button
} from "@chakra-ui/react";
import {ViewIcon} from "@chakra-ui/icons";

const BlockDetails = (props) => {
  const { selectedBlock } = props;
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Block #{selectedBlock.number}</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Hash:</Td>
            <Td>{selectedBlock.hash}</Td>
          </Tr>
          <Tr>
            <Td>Miner:</Td>
            <Td>{selectedBlock.miner}</Td>
          </Tr>
          <Tr>
            <Td>Transactions:</Td>
            <Td>
              {selectedBlock.transactions
                ? <Button size="sm" rightIcon={<ViewIcon />}>{selectedBlock.transactions.length} transactions </Button>
                : ""}
            </Td>
          </Tr>
          <Tr>
            <Td>Nonce:</Td>
            <Td>{selectedBlock.nonce}</Td>
          </Tr>
          <Tr>
            <Td>ParentHash:</Td>
            <Td>{selectedBlock.parentHash}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BlockDetails;

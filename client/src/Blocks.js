import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Box,
  Flex
} from "@chakra-ui/react";
import truncate from "./utils/utils";
import BlockDetails from "./BlockDetails";

const Blocks = (props) => {
  const { blocks } = props;
  const [selectedBlock, setSelectedBlock] = useState({});

  const selectBlock = (block) => {
    console.log(block);
    setSelectedBlock(block);
  };

  return (
    <Flex>
      <BlockDetails selectedBlock={selectedBlock}></BlockDetails>
      <TableContainer overflowY="auto" maxH="400px" px={5} maxW={500}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Latest Blocks</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {blocks
              ? blocks.map((block) => {
                  return (
                    <Tr key={block}>
                      <Td>{block.number}</Td>
                      <Td>{truncate(block.hash)}</Td>
                      <Td>
                        <Button size="sm" onClick={() => selectBlock(block)}>
                          Inspect
                        </Button>
                      </Td>
                    </Tr>
                  );
                })
              : ""}
          </Tbody>
        </Table>
      </TableContainer>
      </Flex>
  );
};

export default Blocks;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import truncate from "./utils/utils";

const server = "http://localhost:3300";

const Blocks = () => {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getBlocks();
    let intervalId = setInterval(getBlocks, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const getBlocks = async () => {
    const latestBlocks = await axios.get(`${server}/block`);
    setBlocks(latestBlocks.data);
    setIsLoading(false);
  };

  return (
    <Flex>
            {isLoading ? (
        <Flex direction="column" mt={20}>
          <p>Loading...</p>
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
      <TableContainer overflowY="auto" height={600} px={5} maxW={600}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Latest Blocks</Th>
              <Th></Th>
              <Th>
                <Spinner
                  thickness="4px"
                  speed="0.95s"
                  color="white.500"
                  size="sm"
                  float="right"
                />
              </Th>
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
                        <Link
                          to={"blocks/" + block.number}
                          state={{ block: block }}
                        >
                          <Button size="sm">Inspect</Button>
                        </Link>
                      </Td>
                    </Tr>
                  );
                })
              : ""}
          </Tbody>
        </Table>
      </TableContainer>
      )}
    </Flex>
  );
};

export default Blocks;

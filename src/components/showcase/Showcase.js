import { Flex } from "@chakra-ui/react";
import React from "react";

const Showcase = () => {
  return (
    <Flex
      w="100%"
      h="fit-content"
      direction="column"
      borderWidth="1px"
      borderRadius="10px 10px 0px 0px"
      borderStyle="solid"
      color="white"
    >
      {/* showcase header */}
      <Flex w="100%" h="40px" justify="space-between">
        <Flex>1</Flex>
        <Flex>1</Flex>
      </Flex>
      <Flex
        justify="center"
        align="center"
        bg="rgb(62, 62, 62)"
        h="300px"
      ></Flex>
    </Flex>
  );
};

export default Showcase;

// rgb(62, 62, 62)

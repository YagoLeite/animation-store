import Test from "@/components/twitchtv/Test";
import Twitch from "@/components/twitchtv/Twitch";
import { Flex } from "@chakra-ui/react";
import React from "react";

const index = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      minW="100vw"
      minH="100vh"
      justify="center"
      align="center"
    >
      <Flex
        w="100%"
        h="100%"
        // maxW="900px"
        maxH="100px"
        align="center"
        justify="center"
      >
        {/* <Twitch /> */}
        <Test />
      </Flex>
    </Flex>
  );
};

export default index;

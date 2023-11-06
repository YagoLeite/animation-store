import { Flex, Highlight, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Showcase from "../showcase/Showcase";
import { data } from "@/data";

const Display = () => {
  const twitch = data.find((item) => item.name === "Twitch Carousel");
  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        type: "ease",
        transition: {
          duration: 0.5,
        },
      }}
      viewport={{ once: true, amount: 0.9 }}
      w="100%"
      maxW="1440px"
      direction="column"
      align="center"
      justify="center"
      gap="30px"
      px="20px"
    >
      <Flex
        direction="column"
        w="100%"
        gap="10px"
        justify="center"
        align="center"
      >
        <Text
          color="white"
          fontWeight="semibold"
          fontSize={["36px", "46px", "56px"]}
        >
          It's really easy
        </Text>
        <Flex
          w="100%"
          // bg="green"
          fontSize={["16px", "20px", "26px"]}
          align="center"
          justify="center"
        >
          <Text align="center">
            Enjoying the components? Toggle the{" "}
            <Box as="span" w="fit-content" display="inline-flex">
              <Text bgGradient="linear(to-l, #67d9d3, #e1c123)" bgClip="text">
                code
              </Text>
            </Box>
            , and don't forget to{" "}
            <Box as="span" w="fit-content" display="inline-flex">
              <Text bgGradient="linear(to-l, #e5e542, #c17272 )" bgClip="text">
                share
              </Text>
            </Box>{" "}
            with a click!
          </Text>
        </Flex>
      </Flex>
      <Showcase data={twitch} />
    </Flex>
  );
};

export default Display;

import { Flex, Highlight, Text } from "@chakra-ui/react";
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
        <Text color="white" fontWeight="semibold" fontSize="56px">
          It's really easy
        </Text>
        <Flex
          w="100%"
          // bg="green"
          fontSize={["11px", "13px", "14px", "16px", "20px"]}
          align="center"
          justify="center"
        >
          <Highlight
            query={["code", "share"]}
            styles={{
              rounded: "full",
              bgGradient: "linear(to-l, #7928CA, #FF0080)",
              color: "white",
              px: 1,
              mx: 1,
            }}
            // fontSize="20px"
          >
            Enjoying the components? Toggle the code, and don't forget to share
            with a click!
          </Highlight>
        </Flex>
      </Flex>
      <Showcase data={twitch} />
    </Flex>
  );
};

export default Display;

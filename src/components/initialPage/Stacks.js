import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { SiChakraui } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { FiFramer } from "react-icons/fi";
import { motion } from "framer-motion";
import ButtonPage from "./ButtonPage";

const Stacks = () => {
  return (
    <Flex w="100%" direction="column" gap="30px" align="center" px="20px">
      <Text
        color="white"
        fontSize={["36px", "46px", "56px"]}
        align="center"
        fontWeight="semibold"
      >
        What we do
      </Text>
      <Flex
        w="100%"
        maxW="1000px"
        gap="3px"
        fontSize={["16px", "20px", "26px"]}
        align="center"
        wrap="wrap"
      >
        <Text textAlign="center">
          We use{" "}
          <Box
            as="span"
            display="inline-flex"
            fontFamily="Lekton"
            alignItems="center"
            gap="2px"
          >
            <motion.div
              style={{
                display: "inline-flex",
                gap: "2px",
                alignItems: "center",
              }}
              whileHover={{ color: "#61DBFB" }}
            >
              <DiReact color="#61DBFB" fontSize="16px" />
              React
            </motion.div>
          </Box>
          ,{" "}
          <Box
            as="span"
            display="inline-flex"
            alignItems="center"
            fontFamily="Lekton"
            gap="2px"
          >
            <motion.div
              style={{
                display: "inline-flex",
                gap: "2px",
                alignItems: "center",
              }}
              whileHover={{ color: "#61DBFB" }}
            >
              <SiChakraui color="#61DBFB" fontSize="16px" />
              Chakra UI
            </motion.div>
          </Box>
          , and{" "}
          <Box
            as="span"
            display="inline-flex"
            // justifyContent="bottom"
            alignItems="center"
            fontFamily="Lekton"
            gap="2px"
          >
            <motion.div
              style={{
                display: "inline-flex",
                gap: "2px",
                alignItems: "center",
              }}
              whileHover={{ color: "#61DBFB" }}
            >
              <FiFramer color="#61DBFB" fontSize="16px" />
              Framer Motion
            </motion.div>
          </Box>{" "}
          to craf simple, yet powerful animated UI components. Our animations
          feature{" "}
          <Box as="span" w="fit-content" display="inline-flex">
            <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
              clean backgrounds
            </Text>
          </Box>
          , offering you a versatile canvas to personalize as you see fit. These
          intuitive components are not only easy to integrate with a couple of
          clicks but are also entirely{" "}
          <Box as="span" w="fit-content" display="inline-flex">
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="semibold"
            >
              FREE!
            </Text>
          </Box>
        </Text>
      </Flex>
      <Flex w="200px" h="65px" mt="10px">
        <ButtonPage text="Start now" />
      </Flex>
    </Flex>
  );
};

export default Stacks;

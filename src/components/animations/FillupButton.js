import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const variants = {
  hover: {
    backgroundPosition: ["70%", "30%", "50%", "20%", "0%"],
    backgroundSize: [
      "100% 300%",
      "400% 200%",
      "300% 300%",
      "150% 320%",
      "400% 400%",
    ],
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "linear",
    },
  },
  initial: {
    backgroundPosition: "100%",
    backgroundSize: [
      "100% 300%",
      "400% 200%",
      "300% 300%",
      "150% 320%",
      "400% 400%",
    ],
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
};

const FillupButton = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Flex
      as={motion.div}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      justify="center"
      whileTap={{ scale: 0.9 }}
      align="center"
      w="200px"
      h="70px"
      border="1px solid black"
      //   background="linear-gradient(to top right,   rgba(255, 117, 140, 1) 0%,
      //   rgba(255, 126, 179, 0.6) 20%,
      //   rgba(255, 164, 196, 0.3) 30%,
      //   rgba(134, 227, 206, 1) 50%, darkblue 50%) right"
      background="linear-gradient(to right, salmon, lightblue), radial-gradient(circle at top left, yellow, green 70%, blue 90%)"
      backgroundSize="400% 400%"
      variants={variants}
      initial="initial"
      animate={isHovering ? "hover" : "initial"}
      boxShadow="dark-lg"
    >
      <Text>Hover me</Text>
    </Flex>
  );
};

export default FillupButton;

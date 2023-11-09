import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const variants = {
  hover: {
    backgroundPosition: "0%",
    color: "black",
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "linear",
    },
  },
  initial: {
    backgroundPosition: "100%",
    color: "white",
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  },
};

const FillupButton = ({ isCoding }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex
          as={motion.div}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          cursor="pointer"
          justify="center"
          whileTap={{ scale: 0.9 }}
          align="center"
          w="200px"
          h="70px"
          border="1px solid"
          background="linear-gradient(to right, white 50%, black 50%)"
          backgroundSize="400% 400%"
          variants={variants}
          initial="initial"
          animate={isHovering ? "hover" : "initial"}
          boxShadow="dark-lg"
        >
          <Text fontWeight="semibold">Hover me</Text>
        </Flex>
      )}
    </>
  );
};

export default FillupButton;

function code() {
  return `
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const variants = {
  hover: {
    backgroundPosition: "0%",
    color: "black",
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "linear",
    },
  },
  initial: {
    backgroundPosition: "100%",
    color: "white",
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
      cursor="pointer"
      justify="center"
      whileTap={{ scale: 0.9 }}
      align="center"
      w="200px"
      h="70px"
      border="1px solid"
      background="linear-gradient(to right, white 50%, black 50%)"
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
  `;
}

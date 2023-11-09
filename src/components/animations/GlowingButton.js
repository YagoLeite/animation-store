import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const GlowingButton = ({ isCoding }) => {
  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex
          as={motion.button}
          whileHover={{ boxShadow: "0px 2px 5px #64ffda", y: -2 }}
          whileTap={{ scale: 0.9 }}
          borderRadius="5px"
          border="2px #64ffda solid"
          w="200px"
          h="70px"
          align="center"
          justify="center"
          bg="#050d12"
        >
          Hover me
        </Flex>
      )}
    </>
  );
};

function code() {
  return `
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const GlowingButton = () => {
  return (
    <Flex
      as={motion.button}
      whileHover={{ boxShadow: "0px 2px 5px #64ffda", y: -2 }}
      whileTap={{ scale: 0.9 }}
      borderRadius="5px"
      border="2px #64ffda solid"
      w="200px"
      h="70px"
      align="center"
      justify="center"
      bg="#050d12"
    >
      Welcome
    </Flex>
  );
};

export default GlowingButton;

    `;
}

export default GlowingButton;

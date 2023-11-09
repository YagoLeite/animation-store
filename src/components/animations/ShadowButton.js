import React from "react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const ShadowButton = ({ isCoding }) => {
  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Button
          as={motion.button}
          whileHover={{
            backgroundColor: "#fff",
            transform: "translate(-1px, -1px)",
            boxShadow: "5px 5px 0 0 #422800",
            transition: { duration: 0.1 },
          }}
          whileTap={{
            boxShadow: "2px 2px 0 0 #422800",
            transform: "translate(2px, 2px)",
            transition: { duration: 0.1 },
          }}
          backgroundColor="#fbeee0"
          border="2px solid #422800"
          borderRadius="10px"
          boxShadow="4px 4px 0 0 #422800"
          color="#422800"
          cursor="pointer"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="600"
          fontSize="18px"
          w="200px"
          h="70px"
        >
          Click me!
        </Button>
      )}
    </>
  );
};

export default ShadowButton;

function code() {
  return `
import React from "react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ShadowButton = () => {
  return (
    <Button
      as={motion.button}
      whileHover={{
        backgroundColor: "#fff",
        transform: "translate(-1px, -1px)",
        boxShadow: "5px 5px 0 0 #422800",
        transition: { duration: 0.1 },
      }}
      whileTap={{
        boxShadow: "2px 2px 0 0 #422800",
        transform: "translate(2px, 2px)",
        transition: { duration: 0.1 },
      }}
      backgroundColor="#fbeee0"
      border="2px solid #422800"
      borderRadius="10px"
      boxShadow="4px 4px 0 0 #422800"
      color="#422800"
      cursor="pointer"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontWeight="600"
      fontSize="18px"
      w="200px"
      h="70px"
    >
      Click me!
    </Button>
  );
};

export default ShadowButton;
    `;
}

import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

export default function BorderCard({ isCoding }) {
  const innerCardVariant = {
    rest: {
      scale: 1,
      borderRadius: "15px",
    },
    hover: {
      scale: 0.98,
      borderRadius: "20px",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
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
          w="100%"
          py="20px"
          minW="190px"
          maxW="300px"
        >
          <Flex
            as={motion.div}
            w="100%"
            h="254px"
            borderRadius="20px"
            backgroundImage="linear-gradient(163deg, #ec407a 0%, #ab47bc 100%)"
            initial={{ y: 0, boxShadow: "none" }}
            whileHover={{
              boxShadow: "0px 0px 20px 1px rgba(0, 255, 117, 0.30)",
              y: -10,
              transition: { duration: 0.2 },
            }}
          >
            <Flex
              as={motion.div}
              w="100%"
              h="254px"
              bg="rgb(20, 20, 20)"
              variants={innerCardVariant}
              initial="rest"
              whileHover="hover"
              align="center"
              justify="center"
            >
              <Text fontSize="28px" color="white">
                Hover me
              </Text>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
}

function code() {
  return `
  import { Flex, Text } from "@chakra-ui/react";
  import { motion } from "framer-motion";
  
  export default function BorderCard() {
    const innerCardVariant = {
    rest: {
      scale: 1,
      borderRadius: "15px",
    },
    hover: {
      scale: 0.98,
      borderRadius: "20px",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <Flex w="100%" minW="190px" maxW="300px">
    <Flex
      as={motion.div}
      w="100%"
      h="254px"
      borderRadius="20px"
      backgroundImage="linear-gradient(163deg, #00ff75 0%, #3700ff 100%)"
      initial={{ y: 0, boxShadow: "none" }}
      whileHover={{
        boxShadow: "0px 0px 20px 1px rgba(0, 255, 117, 0.30)",
        y: -10,
        transition: { duration: 0.2 },
      }}
    >
      <Flex
        as={motion.div}
        w="100%"
        h="254px"
        bg="rgb(20, 20, 20)"
        variants={innerCardVariant}
        initial="rest"
        whileHover="hover"
        align="center"
        justify="center"
      >
        <Text fontSize="28px" color="white">
          Hover me
        </Text>
      </Flex>
    </Flex>
  </Flex>
  );
}
`;
}

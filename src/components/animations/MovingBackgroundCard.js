import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const movementVariant = {
  moving: {
    top: [
      "-5%",
      "10%",
      "20%",
      "30%",
      "40%",
      "50%",
      "60%",
      "70%",
      "80%",
      "90%",
      "100%",
      "90%",
      "80%",
      "70%",
      "60%",
      "50%",
      "40%",
      "30%",
      "20%",
      "10%",
      "0%",
      "5%",
      "15%",
      "25%",
      "35%",
      "45%",
      "55%",
      "65%",
      "75%",
      "85%",
      "95%",
      "90%",
      "80%",
      "70%",
      "60%",
      "50%",
      "40%",
      "30%",
      "20%",
      "10%",
      "0%",
      "5%",
      "15%",
      "25%",
      "35%",
      "45%",
      "55%",
      "65%",
      "75%",
      "85%",
      "95%",
      "90%",
      "80%",
      "70%",
      "60%",
      "50%",
      "40%",
      "30%",
      "20%",
      "10%",
      "0%",
      "5%",
      "15%",
      "25%",
      "35%",
      "45%",
      "55%",
      "65%",
      "75%",
      "85%",
      "95%",
      "100%",
      "90%",
      "80%",
      "70%",
      "60%",
      "50%",
      "40%",
      "30%",
      "20%",
      "10%",
      "-5%",
    ],
    left: [
      "-5%",
      "5%",
      "10%",
      "15%",
      "20%",
      "25%",
      "30%",
      "35%",
      "40%",
      "45%",
      "50%",
      "55%",
      "60%",
      "65%",
      "70%",
      "75%",
      "80%",
      "85%",
      "90%",
      "95%",
      "100%",
      "95%",
      "90%",
      "85%",
      "80%",
      "75%",
      "70%",
      "65%",
      "60%",
      "55%",
      "50%",
      "45%",
      "40%",
      "35%",
      "30%",
      "25%",
      "20%",
      "15%",
      "10%",
      "5%",
      "0%",
      "5%",
      "10%",
      "15%",
      "20%",
      "25%",
      "30%",
      "35%",
      "40%",
      "45%",
      "50%",
      "55%",
      "60%",
      "65%",
      "70%",
      "75%",
      "80%",
      "85%",
      "90%",
      "95%",
      "100%",
      "95%",
      "90%",
      "85%",
      "80%",
      "75%",
      "70%",
      "65%",
      "60%",
      "55%",
      "50%",
      "45%",
      "40%",
      "35%",
      "30%",
      "25%",
      "20%",
      "15%",
      "10%",
      "5%",
      "-5%",
    ],
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const movementVariantTwo = {
  moving: {
    top: [
      "50%",
      "45%",
      "40%",
      "35%",
      "30%",
      "35%",
      "40%",
      "45%",
      "50%",
      "55%",
      "60%",
      "65%",
      "70%",
      "65%",
      "60%",
      "55%",
      "50%",
      "45%",
      "40%",
      "35%",
      "30%",
      "35%",
      "40%",
      "45%",
      "50%",
      "55%",
      "60%",
      "65%",
      "70%",
      "65%",
      "60%",
      "55%",
      "50%",
    ],
    left: [
      "50%",
      "55%",
      "60%",
      "65%",
      "70%",
      "75%",
      "80%",
      "85%",
      "90%",
      "85%",
      "80%",
      "75%",
      "70%",
      "65%",
      "60%",
      "55%",
      "50%",
      "45%",
      "40%",
      "35%",
      "30%",
      "25%",
      "20%",
      "15%",
      "10%",
      "15%",
      "20%",
      "25%",
      "30%",
      "35%",
      "40%",
      "45%",
      "50%",
    ],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const rotationVariant = {
  rotate: {
    rotate: [0, 360],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const MovingBackgroundCard = ({ isCoding }) => {
  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex
          w="100%"
          maxW="900px"
          h={["300px", "400px", "500px"]}
          position="relative"
          overflow="hidden"
          justify="center"
          align="center"
          bg="gray"
        >
          {/* First Blob */}
          <Flex
            as={motion.div}
            variants={movementVariant}
            animate={"moving"}
            position="absolute"
          >
            <Flex as={motion.div} variants={rotationVariant} animate="rotate">
              <Flex
                w={["100px", "140px", "170px"]}
                h={["100px", "140px", "170px"]}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                borderRadius="30% 70% 70% 30% / 30% 30% 70% 70% "
                filter="blur(35px)"
              />
            </Flex>
          </Flex>

          {/* Second Blob */}
          <Flex
            as={motion.div}
            variants={movementVariantTwo}
            animate={"moving"}
            position="absolute"
          >
            <Flex as={motion.div} variants={rotationVariant} animate="rotate">
              <Flex
                w={["100px", "140px", "170px"]}
                h={["100px", "140px", "170px"]}
                bgGradient="linear(to-r, blue.800, green.500)"
                borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%   "
                filter="blur(35px)"
              />
            </Flex>
          </Flex>

          <Flex
            zIndex="1"
            w="90%"
            h="90%"
            justify="center"
            align="center"
            border="1px solid"
            direction="column"
            color="black"
            gap="20px"
            px="20px"
          >
            <Text
              textAlign="center"
              fontSize={["20px", "25px", "30px", "30px", "40px"]}
              fontWeight="semibold"
            >
              Work hard in silence, let your sucess be the noise
            </Text>
            <Text fontSize={["14px", "20px", "24px"]}>Frank Ocean</Text>
          </Flex>
        </Flex>
      )}
    </>
  );
};

function code() {
  return `
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const movementVariant = {
    moving: {
      top: [
        "-5%",
        "10%",
        "20%",
        "30%",
        "40%",
        "50%",
        "60%",
        "70%",
        "80%",
        "90%",
        "100%",
        "90%",
        "80%",
        "70%",
        "60%",
        "50%",
        "40%",
        "30%",
        "20%",
        "10%",
        "0%",
        "5%",
        "15%",
        "25%",
        "35%",
        "45%",
        "55%",
        "65%",
        "75%",
        "85%",
        "95%",
        "90%",
        "80%",
        "70%",
        "60%",
        "50%",
        "40%",
        "30%",
        "20%",
        "10%",
        "0%",
        "5%",
        "15%",
        "25%",
        "35%",
        "45%",
        "55%",
        "65%",
        "75%",
        "85%",
        "95%",
        "90%",
        "80%",
        "70%",
        "60%",
        "50%",
        "40%",
        "30%",
        "20%",
        "10%",
        "0%",
        "5%",
        "15%",
        "25%",
        "35%",
        "45%",
        "55%",
        "65%",
        "75%",
        "85%",
        "95%",
        "100%",
        "90%",
        "80%",
        "70%",
        "60%",
        "50%",
        "40%",
        "30%",
        "20%",
        "10%",
        "-5%",
      ],
      left: [
        "-5%",
        "5%",
        "10%",
        "15%",
        "20%",
        "25%",
        "30%",
        "35%",
        "40%",
        "45%",
        "50%",
        "55%",
        "60%",
        "65%",
        "70%",
        "75%",
        "80%",
        "85%",
        "90%",
        "95%",
        "100%",
        "95%",
        "90%",
        "85%",
        "80%",
        "75%",
        "70%",
        "65%",
        "60%",
        "55%",
        "50%",
        "45%",
        "40%",
        "35%",
        "30%",
        "25%",
        "20%",
        "15%",
        "10%",
        "5%",
        "0%",
        "5%",
        "10%",
        "15%",
        "20%",
        "25%",
        "30%",
        "35%",
        "40%",
        "45%",
        "50%",
        "55%",
        "60%",
        "65%",
        "70%",
        "75%",
        "80%",
        "85%",
        "90%",
        "95%",
        "100%",
        "95%",
        "90%",
        "85%",
        "80%",
        "75%",
        "70%",
        "65%",
        "60%",
        "55%",
        "50%",
        "45%",
        "40%",
        "35%",
        "30%",
        "25%",
        "20%",
        "15%",
        "10%",
        "5%",
        "-5%",
      ],
      transition: {
        duration: 30, 
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

const movementVariantTwo = {
  moving: {
    top: [
      "50%",
      "45%",
      "40%",
      "35%",
      "30%",
      "35%",
      "40%",
      "45%",
      "50%",
      "55%",
      "60%",
      "65%",
      "70%",
      "65%",
      "60%",
      "55%",
      "50%",
      "45%",
      "40%",
      "35%",
      "30%",
      "35%",
      "40%",
      "45%",
      "50%",
      "55%",
      "60%",
      "65%",
      "70%",
      "65%",
      "60%",
      "55%",
      "50%",
    ],
    left: [
      "50%",
      "55%",
      "60%",
      "65%",
      "70%",
      "75%",
      "80%",
      "85%",
      "90%",
      "85%",
      "80%",
      "75%",
      "70%",
      "65%",
      "60%",
      "55%",
      "50%",
      "45%",
      "40%",
      "35%",
      "30%",
      "25%",
      "20%",
      "15%",
      "10%",
      "15%",
      "20%",
      "25%",
      "30%",
      "35%",
      "40%",
      "45%",
      "50%",
    ],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const rotationVariant = {
  rotate: {
    rotate: [0, 360],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const MovingBackgroundCard = () => {
  return (
    <Flex
      w="100%"
      maxW="1000px"
      h={["300px", "400px", "500px"]}
      position="relative"
      overflow="hidden"
      justify="center"
      align="center"
      bg="gray"
    >
      {/* First Blob */}
      <Flex
        as={motion.div}
        variants={movementVariant}
        animate={"moving"}
        position="absolute"
      >
        <Flex as={motion.div} variants={rotationVariant} animate="rotate">
          <Flex
            w={["100px", "140px", "170px"]}
            h={["100px", "140px", "170px"]}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            borderRadius="30% 70% 70% 30% / 30% 30% 70% 70% "
            filter="blur(35px)"
          />
        </Flex>
      </Flex>

      {/* Second Blob */}
      <Flex
        as={motion.div}
        variants={movementVariantTwo}
        animate={"moving"}
        position="absolute"
      >
        <Flex as={motion.div} variants={rotationVariant} animate="rotate">
          <Flex
            w={["100px", "140px", "170px"]}
            h={["100px", "140px", "170px"]}
            bgGradient="linear(to-r, blue.800, green.500)"
            borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%   "
            filter="blur(35px)"
          />
        </Flex>
      </Flex>

      <Flex
        zIndex="1"
        w="90%"
        h="90%"
        justify="center"
        align="center"
        border="1px solid"
        direction="column"
        color="black"
        gap="20px"
        px="20px"
      >
        <Text
          textAlign="center"
          fontSize={["20px", "25px", "30px", "30px", "40px"]}
          fontWeight="semibold"
        >
          Work hard in silence, let your sucess be the noise
        </Text>
        <Text fontSize={["14px", "20px", "24px"]}>Frank Ocean</Text>
      </Flex>
    </Flex>
  );
};

export default MovingBackgroundCard;
    `;
}

export default MovingBackgroundCard;

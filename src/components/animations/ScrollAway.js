"use client";
import { Flex, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const backgroundVariant = {
  initial: {
    backgroundPosition: "0%",
  },
  inView: {
    backgroundPosition: "100%",
    transition: {
      duration: 1.3,
    },
  },
};

const textVariant = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  inView: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.3,
      duration: 1,
    },
  },
};

const Container = ({ children, ...rest }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <Flex
      as={motion.div}
      ref={ref}
      align="center"
      w="100%"
      background="linear-gradient(to right, #64ffda 50%, transparent 50%)"
      backgroundSize="200% 200%"
      variants={backgroundVariant}
      initial="initial"
      animate={isInView ? "inView" : "initial"}
      overflow="hidden"
      {...rest}
    >
      <Flex
        as={motion.div}
        variants={textVariant}
        initial="initial"
        animate={isInView ? "inView" : "initial"}
      >
        {children}
      </Flex>
    </Flex>
  );
};

const ScrollAway = ({ isCoding }) => {
  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex
          w="100%"
          maxW="700px"
          h="100%"
          bg="black"
          direction="column"
          p="30px"
          gap="20px"
        >
          <Container
            fontSize={["40px", "56px", "96px"]}
            fontWeight="extrabold"
            h="fit-content"
          >
            <Text>Hello, user!</Text>
          </Container>
          <Container fontSize={["20px", "24px", "36px"]} fontWeight="bold">
            <Text>Are you enjoying Animation Store?</Text>
          </Container>
          <Container fontSize={["16px", "16px", "18px"]}>
            <Text>This animation triggers when it's in your screen</Text>
          </Container>
          <Container fontSize={["16px", "16px", "18px"]}>
            <Text>Scroll in and out so it triggers again!</Text>
          </Container>
        </Flex>
      )}
    </>
  );
};

function code() {
  return `
  import { Flex, Text } from "@chakra-ui/react";
  import { motion, useInView } from "framer-motion";
  import React, { useRef } from "react";
  
  const backgroundVariant = {
    initial: {
      backgroundPosition: "0%",
    },
    inView: {
      backgroundPosition: "100%",
      transition: {
        duration: 1.3,
      },
    },
  };
  
  const textVariant = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    inView: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.3,
        duration: 1,
      },
    },
  };
  
  const Container = ({ children, ...rest }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
      <Flex
        as={motion.div}
        ref={ref}
        align="center"
        w="100%"
        background="linear-gradient(to right, #64ffda 50%, transparent 50%)"
        backgroundSize="200% 200%"
        variants={backgroundVariant}
        initial="initial"
        animate={isInView ? "inView" : "initial"}
        overflow="hidden"
        {...rest}
      >
        <Flex
          as={motion.div}
          variants={textVariant}
          initial="initial"
          animate={isInView ? "inView" : "initial"}
        >
          {children}
        </Flex>
      </Flex>
    );
  };
  
  const ScrollAway = () => {
    return (
      <Flex
        w="100%"
        maxW="700px"
        h="100%"
        bg="black"
        direction="column"
        p="30px"
        gap="20px"
      >
        <Container
          fontSize={["40px", "56px", "96px"]}
          fontWeight="extrabold"
          h="fit-content"
        >
          <Text>Hello, user!</Text>
        </Container>
        <Container fontSize={["20px", "24px", "36px"]} fontWeight="bold">
          <Text>Are you enjoying Animation Store?</Text>
        </Container>
        <Container fontSize={["16px", "16px", "18px"]}>
          <Text>This animation triggers when it's in your screen</Text>
        </Container>
        <Container fontSize={["16px", "16px", "18px"]}>
          <Text>Scroll in and out so it triggers again!</Text>
        </Container>
      </Flex>
    );
  };
  
  export default ScrollAway;`;
}

export default ScrollAway;

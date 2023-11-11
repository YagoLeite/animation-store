import { Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const movementVariant = {
  start: {
    top: ["-5%", "50%", "45%", "50%", "45%", "50%"],
    left: ["50%", "50%", "50%", "50%", "50%"],
    x: ["-50%", "-50%", "-50%", "-50%", "-50%"],
    y: ["-50%", "-50%", "-50%", "-50%", "-50%"],
    width: ["40px", "40px", "40px", "40px", "1000px"],
    height: ["40px", "40px", "40px", "40px", "400px"],
    borderRadius: ["50%", "50%", "50%", "50%", "0%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.48, 0.5, 0.52, 1],
      repeatDelay: 1,
    },
  },
  rewind: {
    top: ["50%", "45%", "50%", "-5%"],
    left: "50%",
    x: "-50%",
    y: "-50%",
    width: ["1000px", "40px", "40px", "40px"],
    height: ["400px", "40px", "40px", "40px"],
    borderRadius: ["0%", "50%", "50%", "50%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [1, 0.52, 0, 5, 0.48, 0],
    },
  },
};

const contentVariant = {
  initial: {
    opacity: 0,
    transition: { duration: 0 },
  },
  visible: {
    opacity: 1,
    transition: { delay: 2, duration: 1 },
  },
  reset: {
    opacity: [0, 0, 1],
    transition: { duration: 1, delay: 2, times: [0, 0, 1] },
  },
  rewind: {
    opacity: 0,
  },
};

const BouncingLoader = ({ isCoding }) => {
  const controls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    controls.start("start");
    contentControls.start("visible");
  }, [isCoding]);

  const resetHandler = () => {
    contentControls.start("reset");
    controls.start("start");
  };

  const rewindHandler = async () => {
    contentControls.start("rewind");
    await controls.start("rewind");
    controls.start("start");
    contentControls.start("visible");
  };

  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex
          w="100%"
          maxW="1000px"
          h="100%"
          minH="400px"
          bg="pink"
          position="relative"
          overflow="hidden"
          align="center"
          justify="center"
        >
          <Flex
            as={motion.div}
            variants={movementVariant}
            initial="start"
            animate={controls}
            w="40px"
            h="40px"
            position="absolute"
            top="0"
            left="0"
            borderRadius="50%"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
          />
          <Flex
            as={motion.div}
            variants={contentVariant}
            initial="initial"
            animate={contentControls}
            zIndex={1}
            direction="column"
            align="center"
            justify="center"
            gap="20px"
          >
            <Flex
              as={motion.div}
              whileHover={{ scale: 1.1, color: "black" }}
              onClick={resetHandler}
              w="150px"
              h="60px"
              align="center"
              justify="center"
              border="1px solid"
              cursor="pointer"
            >
              Reset
            </Flex>
            <Flex
              as={motion.div}
              whileHover={{ scale: 1.1, color: "black" }}
              onClick={rewindHandler}
              w="150px"
              h="60px"
              align="center"
              justify="center"
              border="1px solid"
              cursor="pointer"
            >
              Rewind
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};

function code() {
  return `
import { Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const movementVariant = {
  start: {
    top: ["-5%", "50%", "45%", "50%", "45%", "50%"],
    left: ["50%", "50%", "50%", "50%", "50%"],
    x: ["-50%", "-50%", "-50%", "-50%", "-50%"],
    y: ["-50%", "-50%", "-50%", "-50%", "-50%"],
    width: ["40px", "40px", "40px", "40px", "1000px"],
    height: ["40px", "40px", "40px", "40px", "400px"],
    borderRadius: ["50%", "50%", "50%", "50%", "0%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.48, 0.5, 0.52, 1],
      repeatDelay: 1,
    },
  },
  rewind: {
    top: ["50%", "45%", "50%", "-5%"],
    left: "50%",
    x: "-50%",
    y: "-50%",
    width: ["1000px", "40px", "40px", "40px"],
    height: ["400px", "40px", "40px", "40px"],
    borderRadius: ["0%", "50%", "50%", "50%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [1, 0.52, 0, 5, 0.48, 0],
    },
  },
};

const contentVariant = {
  initial: {
    opacity: 0,
    transition: { duration: 0 },
  },
  visible: {
    opacity: 1,
    transition: { delay: 2, duration: 1 },
  },
  reset: {
    opacity: [0, 0, 1],
    transition: { duration: 1, delay: 2, times: [0, 0, 1] },
  },
  rewind: {
    opacity: 0,
  },
};

const BouncingLoader = () => {
  const controls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    controls.start("start");
    contentControls.start("visible");
  }, []);

  const resetHandler = () => {
    contentControls.start("reset");
    controls.start("start");
  };

  const rewindHandler = async () => {
    contentControls.start("rewind");
    await controls.start("rewind");
    controls.start("start");
    contentControls.start("visible");
  };

  return (
    <Flex
      w="100%"
      maxW="1000px"
      h="100%"
      minH="400px"
      bg="pink"
      position="relative"
      overflow="hidden"
      align="center"
      justify="center"
    >
      <Flex
        as={motion.div}
        variants={movementVariant}
        initial="start"
        animate={controls}
        w="40px"
        h="40px"
        position="absolute"
        top="0"
        left="0"
        borderRadius="50%"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
      />
      <Flex
        as={motion.div}
        variants={contentVariant}
        initial="initial"
        animate={contentControls}
        zIndex={1}
        direction="column"
        align="center"
        justify="center"
        gap="20px"
      >
        <Flex
          as={motion.div}
          whileHover={{ scale: 1.1, color: "black" }}
          onClick={resetHandler}
          w="150px"
          h="60px"
          align="center"
          justify="center"
          border="1px solid"
          cursor="pointer"
        >
          Reset
        </Flex>
        <Flex
          as={motion.div}
          whileHover={{ scale: 1.1, color: "black" }}
          onClick={rewindHandler}
          w="150px"
          h="60px"
          align="center"
          justify="center"
          border="1px solid"
          cursor="pointer"
        >
          Rewind
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BouncingLoader;
`;
}

export default BouncingLoader;

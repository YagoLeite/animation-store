import { Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const movementVariant = {
  start: {
    top: ["-5%", "50%", "45%", "50%", "45%", "50%"], // Start above the container, then move to the center
    left: ["50%", "50%", "50%", "50%", "50%"], // Center horizontally
    x: ["-50%", "-50%", "-50%", "-50%", "-50%"], // Center the element horizontally from the beginning
    y: ["-50%", "-50%", "-50%", "-50%", "-50%"], // Apply only when expansion starts to keep the element centered
    width: ["40px", "40px", "40px", "40px", "1000px"], // Grow to full width
    height: ["40px", "40px", "40px", "40px", "400px"], // Grow to full height
    borderRadius: ["50%", "50%", "50%", "50%", "0%"], // Transition from circle to square
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.48, 0.5, 0.52, 1],
      repeatDelay: 1,
    },
  },
  rewind: {
    top: ["50%", "45%", "50%", "-5%"], // Reverse the keyframes from the 'start' variant
    left: "50%",
    x: "-50%",
    y: "-50%",
    width: ["1000px", "40px", "40px", "40px"], // Reverse width and height expansion
    height: ["400px", "40px", "40px", "40px"],
    borderRadius: ["0%", "50%", "50%", "50%"], // Reverse borderRadius change
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [1, 0.52, 0, 5, 0.48, 0], // Reverse the 'times' as well
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
        w="90%"
        h="90%"
        border="1px solid"
        direction="column"
        align="center"
        justify="center"
        gap="10px"
      >
        <Flex onClick={resetHandler}>Reset</Flex>
        <Flex onClick={rewindHandler}>Rewind</Flex>
      </Flex>
    </Flex>
  );
};

export default BouncingLoader;

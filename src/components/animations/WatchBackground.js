import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useRef } from "react";

const rotateMovement = {
  start: {
    // Define the rotation keyframes from 0 to 360 degrees
    rotate: [0, 360],
    transition: {
      // Set the duration to 2.5 seconds
      duration: 2.5,
      // Use linear easing for a smooth continuous rotation
      ease: "linear",
      // Repeat the animation infinitely
      repeat: Infinity,
      // Start the animation from the initial value when it repeats
      repeatType: "loop",
    },
  },
};

const WatchBackground = () => {
  const containerRef = useRef();
  return (
    <Flex
      w="300px"
      h="300px"
      ref={containerRef}
      overflow="hidden"
      border="1px solid"
      position="relative"
    >
      <Flex
        as={motion.div}
        variants={rotateMovement}
        // initial="start"
        animate="start"
        w="500px"
        h="500px"
        borderRadius="50%"
        position="absolute"
        // top="calc(0%)"
        // left="calc(0%)"
        top="0%"
        left="0%"
        // transform="translate(-50%, -50%)"
        background="conic-gradient(from 180deg at 50% 50%, #0F1844 0deg, rgba(66, 133, 181, 0.54) 165deg, rgba(6, 58, 96, 0) 360deg)"
      />
    </Flex>
  );
};

export default WatchBackground;

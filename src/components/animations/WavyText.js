import React, { useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

const WavyText = () => {
  const controls = useAnimation();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: -40,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
      },
    },
  };

  useEffect(() => {
    let isMounted = true;

    async function animateLoop() {
      if (!isMounted) return;

      await controls.start("visible");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (!isMounted) return;

      await controls.start("hidden");
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (!isMounted) return;

      animateLoop();
    }

    animateLoop();

    return () => {
      isMounted = false;
    };
  }, [controls]);

  return (
    <Flex
      variants={container}
      initial="hidden"
      animate={controls}
      justify="left"
      overflow="hidden"
      as={motion.div}
    >
      {"Animation Store".split("").map((letter, index) => {
        return (
          <Flex as={motion.div} variants={child} key={index}>
            {letter === " " ? (
              <Text opacity={0}>aa</Text>
            ) : (
              <Text color="#4169E1" fontSize={50}>
                {letter}
              </Text>
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default WavyText;

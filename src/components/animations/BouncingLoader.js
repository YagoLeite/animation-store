import { Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const movementVariant = {
  start: {
    top: ["-5%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
    left: "50%",
    x: "-50%",
    y: "-50%",
    scale: [1, 1, 2, 1, 2, 1, 100],
    borderRadius: ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "0%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  rewind: {
    top: ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "-5%"],
    left: "50%",
    x: "-50%",
    y: "-50%",
    borderRadius: ["0%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
    scale: [100, 1, 2, 1, 2, 1, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
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
    transition: { delay: 1.5, duration: 1 },
  },
  reset: {
    opacity: [0, 0, 1],
    transition: { duration: 1, delay: 1.5, times: [0, 0, 1] },
  },
  rewind: {
    opacity: 0,
  },
};

const BouncingLoader = ({ isCoding }) => {
  const controls = useAnimation();
  const contentControls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    controls.start("start");
    contentControls.start("visible");
  }, [isCoding]);

  const resetHandler = () => {
    if (isAnimating) {
      return;
    }

    contentControls.start("reset");
    controls.start("start");
  };

  const rewindHandler = async () => {
    if (isAnimating) {
      return;
    }
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
          position="relative"
          overflow="hidden"
          align="center"
          justify="center"
        >
          <Flex
            as={motion.div}
            variants={movementVariant}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
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
              as={motion.button}
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
import React, { useEffect, useState } from "react";

const movementVariant = {
    start: {
      top: ["-5%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
      left: "50%",
      x: "-50%",
      y: "-50%",
      scale: [1, 1, 2, 1, 2, 1, 100],
      borderRadius: ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "0%"],
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    rewind: {
      top: ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "-5%"],
      left: "50%",
      x: "-50%",
      y: "-50%",
      borderRadius: ["0%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
      scale: [100, 1, 2, 1, 2, 1, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
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
    transition: { delay: 1.5, duration: 1 },
  },
  reset: {
    opacity: [0, 0, 1],
    transition: { duration: 1, delay: 1.5, times: [0, 0, 1] },
  },
  rewind: {
    opacity: 0,
  },
};

const BouncingLoader = () => {
  const controls = useAnimation();
  const contentControls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    controls.start("start");
    contentControls.start("visible");
  }, []);

  const resetHandler = () => {
    if (isAnimating) {
        return;
      }
    contentControls.start("reset");
    controls.start("start");
  };

  const rewindHandler = async () => {
    if (isAnimating) {
        return;
      }
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
      position="relative"
      overflow="hidden"
      align="center"
      justify="center"
    >
      <Flex
        as={motion.div}
        variants={movementVariant}
        onAnimationStart={() => setIsAnimating(true)}
        onAnimationComplete={() => setIsAnimating(false)}
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

import { Flex, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const archVariant = {
  start: {
    scale: [1, 3.5],
    transition: { duration: 1.5, delay: 0.25 },
  },
  rewind: {
    scale: [3.3, 1],
    transition: { duration: 1.3 },
  },
};

const containerVariants = {
  initial: (custom) => ({
    left: custom ? "100%" : "-100%",
    opacity: 0,
  }),
  start: (custom) => ({
    left: custom ? "50%" : "10%",
    opacity: 1,
    transition: {
      delay: custom ? 1 : 0,
      duration: 1,
    },
  }),
  rewind: (custom) => ({
    left: custom ? "100%" : "-100%",
    opacity: 0,
    transition: {
      delay: custom ? 1 : 0,
      duration: 1,
    },
  }),
};

const textVariants = {
  initial: {
    opacity: 0,
    y: -80,
  },
  start: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  rewind: {
    opacity: 0,
    y: -80,
    transition: {
      duration: 1,
    },
  },
};

const ArchedWalls = ({ isCoding }) => {
  const controls = useAnimation();
  const containerControls = useAnimation();
  const textControls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);

  const resetHandler = async () => {
    if (isAnimating) {
      return;
    }
    setIsAnimating(true);
    containerControls.start("initial");
    textControls.start("initial");
    await controls.start("start");
    await containerControls.start("start");
    await textControls.start("start");
    setIsAnimating(false);
  };

  const rewindHandler = async () => {
    if (isAnimating) {
      return;
    }
    setIsAnimating(true);
    await textControls.start("rewind");
    await containerControls.start("rewind");
    await controls.start("rewind");
    await controls.start("start");
    await containerControls.start("start");
    await textControls.start("start");
    setIsAnimating(false);
  };

  useEffect(() => {
    const trigger = async () => {
      setIsAnimating(true);
      containerControls.start("initial");
      textControls.start("initial");
      await controls.start("start");
      await containerControls.start("start");
      await textControls.start("start");
      setIsAnimating(false);
    };
    trigger();
  }, [isCoding]);

  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex
          maxW="500px"
          w="100%"
          h={["275px", "400px", "500px"]}
          overflow="hidden"
          position="relative"
        >
          <Flex
            position="absolute"
            w="100%"
            maxW="500px"
            h={["285px", "400px", "450px", "500px", "500px"]}
            backgroundImage={`url(/archedWallBackground.png)`}
            backgroundSize="cover"
            direction="column"
            gap={["15px", "30px", "30px", "30px"]}
            justify="center"
            align="center"
          >
            <Flex
              w="100%"
              position="relative"
              overflow="hidden"
              h="120px"
              align="center"
            >
              <Flex
                as={motion.div}
                position="absolute"
                initial="initial"
                variants={containerVariants}
                animate={containerControls}
                background="rgba(0, 0, 0, 0.5)"
                w="fit-content"
                justify="center"
                p={["10px", "13px", "15px", "15px"]}
                overflow="hidden"
              >
                <Flex
                  as={motion.div}
                  variants={textVariants}
                  initial="initial"
                  animate={textControls}
                >
                  <Text fontSize={["24px", "32px", "36px"]}>Welcome</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              w="100%"
              position="relative"
              overflow="hidden"
              h="100%"
              maxH="120px"
              align="center"
            >
              <Flex
                as={motion.div}
                position="absolute"
                initial="initial"
                variants={containerVariants}
                animate={containerControls}
                background="rgba(0, 0, 0, 0.3)"
                w="fit-content"
                align="center"
                h={["50px", "70px", "70px"]}
                p={["10px", "13px", "15px", "15px"]}
                custom={"a"}
                overflow="hidden"
              >
                <Flex
                  as={motion.div}
                  variants={textVariants}
                  initial="initial"
                  animate={textControls}
                  h="100%"
                >
                  <Text fontSize={["15px", "20px", "24px"]} textAlign="center">
                    To your Home!
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex w="100%" h=" 80px" gap="30px" justify="center" align="center">
              <Flex
                as={motion.button}
                display={isAnimating ? "none" : "flex"}
                whileHover={{ scale: 1.1 }}
                onClick={resetHandler}
                w="150px"
                h={["50px", "60px", "60px", "60px"]}
                align="center"
                justify="center"
                border="1px solid"
                cursor="pointer"
                background="rgba(0, 0, 0, 0.5)"
              >
                Reset
              </Flex>
              <Flex
                as={motion.div}
                display={isAnimating ? "none" : "flex"}
                whileHover={{ scale: 1.1 }}
                onClick={rewindHandler}
                w="150px"
                h={["50px", "60px", "60px", "60px"]}
                align="center"
                justify="center"
                border="1px solid"
                cursor="pointer"
                background="rgba(0, 0, 0, 0.5)"
              >
                Rewind
              </Flex>
            </Flex>
          </Flex>
          <Flex
            position="absolute"
            zIndex={1}
            as={motion.div}
            variants={archVariant}
            animate={controls}
            w="100%"
            maxW="500px"
            h={["275px", "400px", "500px"]}
            backgroundImage={`url(/archedWallImage.png)`}
            backgroundSize="cover"
            pointerEvents="none"
          />
        </Flex>
      )}
    </>
  );
};

export default ArchedWalls;

function code() {
  return `
  import { Flex, Text } from "@chakra-ui/react";
  import { motion, useAnimation } from "framer-motion";
  import React, { useEffect, useState } from "react";
  
  const archVariant = {
    start: {
      scale: [1, 3.5],
      transition: { duration: 1.5, delay: 0.25 },
    },
    rewind: {
      scale: [3.3, 1],
      transition: { duration: 1.3 },
    },
  };
  
  const containerVariants = {
    initial: (custom) => ({
      left: custom ? "100%" : "-100%",
      opacity: 0,
    }),
    start: (custom) => ({
      left: custom ? "50%" : "10%",
      opacity: 1,
      transition: {
        delay: custom ? 1 : 0,
        duration: 1,
      },
    }),
    rewind: (custom) => ({
      left: custom ? "100%" : "-100%",
      opacity: 0,
      transition: {
        delay: custom ? 1 : 0,
        duration: 1,
      },
    }),
  };
  
  const textVariants = {
    initial: {
      opacity: 0,
      y: -80,
    },
    start: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    rewind: {
      opacity: 0,
      y: -80,
      transition: {
        duration: 1,
      },
    },
  };
  
  const ArchedWalls = () => {
    const controls = useAnimation();
    const containerControls = useAnimation();
    const textControls = useAnimation();
    const [isAnimating, setIsAnimating] = useState(false);
  
    const resetHandler = async () => {
      if (isAnimating) {
        return;
      }
      setIsAnimating(true);
      containerControls.start("initial");
      textControls.start("initial");
      await controls.start("start");
      await containerControls.start("start");
      await textControls.start("start");
      setIsAnimating(false);
    };
  
    const rewindHandler = async () => {
      if (isAnimating) {
        return;
      }
      setIsAnimating(true);
      await textControls.start("rewind");
      await containerControls.start("rewind");
      await controls.start("rewind");
      await controls.start("start");
      await containerControls.start("start");
      await textControls.start("start");
      setIsAnimating(false);
    };
  
    useEffect(() => {
      const trigger = async () => {
        setIsAnimating(true);
        await controls.start("start");
        await containerControls.start("start");
        await textControls.start("start");
        setIsAnimating(false);
      };
      trigger();
    }, [isCoding]);
  
    return (
      <Flex
        maxW="500px"
        w="100%"
        h={["275px", "400px", "500px"]}
        overflow="hidden"
        position="relative"
      >
        <Flex
          position="absolute"
          w="100%"
          maxW="500px"
          h={["285px", "400px", "450px", "500px", "500px"]}
          backgroundImage={\`url(/archedWallBackground.png)\`}
          backgroundSize="cover"
          direction="column"
          gap={["15px", "30px", "30px", "30px"]}
          justify="center"
          align="center"
        >
          <Flex
            w="100%"
            position="relative"
            overflow="hidden"
            h="120px"
            align="center"
          >
            <Flex
              as={motion.div}
              position="absolute"
              initial="initial"
              variants={containerVariants}
              animate={containerControls}
              background="rgba(0, 0, 0, 0.5)"
              w="fit-content"
              justify="center"
              p={["10px", "13px", "15px", "15px"]}
              overflow="hidden"
            >
              <Flex
                as={motion.div}
                variants={textVariants}
                initial="initial"
                animate={textControls}
              >
                <Text fontSize={["24px", "32px", "36px"]}>Welcome</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            position="relative"
            overflow="hidden"
            h="100%"
            maxH="120px"
            align="center"
          >
            <Flex
              as={motion.div}
              position="absolute"
              initial="initial"
              variants={containerVariants}
              animate={containerControls}
              background="rgba(0, 0, 0, 0.3)"
              w="fit-content"
              align="center"
              h={["50px", "70px", "70px"]}
              p={["10px", "13px", "15px", "15px"]}
              custom={"a"}
              overflow="hidden"
            >
              <Flex
                as={motion.div}
                variants={textVariants}
                initial="initial"
                animate={textControls}
                h="100%"
              >
                <Text fontSize={["15px", "20px", "24px"]} textAlign="center">
                  To your Home!
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex w="100%" h=" 80px" gap="30px" justify="center" align="center">
            <Flex
              as={motion.button}
              display={isAnimating ? "none" : "flex"}
              whileHover={{ scale: 1.1 }}
              onClick={resetHandler}
              w="150px"
              h={["50px", "60px", "60px", "60px"]}
              align="center"
              justify="center"
              border="1px solid"
              cursor="pointer"
              background="rgba(0, 0, 0, 0.5)"
            >
              Reset
            </Flex>
            <Flex
              as={motion.div}
              display={isAnimating ? "none" : "flex"}
              whileHover={{ scale: 1.1 }}
              onClick={rewindHandler}
              w="150px"
              h={["50px", "60px", "60px", "60px"]}
              align="center"
              justify="center"
              border="1px solid"
              cursor="pointer"
              background="rgba(0, 0, 0, 0.5)"
            >
              Rewind
            </Flex>
          </Flex>
        </Flex>
        <Flex
          position="absolute"
          zIndex={1}
          as={motion.div}
          variants={archVariant}
          animate={controls}
          w="100%"
          maxW="500px"
          h={["275px", "400px", "500px"]}
          backgroundImage={\`url(/archedWallImage.png)\`}
          backgroundSize="cover"
          pointerEvents="none"
        />
      </Flex>
    );
  };
  
  export default ArchedWalls;`;
}

import { Flex, Image, Text } from "@chakra-ui/react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

const data = [
  {
    image: "./manuImageOne.png",
    text: "GOSTOSA",
    key: Math.random(),
    bg: "orange",
    textOne: "It may seem hard",
    textTwo: "A everything moves",
    textThree: "But fear not",
  },
  {
    image: "./manuImageTwo.png",
    text: "AMOR DA MINHA VIDA",
    key: Math.random(),
    bg: "white",
    textOne: "Animation Store",
    textTwo: "Is here for you",
    textThree: "The dog is here for you",
  },
  {
    image: "./manuImageFour.png",
    text: "MINHA DEUSA",
    key: Math.random(),
    bg: "salmon",
    textOne: "Just get the code",
    textTwo: "On two clicks",
    textThree: "But waaaait",
  },
  {
    image: "./manuImageFive.png",
    text: "DE OLHO EM NÓS",
    key: Math.random(),
    bg: "blue.200",
    textOne: "Do not forget",
    textTwo: "You can also share it",
    textThree: "With your dev friends",
  },
  {
    image: "./manuImageSix.png",
    text: "AMO VOCES TAMBÉM",
    key: Math.random(),
    bg: "red.100",
    textOne: "Or not dev friends",
    textTwo: "Just friends",
    textThree: "Or not even friends",
  },
];

const containerVariant = {
  initial: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 1,
    x: "-100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariant = (delay) => ({
  initial: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: [0, 0, 1, 1, 1, 1],
    y: 0,
    transition: {
      delay: delay,
      duration: 1,
      ease: "easeInOut",
    },
  },
});

const scaleVariant = (delay) => ({
  scaling: {
    scale: [1, 2, 1, 2, 1, 2, 1],
    transition: {
      delay: delay || 0,
      duration: 1.4,
    },
  },
});

const DogCarousel = () => {
  const [position, setPosition] = useState(4);
  const controls = useAnimation();

  const circularIndex = (i) => ((i % data.length) + data.length) % data.length;

  useEffect(() => {
    const timeout = setInterval(() => {
      setPosition((prev) => prev + 1);
      controls.start("scaling");
    }, 5000);
    return () => clearInterval(timeout);
  }, []);

  return (
    <Flex
      w="700px"
      h="500px"
      bg="gray"
      position="relative"
      justify="center"
      align="center"
      overflow="hidden"
    >
      <AnimatePresence initial={false}>
        <Flex
          as={motion.div}
          variants={containerVariant}
          initial="initial"
          animate="visible"
          exit="exit"
          w="100%"
          h="100%"
          position="absolute"
          top="0"
          left="0"
          transform="translate(-50%, -50%)"
          justify="center"
          align="center"
          direction="column"
          bg={data[circularIndex(position)].bg}
          key={data[circularIndex(position)].key}
        >
          <Flex
            w="100%"
            h="100%"
            position="relative"
            justify="center"
            align="center"
          >
            <Image
              src={data[circularIndex(position)].image}
              alt="dog image"
              h="250px"
              w="250px"
              opacity="0.7"
              objectFit="contain"
              zIndex={1}
            />
            <AnimatePresence>
              <Flex
                as={motion.div}
                variants={textVariant(0.5)}
                initial="initial"
                animate="visible"
                w="100%"
                top="0%"
                position="absolute"
                // transform="translate(-50%,-50%)"
                justify="center"
                align="center"
              >
                <Text fontSize="60px" fontWeight="bold" color="black">
                  {data[circularIndex(position)].textOne}
                </Text>
              </Flex>
              <Flex
                as={motion.div}
                variants={textVariant(1.6)}
                initial="initial"
                animate="visible"
                w="100%"
                // top="0%"
                position="absolute"
                // transform="translate(-50%,-50%)"
                justify="center"
                align="center"
              >
                <Text fontSize="60px" fontWeight="bold" color="black">
                  {data[circularIndex(position)].textTwo}
                </Text>
              </Flex>
              <Flex
                as={motion.div}
                variants={textVariant(2.9)}
                initial="initial"
                animate="visible"
                w="100%"
                top="80%"
                position="absolute"
                // transform="translate(-50%,-50%)"
                justify="center"
                align="center"
              >
                <Text fontSize="60px" fontWeight="bold" color="black">
                  {data[circularIndex(position)].textThree}
                </Text>
              </Flex>
            </AnimatePresence>
          </Flex>
        </Flex>
      </AnimatePresence>
      <Flex
        as={motion.div}
        variants={scaleVariant(0.2)}
        animate={controls}
        position="absolute"
        top="5%"
        left="5%"
        transform="translate(-50%,-50%)"
        h="20px"
        w="20px"
        borderRadius="50%"
        bg="gray.500"
      />
      <Flex
        as={motion.div}
        variants={scaleVariant(0.3)}
        animate={controls}
        position="absolute"
        top="85%"
        left="15%"
        transform="translate(-50%,-50%)"
        h="20px"
        w="20px"
        borderRadius="50%"
        bg="gray.900"
      />
      <Flex
        as={motion.div}
        variants={scaleVariant(0.6)}
        animate={controls}
        position="absolute"
        top="25%"
        left="75%"
        transform="translate(-50%,-50%)"
        h="20px"
        w="20px"
        borderRadius="50%"
        bg="black"
      />
      <Flex
        as={motion.div}
        variants={scaleVariant(0.7)}
        animate={controls}
        position="absolute"
        top="65%"
        left="85%"
        transform="translate(-50%,-50%)"
        h="20px"
        w="20px"
        borderRadius="50%"
        bg="red"
      />
      {/* <Flex
        color="black"
        w="100%"
        h="100%"
        justify="center"
        align="center"
        gap="100px"
        fontSize="45px"
        direction="column"
      >
        <Text>CONHEÇAM MANU</Text>
        <Text>A</Text>
        <Text fontSize="45px">MINHA GOSTOSA</Text>
      </Flex> */}
    </Flex>
  );
};

export default DogCarousel;

import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const parentVariant = {
  initial: {
    opacity: 0.8,
  },
  hovered: {
    opacity: 1,
  },
};

const childVariant = {
  initial: {
    y: 0,
  },
  hovered: {
    y: -190,
  },
};

const textVariant = {
  initial: {
    opacity: 0,
  },
  hovered: {
    opacity: 1,
  },
};

const imgVariant = {
  initial: {
    opacity: 0.9,
  },
  hovered: {
    opacity: 1,
  },
};

const index = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Flex
      w="100%"
      h="100%"
      minW="100vw"
      minH="100vh"
      justify="center"
      align="center"

      //   bg="gray.600"
    >
      <Flex
        as={motion.div}
        // variants={parentVariant}
        onMouseEnter={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        animate={isHovered ? "hovered" : "initial"}
        w="300px"
        h="430px"
        borderRadius="10px"
        overflow="hidden"
        boxShadow="dark-lg"
        position="relative"
      >
        <Image
          as={motion.img}
          variants={imgVariant}
          src="/worldcupMobile.png"
          alt="pic"
          position="absolute"
        />
        <Flex
          as={motion.div}
          variants={childVariant}
          direction="column"
          position="absolute"
          w="100%"
          h="fit-content"
          p="20px"
          top="80%"
          color="white"
          pointerEvents="none"
          gap="10px"
        >
          <Text textShadow="1px 1px black" fontWeight="500" fontSize="20px">
            World Cup Simulator
          </Text>
          <Flex
            as={motion.div}
            variants={textVariant}
            w="100%"
            wordBreak="break-all"
          >
            <Text textShadow="1px 1px black">
              Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um
              texto randômico. Com mais de 2000 anos, suas raízes podem ser
              encontradas em uma obra de literatura latina clássica datada de 45
              AC. Richard McClintock, um professor de latim do Hampden-Sydney
              College na Virginia, pesquisou uma das mais obscuras
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default index;

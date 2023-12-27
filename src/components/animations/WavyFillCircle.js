import { Flex, Image, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const imageVariant = {
  animate: {
    y: ["0%", "100%", "0%"],
    transition: {
      duration: 10,
    },
  },
};

const WavyFillCircle = () => {
  return (
    <Flex w="50px" h="50px" borderRadius="50%" border="1px solid">
      <Flex
        as={motion.div}
        variants={imageVariant}
        animate="animate"
        w="200px"
        h="100px"
      >
        <Image
          h="100px"
          w="200px"
          src="./wavyBackgroundImageOne.png"
          alt="wavyimageOne"
          objectFit="fill"
          position="absolute"
        />
      </Flex>
    </Flex>
  );
};

export default WavyFillCircle;

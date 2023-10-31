import { Box, Flex, Image, Text, Tag, Progress } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const variants = {
  open: {
    height: "300px",
    width: "400px",
    transition: { duration: 0.5, ease: "easeIn" },
  },
  closed: {
    height: "100px",
    width: "200px",
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const textVariants = {
  open: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  closed: { opacity: 0 },
};

const imageVariants = {
  open: {
    height: "150px",
    width: "150px",
    top: "calc(0% - 75px)",
    left: "calc(75% - 75px)",
    transition: { duration: 0.5, ease: "linear" },
  },
  closed: {
    heigth: "200px",
    width: "200px",
    top: "calc(0% - 100px)",
    left: "calc(50% - 100px)",
    transition: { duration: 0.5, ease: "linear" },
  },
};


const AlakazamAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex w="100%" justify="center" align="center" h="400px">
      <Flex
        as={motion.div}
        variants={variants}
        animate={isOpen ? "open" : "closed"}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        position="relative"
        border="1px solid black"
        boxShadow="md"
        borderRadius="10px"
        w="200px"
        h="100px"
        bg="#6f5d00"
        align="center"
        justify="center"
      >
        <Flex
          as={motion.div}
          variants={imageVariants}
          animate={isOpen ? "open" : "closed"}
          w="200px"
          h="200px"
          borderRadius="10px"
          p="2px"
          position="absolute"
          //   bg="yellow"
          top="calc(0% - 100px)"
          left="calc(50% - 100px)"
        >
          <Image
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png"
            objectFit="cover"
            borderRadius="10px"
          />
        </Flex>

        <Flex
          as={motion.div}
          animate={isOpen ? "open" : "closed"}
          variants={textVariants}
          direction="column"
          justify="center"
          align="center"
          w="100%"
          mt="75px"
          pb="35px"
          px="20px"
          gap="10px"
        >
          <Flex w="80%" justify="space-between" align="center">
            <Flex direction="column">
              <Text>Alakazam</Text>
              <Tag
                colorScheme="pink"
                justifyContent="center"
                alignItems="center"
              >
                Psychic
              </Tag>
            </Flex>
            <Text>Nº 065</Text>
          </Flex>
          <Flex w="100%">
            <Flex direction="column" w="100%" gap="5px">
              <Text>Hp:</Text>
              <Text>Attack:</Text>
              <Text>Defense:</Text>
              <Text>SP-Attack:</Text>
              <Text>SP-Defense:</Text>
              <Text>Speed:</Text>
            </Flex>
            <Flex direction="column" h="100%" w="100%" gap="5px">
              <Progress value={55} max={262} h="24px" />
              <Progress value={50} max={262} h="24px" />
              <Progress value={45} max={262} h="24px" />
              <Progress value={135} max={262} h="24px" />
              <Progress value={95} max={262} h="24px" />
              <Progress value={120} max={262} h="24px" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AlakazamAnimation;

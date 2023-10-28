import { Box, Flex, Image, Text, Tag } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const variants = {
  open: {
    height: "fit-content",
    transition: { duration: 0.5, ease: "easeIn" },
  },
  closed: { height: "100px", transition: { duration: 0.5, ease: "easeIn" } },
};

const textVariants = {
  open: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  closed: { opacity: 0 },
};

const AlakazamAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex w="100%" justify="center" align="center" h="600px">
      <Flex
        as={motion.div}
        variants={variants}
        animate={isOpen ? "open" : "closed"}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        position="relative"
        borderRadius="10px"
        w="400px"
        h="100px"
        bg="#6f5d00"
        align="center"
        justify="center"
      >
        <Flex
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
          mt="100px"
          pb="35px"
          px="20px"
          gap="10px"
        >
          <Text textAlign="center">
            It has an incredibly high level of intelligence. Some say that
            Alakazam remembers everything that ever happens to it, from birth
            till death.
          </Text>
          <Box
            w="100%"
            border="2px"
            borderRadius="lg"
            padding="2"
            boxShadow="md"
          >
            <Flex justifyContent="space-between">
              <Text fontWeight="semibold">Height</Text>
              <Text>4' 11"</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text fontWeight="semibold">Weight</Text>
              <Text>105.8 lbs</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text fontWeight="semibold">Gender</Text>
              <Box>
                <Text as="span" mr="2">
                  ♂
                </Text>
                <Text as="span">♀</Text>
              </Box>
            </Flex>
            <Flex justifyContent="space-between" mt="2">
              <Text fontWeight="semibold">Category</Text>
              <Text>Psi</Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AlakazamAnimation;

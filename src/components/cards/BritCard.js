import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const textVariant = {
  initial: {
    color: "white",
  },
  hovered: {
    color: "#64ffda",
  },
};

const BritCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      direction="column"
      as={motion.div}
      gap="20px"
      w="100%"
      bg="#112240"
      color="white"
      p="20px"
      borderRadius="5px"
      cursor="pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex justify="space-between" align="center">
        <AiOutlineFolder color="#64ffda" size={30} />
        <Flex as={motion.div} whileHover={{ color: "#64ffda" }}>
          <Link href={data.github}>
            <FiGithub />
          </Link>
        </Flex>
      </Flex>
      <Flex direction="column" gap="10px" w="100%">
        <Text
          fontSize="22px"
          fontWeight="semibold"
          as={motion.div}
          variants={textVariant}
          animate={isHovered ? "hovered" : "initial"}
        >
          {data.title}
        </Text>
        <Text fontSize="15px">{data.description}</Text>
      </Flex>
      <Flex gap="5px">
        {data.stacks.map((text, index) => (
          <Text fontSize="11px" key={index}>
            {text}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default BritCard;

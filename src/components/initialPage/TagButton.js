import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const TagButton = ({ tag }) => {
  return (
    <Link href={`/${tag}`}>
      <Flex
        as={motion.div}
        borderRadius="100"
        border="2px solid #313370"
        w="150px"
        h="40px"
        justify="center"
        align="center"
        whileHover={{ border: "2px solid green" }}
      >
        <Text textTransform="capitalize" color="#313370">
          {tag}
        </Text>
      </Flex>
    </Link>
  );
};

export default TagButton;

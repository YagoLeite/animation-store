import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const ButtonPage = () => {
  return (
    <Link href={"/all?page=1"} _hover={{ textDecoration: "none" }}>
      <Flex
        as={motion.div}
        whileHover={{ boxShadow: "0px 0px 5px #64ffda", y: -2 }}
        borderRadius="5px"
        border="2px #64ffda solid"
        w="130px"
        h="55px"
        align="center"
        justify="center"
        bg="#050d12"
      >
        Get started!
      </Flex>
    </Link>
  );
};

export default ButtonPage;

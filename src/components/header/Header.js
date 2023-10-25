import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <Flex
      w="100%"
      position="sticky"
      top="0"
      h="70px"
      zIndex={2}
      bg="#141517"
      gap="30px"
      px="20px"
      align="center"
      justify="space-between"
    >
      <Link href="/">Animation Store</Link>
      <Flex gap="10px" justify="center" align="center">
        <motion.div whileHover={{ scale: 1.3, color: "pink" }}>
          <Link passHref legacyBehavior href="https://github.com/YagoLeite">
            <a target="_blank">
              <AiFillGithub size="20px" />
            </a>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3, color: "pink" }}>
          <Link
            passHref
            legacyBehavior
            href="https://www.linkedin.com/in/yagoleite/"
          >
            <a target="_blank">
              <AiFillLinkedin size="20px" />
            </a>
          </Link>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default Header;

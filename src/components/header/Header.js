import { Box, Flex, Button, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import MobileSidebar from "../sidebar/MobileSidebar";
import { useRouter } from "next/router";

const Header = ({ isToggleMenuOpen, toggleHandler, setIsToggleMenuOpen }) => {
  const query = useRouter();

  return (
    <Flex
      w="100%"
      position="sticky"
      top="0"
      h="70px"
      zIndex={10}
      bg="#141517"
      gap="30px"
      px="20px"
      align="center"
      justify="space-between"
    >
      {query.route !== "/" && (
        <Box display={["block", "block", "none", "none", "none"]}>
          <Button
            display={["block", "block", "none", "none", "none"]}
            _hover={{ color: "gray.300" }}
            onClick={toggleHandler}
            variant="ghost"
          >
            <FaBars size={30} color="white" />
          </Button>

          {isToggleMenuOpen && (
            <MobileSidebar
              isOpen={isToggleMenuOpen}
              setIsOpen={setIsToggleMenuOpen}
            />
          )}
        </Box>
      )}
      <Link href="/">
        <Flex justify="center" align="center">
          {/* <Image
            src="/Logo.svg"
            alt="logo"
            h="100%"
            w="100%"
            objectFit="cover"
          /> */}
          <Text>Animation Store</Text>
        </Flex>
      </Link>
      <Flex gap="10px" justify="center" align="center">
        <motion.div whileHover={{ scale: 1.3, color: "#64ffda" }}>
          <Link passHref legacyBehavior href="https://github.com/YagoLeite">
            <a target="_blank">
              <AiFillGithub size="20px" />
            </a>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3, color: "#64ffda" }}>
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

import { tags } from "@/data";
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import SidebarBtn from "./SidebarBtn";

const variants = {
  open: {
    width: "240px",
    transition: { duration: 0.5, ease: "easeIn" },
  },
  closed: { width: "65px", transition: { duration: 0.5, ease: "easeIn" } },
};

const textVariants = {
  open: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  closed: { opacity: 0 },
};

const Sidebar = ({ isOpen, setIsOpen, ...rest }) => {
  return (
    <Flex
      as={motion.ul}
      direction="column"
      position="sticky"
      top="70px"
      gap="10px"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      h="calc(100vh - 70px)"
      w="240px"
      {...rest}
    >
      {/* <Flex onClick={() => setIsOpen((prev) => !prev)}>olá</Flex> */}
      {tags.map((tag, index) => {
        return (
          <SidebarBtn
            isOpen={isOpen}
            textVariants={textVariants}
            url={tag}
            index={index}
          />
        );
      })}
    </Flex>
  );
};

export default Sidebar;

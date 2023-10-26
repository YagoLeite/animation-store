import { tags } from "@/data";
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

const variants = {
  open: {
    width: "240px",
    transition: { duration: 0.5, ease: "easeIn" },
  },
  closed: { width: "65px", transition: { duration: 0.5, ease: "easeIn" } },
};

const textVariants = {
  open: {
    opacity: 1,
    display: "block",
    transition: { delay: 0.5, duration: 1 },
  },
  closed: { opacity: 0, display: "none" },
};
// const textVariants = {
//   open: { opacity: 1, width: "auto", transition: { delay: 0.5, duration: 1 } },
//   closed: { opacity: 0, width: 0, transition: { duration: 0 } },
// };

const AnimSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Flex w="500px" direction="column" bg="#010914">
      <Flex justify="center" align="center" w="100%" h="70px">
        <Text>Header</Text>
      </Flex>
      <Flex w="100%">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Flex w="100%" p="15px">
          <Flex
            w="100%"
            border="1px solid white"
            align="center"
            justify="center"
            onClick={() => setIsOpen((prev) => !prev)}
            cursor="pointer"
            direction="column"
            gap="20px"
          >
            <Text>{isOpen ? "Close Sidebar" : "Open Sidebar"}</Text>
            <Text>Your component goes here</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <Flex
      as={motion.ul}
      direction="column"
      position="sticky"
      px="8px"
      top="70px"
      gap="10px"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      w="240px"
      bg="#010914"
    >
      {tags.map((tag, index) => {
        return (
          <SidebarButton
            isOpen={isOpen}
            textVariants={textVariants}
            text={tag}
            index={index}
            setIsOpen={setIsOpen}
          />
        );
      })}
    </Flex>
  );
}

function SidebarButton({ isOpen, setIsOpen, textVariants, text, index }) {
  return (
    <li
      key={index}
      style={{
        listStyle: "none",
        width: "100%",
        // padding: "0px 20px",
        cursor: "pointer",
      }}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <Flex
        as={motion.div}
        h="50px"
        borderRadius="10px"
        gap="13px"
        w="100%"
        px="15px"
        bg="transparent linear-gradient(180deg, #8B98A9 0%, #0F161C 100%) 0% 0% no-repeat padding-box"
        justify="left"
        align="center"
      >
        <Flex h="18px" w="18px" align="center" justify="center">
          <AiFillGithub size="100%" />
        </Flex>
        <Text
          as={motion.div}
          animate={isOpen ? "open" : "closed"}
          textTransform="capitalize"
          variants={textVariants}
          fontSize="15px"
        >
          {text}
        </Text>
      </Flex>
    </li>
  );
}

export default AnimSidebar;

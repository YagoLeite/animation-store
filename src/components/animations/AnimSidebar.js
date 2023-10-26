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
  open: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  closed: { opacity: 0 },
};

const btnVariants = {
  open: {
    justify: "space-between",
    transition: { delay: 0.5, duration: 1 },
  },
  close: {
    justify: "center",
    transition: { delay: 0.5, duration: 1 },
  },
};

const AnimSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Flex w="500px" bg="orange">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </Flex>
  );
};

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <Flex
      as={motion.ul}
      direction="column"
      position="sticky"
      top="70px"
      gap="10px"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      //   h="calc(100vh - 70px)"
      w="240px"
      bg="pink"
    >
      {/* <Flex onClick={() => setIsOpen((prev) => !prev)}>olá</Flex> */}
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
        // whileHover={{
        //   x: 15,
        //   scale: 1.1,
        //   transition: {
        //     duration: 0.2,
        //     ease: "linear",
        //   },
        // }}
        // animate={isOpen ? "open" : "closed"}
        // variants={btnVariants}
        h="50px"
        borderRadius="10px"
        px="15px"
        bg="transparent linear-gradient(180deg, #8B98A9 0%, #0F161C 100%) 0% 0% no-repeat padding-box"
        // justify={isOpen ? "space-between" : "center"}
        justify="space-between"
        align="center"
      >
        <Text
          as={motion.div}
          animate={isOpen ? "open" : "closed"}
          textTransform="capitalize"
          variants={textVariants}
          fontSize="15px"
          //   fontWeight={router.query.tag === url ? 600 : 400}
          //para remover o texto rapidamente quando a sidebar fecha \/\/\/\/
          display={isOpen ? "flex" : "none"}
          //   color={router.query.tag === url ? "white" : "#ffffffa4"}
        >
          {text}
        </Text>
        <AiFillGithub height="50px" width="50px" />
      </Flex>
    </li>
  );
}

export default AnimSidebar;

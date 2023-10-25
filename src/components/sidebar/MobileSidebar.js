import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import SidebarBtn from "./SidebarBtn";
import { motion } from "framer-motion";
import { tags } from "@/data";

const variants = {
  open: {
    width: "100%",
    transition: { duration: 0.3, ease: "easeIn" },
  },
  closed: { width: "65px", transition: { duration: 0.5, ease: "easeIn" } },
};

const MobileSidebar = ({ isOpen, setIsOpen, ...rest }) => {
  return (
    <Flex
      {...rest}
      as={motion.div}
      position="absolute"
      display={["flex", "flex", "none", "none", "none"]}
      w="200px"
      top="0"
      left="0"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      h="100vh"
      direction="column"
      bg="#010914"
      color="white"
      px="20px"
      zIndex="6"
    >
      <Flex h="30px" justify={"space-between"} my="20px">
        <Text letterSpacing={"1.5px"} color="#FFFFFF" opacity={"1"}>
          Tags
        </Text>
        <Box onClick={() => setIsOpen((prev) => !prev)} cursor="pointer">
          {/* <CloseIcon h="14px" w="14px" /> */}
          <AiOutlineClose />
        </Box>
      </Flex>
      <Divider borderColor="white" w="100%" opacity={0.15} mb="20px" />
      <Flex direction="column" justify="space-between" h="100%" gap="10px">
        <Flex as="ul" direction="column" gap="10px">
          {tags.map((item, index) => {
            return <SidebarBtn key={index} isOpen={isOpen} url={item} />;
          })}
        </Flex>
        {/* <Flex w="100%" mb="25px" className="my-first-step">
          <SideBtn
            Icon={HelpIcon}
            isOpen={isOpen}
            text="Precisa de ajuda"
            url=""
            onClick={() => setIsModalOpen(true)}
          />

        </Flex> */}
      </Flex>
    </Flex>
  );
};

export default MobileSidebar;

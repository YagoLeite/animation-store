import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const SidebarBtn = ({ url, isOpen, textVariants, index }) => {
  return (
    <li
      key={index}
      style={{ listStyle: "none", width: "100%", padding: "0px 20px" }}
    >
      <Link href={url}>
        <Text
          as={motion.div}
          animate={isOpen ? "open" : "closed"}
          variants={textVariants}
          fontSize="15px"
          fontWeight="400"
          //para remover o texto rapidamente quando a sidebar fecha \/\/\/\/
          display={isOpen ? "flex" : "none"}
        >
          {url}
        </Text>
      </Link>
    </li>
  );
};

export default SidebarBtn;

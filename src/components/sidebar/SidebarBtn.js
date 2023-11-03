import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SidebarBtn = ({ url, isOpen, textVariants, index }) => {
  const router = useRouter();
  return (
    <Link href={`${url}?page=1`}>
      <li
        key={index}
        style={{
          listStyle: "none",
          width: "100%",
          padding: "0px 20px",
          cursor: "pointer",
        }}
      >
        <Flex
          as={motion.div}
          whileHover={{
            x: 15,
            scale: 1.1,
            transition: {
              duration: 0.2,
              ease: "linear",
            },
          }}
        >
          <Text
            as={motion.div}
            animate={isOpen ? "open" : "closed"}
            textTransform="capitalize"
            variants={textVariants}
            fontSize="15px"
            fontWeight={router.query.tag === url ? 600 : 400}
            //para remover o texto rapidamente quando a sidebar fecha \/\/\/\/
            display={isOpen ? "flex" : "none"}
            color={router.query.tag === url ? "white" : "#ffffffa4"}
          >
            {url}
          </Text>
        </Flex>
      </li>
    </Link>
  );
};

export default SidebarBtn;

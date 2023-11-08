import { useProgress } from "@/hooks/useProgress";
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const variants = {
  hover: {
    backgroundPosition: "0%",
    // boxShadow: "0px 2px 5px #64ffda",
    scale: 1.1,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "linear",
    },
  },
  initial: {
    backgroundPosition: "100%",
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "linear",
    },
  },
};

const ButtonPage = ({ text }) => {
  const { setIsLoading } = useProgress();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      href={"/all?page=1"}
      _hover={{ textDecoration: "none" }}
      onClick={() => setIsLoading(true)}
      style={{ width: "100%", height: "100%" }}
    >
      <Flex
        as={motion.div}
        variants={variants}
        initial="initial"
        animate={isHovering ? "hover" : "initial"}
        whileHover={{ boxShadow: "0px 2px 5px #64ffda", y: -2 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        whileTap={{ scale: 0.9 }}
        borderRadius="5px"
        border="2px #64ffda solid"
        w="100%"
        h="100%"
        align="center"
        justify="center"
        // bg="#050d12"
        background="linear-gradient(to right, #081117 50%, #050d12 50%)"
        backgroundSize="200%"
      >
        <Text fontSize="20px" fontFamily="Lekton">
          {text}
        </Text>
      </Flex>
    </Link>
  );
};

export default ButtonPage;

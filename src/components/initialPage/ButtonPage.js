import { useProgress } from "@/hooks/useProgress";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const ButtonPage = () => {
  const { setIsLoading } = useProgress();

  return (
    <Link
      href={"/all?page=1"}
      _hover={{ textDecoration: "none" }}
      onClick={() => setIsLoading(true)}
    >
      <Flex
        as={motion.button}
        whileHover={{ boxShadow: "0px 2px 5px #64ffda", y: -2 }}
        whileTap={{ scale: 0.9 }}
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

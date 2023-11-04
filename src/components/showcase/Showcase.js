import { Flex, Text, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsCodeSlash, BsShare } from "react-icons/bs";
import NewText from "../initialPage/NewText";
import slugify from "react-slugify";
import { useUrl } from "nextjs-current-url";
import Link from "next/link";

const Showcase = ({ data, delay }) => {
  const [isCoding, setIsCoding] = useState(false);
  const { href: currentUrl } = useUrl() ?? {};
  const toast = useToast();
  const ComponentToRender = data?.component;
  const isNew = data?.tags.includes("new");

  const handleCopyClick = async () => {
    const codeToCopy = `${currentUrl.split("#")[0]}#${slugify(data.name)}`;

    try {
      await navigator.clipboard.writeText(codeToCopy);
      toast({
        title: "Link copied!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Failed to copy!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        const id = window.location.hash.substring(1); // remove the '#' symbol
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }
    }
  }, []);

  return (
    <Flex
      id={slugify(data.name)}
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        type: "ease",
        transition: {
          delay: delay ? delay : 0,
          duration: 0.5,
        },
      }}
      w="100%"
      h="fit-content"
      direction="column"
      borderWidth="1px"
      borderColor="black"
      borderRadius="10px 10px 0px 0px"
      borderStyle="solid"
      boxShadow="md"
      color="white"
    >
      {/* showcase header */}
      <Flex
        w="100%"
        h="40px"
        p="8px"
        justify="space-between"
        borderBottom="1px solid black"
      >
        <Flex gap="15px" align="center" justify="center">
          <Text fontSize="15px" fontWeight="bold">
            {data?.name}
          </Text>
          {isNew && <NewText />}
        </Flex>

        <Flex gap="10px" align="center">
          <Flex
            gap="8px"
            align="center"
            justify="center"
            cursor="pointer"
            onClick={handleCopyClick}
          >
            <BsShare />
            <Text fontSize="12px" fontWeight="800">
              Share
            </Text>
          </Flex>

          <Flex
            onClick={() => setIsCoding((prev) => !prev)}
            gap="8px"
            align="center"
            justify="center"
            cursor="pointer"
          >
            <BsCodeSlash />
            <Text fontSize="12px" fontWeight="800">
              Code
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justify={isCoding ? "left" : "center"}
        align="center"
        py="20px"
        bg="rgb(62, 62, 62)"
        h="fit-content"
        p={isCoding ? "0px" : "30px"}
      >
        {ComponentToRender && <ComponentToRender isCoding={isCoding} />}
      </Flex>
    </Flex>
  );
};

export default Showcase;

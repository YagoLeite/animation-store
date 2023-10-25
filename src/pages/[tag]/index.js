import Header from "@/components/header/Header";
import { InfiniteTags } from "@/components/initialPage/Hero";
import Showcase from "@/components/showcase/Showcase";
import Sidebar from "@/components/sidebar/Sidebar";
import { data, tags } from "@/data";
import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const index = () => {
  const { query, back } = useRouter();
  console.log(query);
  const filteredData = data.filter((anim) => anim.tags.includes(query.tag));
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Flex direction="column" bg="#141517" color="#ccd6f6" h="100%">
      <Header />
      <Flex>
        <Flex>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </Flex>
        <Flex direction="column" gap="20px" px="20px" w="100%">
          {filteredData?.map((item) => {
            return <Showcase data={item} />;
          })}
          <Showcase />
          <Showcase />
          <Showcase />
          <Showcase />
        </Flex>
      </Flex>
    </Flex>
  );
};
{
  /* <Flex w="100%" maxW="1400px" direction="column">
  <Header />
  <Text>{query.tag} category!</Text>

  <BritComponent
    data={data.filter((item) => item.tags.includes(query.tag))}
  />
</Flex>
<Flex
  w="100%"
  align="center"
  justify="center"
  maxW="800px"
  direction="column"
>
  <Text>For more tags!</Text>
  <InfiniteTags tags={tags} />
</Flex> */
}

function BritCard({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  const textVariant = {
    initial: {
      color: "#FFFFFF",
    },
    hovered: {
      color: "#64ffda",
    },
  };

  return (
    <Link href={data.redirect}>
      <Flex
        direction="column"
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          type: "ease",
          transition: {
            duration: 0.5,
          },
        }}
        gap="20px"
        w="100%"
        bg={"#112240"}
        color="white"
        p="20px"
        borderRadius="5px"
        cursor="pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Flex justify="space-between" align="center">
          <AiOutlineFolder color={"#64ffda"} size={30} />
          <Flex as={motion.div} whileHover={{ color: "#64ffda" }}>
            <Link href={data.github}>
              <FiGithub />
            </Link>
          </Flex>
        </Flex>
        <Flex direction="column" gap="10px" w="100%">
          <Text
            fontSize="22px"
            fontWeight="semibold"
            as={motion.div}
            variants={textVariant}
            animate={isHovered ? "hovered" : "initial"}
          >
            {data.title}
          </Text>
          <Text fontSize="15px" color={"#FFFFFF"}>
            {data.description}
          </Text>
        </Flex>
        <Flex gap="5px">
          {data.stacks.map((text, index) => (
            <Text
              fontSize="11px"
              key={index}
              color={"#64ffda"}
              textTransform="capitalize"
            >
              {text}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Link>
  );
}

function BritComponent({ data }) {
  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
      gap="20px"
      w="100%"
      maxW="1400px"
    >
      {data.map((item, index) => {
        return (
          <Flex as={motion.div} whileHover={{ y: -10 }}>
            <BritCard key={index} data={item.cardData} />
          </Flex>
        );
      })}
    </Grid>
  );
}

export default index;

import { Flex, Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useControls } from "leva";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import CodePlayground from "./CodePlayground";

const britData = {
  title: "World Cup Simulation",
  description:
    "Lore ipsiumLore ipsium  Lore ipsiumLore ipsiumLore ipsiumLore ipsium Lore ipsiumLore ipsium Lore ipsiumLore ipsium",
  github: "www.github.com",
  live: "",
  stacks: ["Next.js", "Chakra UI"],
};

const BritCard = ({ data, controler }) => {
  const [isHovered, setIsHovered] = useState(false);

  const textVariant = {
    initial: {
      color: controler.TextColor,
    },
    hovered: {
      color: controler.HighLightColor,
    },
  };

  return (
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
      bg={controler.BackgroundColor}
      color="white"
      p="20px"
      borderRadius="5px"
      cursor="pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex justify="space-between" align="center">
        <AiOutlineFolder color={controler.HighLightColor} size={30} />
        <Flex as={motion.div} whileHover={{ color: controler.HighLightColor }}>
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
        <Text fontSize="15px" color={controler.TextColor}>
          {data.description}
        </Text>
      </Flex>
      <Flex gap="5px">
        {data.stacks.map((text, index) => (
          <Text fontSize="11px" key={index} color={controler.HighLightColor}>
            {text}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

const BritComponent = () => {
  const controler = useControls({
    HighLightColor: "#64ffda",
    BackgroundColor: "#112240",
    TextColor: "#FFFFFF",
    Amount: { value: 6, min: 1, max: 20, step: 1 },
    ContainerWidth: { value: "100%", max: "100%" },
  });

  return (
    <Flex direction="column">
      <Flex w="100%" align="center" justify="center">
        <Flex w={controler.ContainerWidth}>
          <Grid
            templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
            gap="20px"
            w="100%"
          >
            {Array.from({ length: controler.Amount }).map((item, index) => {
              return (
                <Flex as={motion.div} whileHover={{ y: -10 }}>
                  <BritCard key={index} data={britData} controler={controler} />
                </Flex>
              );
            })}
          </Grid>
        </Flex>
      </Flex>
      <CodePlayground code={generateCode()} />
    </Flex>
  );
};

function generateCode() {
  return `const Card = ({ data, controler }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const textVariant = {
      initial: {
        color: controler.TextColor,
      },
      hovered: {
        color: controler.HighLightColor,
      },
    };
  
    return (
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
        bg={controler.BackgroundColor}
        color="white"
        p="20px"
        borderRadius="5px"
        cursor="pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Flex justify="space-between" align="center">
          <AiOutlineFolder color={controler.HighLightColor} size={30} />
          <Flex as={motion.div} whileHover={{ color: controler.HighLightColor }}>
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
          <Text fontSize="15px" color={controler.TextColor}>
            {data.description}
          </Text>
        </Flex>
        <Flex gap="5px">
          {data.stacks.map((text, index) => (
            <Text
              fontSize="11px"
              key={index}
              color={controler.HighLightColor}
            >
              {text}
            </Text>
          ))}
        </Flex>
      </Flex>
    );
  };
  
  const Container = () => {
    const controler = useControls({
      HighLightColor: "#64ffda",
      BackgroundColor: "#112240",
      TextColor: "#FFFFFF",
      Amount: { value: 6, min: 1, max: 20, step: 1 },
      ContainerWidth: { value: "100%", max: "100%" },
    });
  
    return (
      <Flex w="100%" align="center" justify="center">
        <Flex w={controler.ContainerWidth}>
          <Grid
            templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
            gap="20px"
            w="100%"
          >
            {Array.from({ length: controler.Amount }).map((item, index) => {
              return (
                <Flex as={motion.div} whileHover={{ y: -10 }}>
                  <Card key={index} data={data} controler={controler} />
                </Flex>
              );
            })}
          </Grid>
        </Flex>
      </Flex>
    );
  };`;
}

export default BritComponent;

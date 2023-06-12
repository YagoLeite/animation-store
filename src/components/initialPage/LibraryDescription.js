import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const stacks = [
  {
    title: "Chakra UI",
    description: `Chakra UI is a simple, modular and accessible component library that
provides the building blocks for building React applications
swiftly. It offers the ability to create consistent, accessible, and
appealing interfaces, while also enhancing user experience with a
responsive and themeable UI.`,
    link: "",
  },
  {
    title: "Framer Motion",
    description: `Framer Motion is a production-ready motion library for React. It is
    designed to help create fluid animations and transitions between
    elements in your application. With gesture recognition, simple
    animation APIs, and performance improvements over other libraries,
    Framer Motion is an excellent choice for implementing complex
    animations.`,
    link: "",
  },
  {
    title: "Leva",
    description: `Leva is a lightweight and non-intrusive React tool designed for
    aesthetic GUI manipulation of component states. It is perfect for
    fine-tuning animations and other dynamic state values. Leva enables
    real-time adjustments directly from the UI, offering an efficient
    method for exploring, manipulating, and visualizing data and
    animations in your React applications.`,
    link: "",
  },
  {
    title: "React Ace",
    description: `React Ace is a set of React components for Ace / Brace code editor. Ace is a standalone code editor written in JavaScript, allowing for syntax highlighting, code completion, and other programming features. React Ace makes it easy to incorporate this robust editor into a React application. By integrating React Ace into our toolset, we are given easy and direct access to the code, enabling real-time editing and interaction within the application itself.`,
    link: "",
  },
];

export default function LibraryDescription() {
  return (
    <Flex direction="column" p={4} gap={6}>
      <Heading mb={4}>Technologies used</Heading>

      <Flex direction={["column", "column", "column", "row"]} gap="20px">
        {stacks.map((item, index) => {
          return <CardContainer key={index} data={item} />;
        })}
      </Flex>
    </Flex>
  );
}

function CardContainer({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  const textVariant = {
    initial: {
      color: "inherit",
    },
    hovered: {
      color: "red",
    },
  };
  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        type: "ease",
        transition: {
          delay: 0.3,
          duration: 0.5,
        },
      }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      direction="column"
      gap={4}
      border="1px solid #ccd6f6"
      borderRadius="5px"
      p="10px"
    >
      <Heading
        fontSize={["24px"]}
        as={motion.div}
        variants={textVariant}
        animate={isHovered ? "hovered" : "initial"}
      >
        {data.title}
      </Heading>
      <Text>{data.description}</Text>
    </Flex>
  );
}

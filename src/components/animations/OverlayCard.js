import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const overlayVariantsTwo = {
  idle: { top: "100%", transition: { duration: 0.4 } },
  hovered: { top: "50%", transition: { duration: 0.4 } },
};
const overlayVariantsOne = {
  idle: { left: "100%", transition: { duration: 0.4 } },
  hovered: { left: "0%", transition: { delay: 0.4, duration: 0.4 } },
};

const imgVariants = {
  idle: {
    scale: 1,
    transition: { duration: 0.4 },
  },
  hovered: {
    scale: 1.1,
    transition: { duration: 0.4 },
  },
};

const textVariants = {
  idle: { opacity: 0 },
  hovered: { opacity: 1, transition: { delay: 0.5 } },
};

const textVariantsTwo = {
  idle: { opacity: 0 },
  hovered: { opacity: 1, transition: { delay: 0.9 } },
};

const OverlayCard = ({ isCoding }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex
          as={motion.div}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          position="relative"
          direction="column"
          bg="green"
          w={["300px", "400px", "500px", "700px"]}
          h="400px"
          jusitfy="center"
          align="center"
          overflow="hidden"
          cursor="pointer"
        >
          <Image
            src="https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/16:9/w_1600%2Cc_limit/gettyimages-1146431497.jpg"
            as={motion.img}
            variants={imgVariants}
            initial="idle"
            animate={isHovering ? "hovered" : "idle"}
            position="aboslute"
            top="0"
            objectFit="cover"
            w={["300px", "400px", "500px", "700px"]}
            h="400px"
          />
          <Flex
            as={motion.div}
            variants={overlayVariantsTwo}
            initial="idle"
            animate={isHovering ? "hovered" : "idle"}
            position="absolute"
            top="100%"
            w={["300px", "400px", "500px", "700px"]}
            h="200px"
            background="rgba(0, 0, 0, 0.5)"
            direction="column"
            p="10px"
            gap="10px"
          >
            <Flex w="100%" align="center" justify="center" px="10px" my="auto">
              <Text
                as={motion.text}
                variants={textVariants}
                initial="idle"
                animate={isHovering ? "hovered" : "idle"}
                fontSize={["13px", "14px", "16px"]}
                textAlign="center"
              >
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s
              </Text>
            </Flex>
          </Flex>
          <Flex
            as={motion.div}
            variants={overlayVariantsOne}
            initial="idle"
            animate={isHovering ? "hovered" : "idle"}
            position="absolute"
            top="0"
            w={["300px", "400px", "500px", "700px"]}
            h="200px"
            background="rgba(0, 0, 0, 0.5)"
          >
            <Flex w="100%" align="center" justify="center">
              <Text
                as={motion.text}
                variants={textVariantsTwo}
                initial="idle"
                animate={isHovering ? "hovered" : "idle"}
                fontSize={["55px", "60px"]}
                fontWeight="bold"
              >
                Your Title!
              </Text>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};

function code() {
  return `
import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const overlayVariantsTwo = {
  idle: { top: "100%", transition: { duration: 0.4 } },
  hovered: { top: "50%", transition: { duration: 0.4 } },
};
const overlayVariantsOne = {
  idle: { left: "100%", transition: { duration: 0.4 } },
  hovered: { left: "0%", transition: { delay: 0.4, duration: 0.4 } },
};

const imgVariants = {
  idle: {
    scale: 1,
    transition: { duration: 0.4 },
  },
  hovered: {
    scale: 1.1,
    transition: { duration: 0.4 },
  },
};

const textVariants = {
  idle: { opacity: 0 },
  hovered: { opacity: 1, transition: { delay: 0.5 } },
};

const textVariantsTwo = {
  idle: { opacity: 0 },
  hovered: { opacity: 1, transition: { delay: 0.9 } },
};

const OverlayCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Flex
      as={motion.div}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      position="relative"
      direction="column"
      bg="green"
      w={["300px", "400px", "500px", "700px"]}
      h="400px"
      jusitfy="center"
      align="center"
      overflow="hidden"
      cursor="pointer"
    >
      <Image
        src="https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/16:9/w_1600%2Cc_limit/gettyimages-1146431497.jpg"
        as={motion.img}
        variants={imgVariants}
        initial="idle"
        animate={isHovering ? "hovered" : "idle"}
        position="aboslute"
        top="0"
        objectFit="cover"
        w={["300px", "400px", "500px", "700px"]}
        h="400px"
      />
      <Flex
        as={motion.div}
        variants={overlayVariantsTwo}
        initial="idle"
        animate={isHovering ? "hovered" : "idle"}
        position="absolute"
        top="100%"
        w={["300px", "400px", "500px", "700px"]}
        h="200px"
        background="rgba(0, 0, 0, 0.5)"
        direction="column"
        p="10px"
        gap="10px"
      >
        <Flex w="100%" align="center" justify="center" px="10px" my="auto">
          <Text
            as={motion.text}
            variants={textVariants}
            initial="idle"
            animate={isHovering ? "hovered" : "idle"}
            fontSize={["13px", "14px", "16px"]}
            textAlign="center"
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
          </Text>
        </Flex>
      </Flex>
      <Flex
        as={motion.div}
        variants={overlayVariantsOne}
        initial="idle"
        animate={isHovering ? "hovered" : "idle"}
        position="absolute"
        top="0"
        w={["300px", "400px", "500px", "700px"]}
        h="200px"
        background="rgba(0, 0, 0, 0.5)"
      >
        <Flex w="100%" align="center" justify="center">
          <Text
            as={motion.text}
            variants={textVariantsTwo}
            initial="idle"
            animate={isHovering ? "hovered" : "idle"}
            fontSize={["55px", "60px"]}
            fontWeight="bold"
          >
            Your Title!
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OverlayCard;
`;
}

export default OverlayCard;

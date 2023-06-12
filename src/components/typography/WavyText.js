import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useControls } from "leva";

const SingleLetter = ({ letter, size, controler }) => {
  const controls = useAnimation();
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  const bump = {
    visible: {
      scaleX: [1, 0.85, 1.15, 0.9, 1.05, 1],
      scaleY: [1, 1.15, 0.85, 1.05, 0.9, 1],
      y: ["0px", "-8px", "4px", "-4px", "2px", "0px"],
      transition: {
        duration: controler.Duration,
        type: "spring",
      },
    },
  };

  return (
    <Text
      as={motion.div}
      color="#4169E1"
      // fontFamily="open-sans"
      fontSize={size}
      animate={controls}
      onHoverStart={() => {
        if (!isAnimationPlaying) {
          setIsAnimationPlaying(true);
          controls.start(bump.visible);
        }
      }}
      onAnimationComplete={() => setIsAnimationPlaying(false)}
    >
      {letter}
    </Text>
  );
};

const TextContainer = ({ text, delayDuration, fontSize, controler }) => {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delayDuration },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: -40,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
      },
    },
  };

  return (
    <Flex
      variants={container}
      initial="hidden"
      animate="visible"
      justify="left"
      overflow="hidden"
      as={motion.div}
    >
      {text.split("").map((letter, index) => {
        return (
          <Flex as={motion.div} variants={child} key={index}>
            {letter === " " ? (
              <Text opacity={0}>aa</Text>
            ) : (
              <SingleLetter
                letter={letter}
                size={fontSize}
                controler={controler}
              />
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};

const WavyText = () => {
  const controler = useControls({
    Text: { value: "Type your text" },
    FontSize: { value: 50, min: 10, max: 100, step: 1 },
    Duration: { value: 1, min: 0.1, max: 3, step: 0.1 },
  });
  return (
    <Flex>
      <TextContainer
        key={controler.Text}
        text={controler.Text}
        delayDuration={0.5}
        fontSize={controler.FontSize}
        controler={controler}
      />
    </Flex>
  );
};

export default WavyText;

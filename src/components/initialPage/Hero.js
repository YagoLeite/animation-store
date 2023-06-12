import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        type: "ease",
        transition: {
          delay: 0.7,
          duration: 0.5,
        },
      }}
      direction="column"
      align="center"
      justify="center"
      h="calc(100vh - 80px)"
      w="100vw"
      gap="20px"
      px="30px"
    >
      <WavyText
        text="Animation Store"
        delayDuration={1.2}
        fontSize={["30px", "40px", "90px", "120px"]}
      />
      <Text fontSize="40px">Animated components for developers</Text>
    </Flex>
  );
};

function SingleLetter({ letter, size }) {
  const controls = useAnimation();
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  const bump = {
    visible: {
      scaleX: [1, 0.85, 1.15, 0.9, 1.05, 1],
      scaleY: [1, 1.15, 0.85, 1.05, 0.9, 1],
      y: ["0px", "-8px", "4px", "-4px", "2px", "0px"],
      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

  return (
    <Text
      as={motion.div}
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
}

function TextContainer({ text, delayDuration, fontSize }) {
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
              <SingleLetter letter={letter} size={fontSize} />
            )}
          </Flex>
        );
      })}
    </Flex>
  );
}

function WavyText({ text, delayDuration, fontSize }) {
  return (
    <Flex>
      <TextContainer
        key={Math.random()}
        text={text}
        delayDuration={delayDuration}
        fontSize={fontSize}
      />
    </Flex>
  );
}

export default Hero;

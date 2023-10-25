import { tags } from "@/data";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import TagButton from "./TagButton";
import ButtonPage from "./ButtonPage";

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
      w="100%"
      gap="20px"
      px="30px"
    >
      <WavyText
        text="Animation Store"
        delayDuration={1.2}
        fontSize={["30px", "40px", "90px", "120px"]}
      />
      <Text fontSize="40px">Animated components for developers</Text>
      <ButtonPage />
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
      whileHover={{ color: "#64ffda" }}
      onAnimationComplete={() => setIsAnimationPlaying(false)}
      textShadow="5px 40px 10px rgba(0, 0, 0, 1.5)"
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

const variants = {
  animateRight: {
    x: [0, -150, -300],
    transition: {
      x: {
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      },
    },
  },
  animateLeft: {
    x: [-150, 0, 150],
    transition: {
      x: {
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      },
    },
  },
};

export function InfiniteTags({ tags }) {
  const doubledTags = [...tags, ...tags]; // duplicate the tags array

  return (
    <Flex
      direction="column"
      overflow="hidden"
      width="100%"
      justify="center"
      align="center"
      height="fit-container"
      gap="15px"
    >
      <Flex
        as={motion.div}
        variants={variants}
        animate="animateRight"
        initial={{ x: 0 }}
        gap="15px"
      >
        {doubledTags.map((tag, index) => (
          <TagButton tag={tag} key={index} />
        ))}
      </Flex>

      <Flex
        as={motion.div}
        variants={variants}
        animate="animateLeft"
        initial={{ x: -150 }}
        gap="15px"
      >
        {doubledTags.map((tag, index) => (
          <TagButton tag={tag} key={`second-${index}`} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Hero;

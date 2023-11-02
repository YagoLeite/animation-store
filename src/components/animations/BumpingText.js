import { Flex, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const SingleLetter = ({ letter, size }) => {
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
      // color="#4169E1"
      color="#64ffda"
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

const BumpingText = ({ isCoding }) => {
  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex>
          {"Animation Store".split("").map((letter, index) => {
            return (
              <Flex key={index} py="15px">
                {letter === " " ? (
                  <Text opacity={0}>aa</Text>
                ) : (
                  <SingleLetter
                    letter={letter}
                    size={["30px", "40px", "60px", "90px", "120px"]}
                  />
                )}
              </Flex>
            );
          })}
        </Flex>
      )}
    </>
  );
};

export default BumpingText;

function code() {
  return `
import { Flex, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

const SingleLetter = ({ letter, size }) => {
  const controls = useAnimation();
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  const bump = {
    visible: {
      // These values may vary depending on your font size
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
      color="#4169E1"
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

const BumpingText = () => {
  return (
    <Flex>
      {"Animation Store".split("").map((letter, index) => {
        return (
          <Flex key={index}>
            {letter === " " ? (
              <Text opacity={0}>aa</Text>
            ) : (
              <SingleLetter letter={letter} size={50} />
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default BumpingText;`;
}

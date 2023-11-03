import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillBehanceCircle,
} from "react-icons/ai";

import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const icons = [
  <AiFillGithub size="100%" />,
  <AiFillLinkedin size="100%" />,
  <AiFillFacebook size="100%" />,
  <AiFillInstagram size="100%" />,
  <AiFillBehanceCircle size="100%" />,
];

const findingAngles = (number) => {
  const interiorAngle = (360 / number) * (Math.PI / 180);
  let arrayOfAngles = [];
  for (let i = 1; i <= number; i++) {
    arrayOfAngles.push(i * interiorAngle);
  }
  return arrayOfAngles;
};

const arrayOfPositions = (array) => {
  return array.map((angle) => {
    return { x: Math.sin(angle) / 2, y: Math.cos(angle) / 2 };
  });
};

export const topAndLeft = (array) => {
  return array.map((position) => {
    return {
      left: (0.5 - position.x) * 100,
      top: (0.5 - position.y) * 100,
    };
  });
};

const containerVariant = {
  notToggled: {
    opacity: 0,
  },
  toggled: {
    opacity: 1,
    transition: { staggerChildren: 0.015 },
  },
};

const positions = topAndLeft(arrayOfPositions(findingAngles(5)));

const ToggleCircularBtns = ({ isCoding }) => {
  const [isToggled, setIsToggled] = useState(true);
  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex
          as={motion.div}
          position="relative"
          h="200px"
          w="200px"
          align="center"
          justify="center"
        >
          <Flex
            as={motion.div}
            variants={containerVariant}
            animate={
              isToggled
                ? {
                    rotate: 360,
                    transition: {
                      duration: 1,
                      ease: "linear",
                    },
                  }
                : {
                    rotate: -360,
                    transition: {
                      duration: 1,
                      ease: "linear",
                    },
                  }
            }
            position="absolute"
            h="100%"
            w="100%"
          >
            {positions.map((position, index) => {
              return (
                <Flex
                  as={motion.div}
                  animate={
                    isToggled
                      ? {
                          top: `calc(${position.top}% - 20px)`,
                          left: `calc(${position.left}% - 20px)`,
                          opacity: 1,
                          transition: {
                            duration: 1,
                            ease: "linear",
                          },
                        }
                      : {
                          top: `calc(50% - 20px)`,
                          left: `calc(50% - 20px)`,
                          opacity: 0,
                          transition: {
                            duration: 1,
                            ease: "linear",
                          },
                        }
                  }
                  whileHover={{ scale: 1.1 }}
                  h="40px"
                  w="40px"
                  background="radial-gradient(circle, rgba(86,83,139,1) 0%, rgba(3,3,28,1) 100%, rgba(0,212,255,1) 100%)"
                  position="absolute"
                  borderRadius="50%"
                  top={`calc(${position.top}% - 20px)`}
                  left={`calc(${position.left}% - 20px)`}
                  key={index}
                  p="5px"
                  align="center"
                  justify="center"
                  cursor="pointer"
                >
                  {icons[index]}
                </Flex>
              );
            })}
          </Flex>

          <Flex
            as={motion.div}
            initial={{ x: "-50%", y: "-50%" }}
            animate={{ x: "-50%", y: "-50%" }}
            whileHover={{ scale: 1.1, x: "-50%", y: "-50%" }}
            whileTap={{ scale: 0.9 }}
            h="70px"
            w="70px"
            borderRadius="50%"
            onClick={() => setIsToggled((prev) => !prev)}
            background="radial-gradient(circle, rgba(86,83,139,1) 0%, rgba(3,3,28,1) 100%, rgba(0,212,255,1) 100%)"
            position="absolute"
            top="50%"
            left="50%"
            zIndex="1"
            align="center"
            justify="center"
            cursor="pointer"
          >
            Toggle
          </Flex>
        </Flex>
      )}
    </>
  );
};

function code() {
  return `
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillBehanceCircle,
} from "react-icons/ai";

const icons = [
  <AiFillGithub size="100%" />,
  <AiFillLinkedin size="100%" />,
  <AiFillFacebook size="100%" />,
  <AiFillInstagram size="100%" />,
  <AiFillBehanceCircle size="100%" />,
];

const findingAngles = (number) => {
  const interiorAngle = (360 / number) * (Math.PI / 180);
  let arrayOfAngles = [];
  for (let i = 1; i <= number; i++) {
    arrayOfAngles.push(i * interiorAngle);
  }
  return arrayOfAngles;
};

const arrayOfPositions = (array) => {
  return array.map((angle) => {
    return { x: Math.sin(angle) / 2, y: Math.cos(angle) / 2 };
  });
};

export const topAndLeft = (array) => {
  return array.map((position) => {
    return {
      left: (0.5 - position.x) * 100,
      top: (0.5 - position.y) * 100,
    };
  });
};

const containerVariant = {
  notToggled: {
    opacity: 0,
  },
  toggled: {
    opacity: 1,
    transition: { staggerChildren: 0.015 },
  },
};

const positions = topAndLeft(arrayOfPositions(findingAngles(5)));

const ToggleCircularBtns = () => {
  const [isToggled, setIsToggled] = useState(true);
  return (
    <Flex
      as={motion.div}
      position="relative"
      h="200px"
      w="200px"
      align="center"
      justify="center"
    >
      <Flex
        as={motion.div}
        variants={containerVariant}
        animate={isToggled ? 'toggled' : 'notToggled'}
        position="absolute"
        h="100%"
        w="100%"
      >
        {positions.map((position, index) => {
          return (
            <Flex
              as={motion.div}
              animate={isToggled ? {
                top: \`calc(\${position.top}% - 20px)\`,
                left: \`calc(\${position.left}% - 20px)\`,
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: 'linear',
                },
              } : {
                top: 'calc(50% - 20px)',
                left: 'calc(50% - 20px)',
                opacity: 0,
                transition: {
                  duration: 1,
                  ease: 'linear',
                },
              }}
              whileHover={{ scale: 1.1 }}
              h="40px"
              w="40px"
              background="radial-gradient(circle, rgba(86,83,139,1) 0%, rgba(3,3,28,1) 100%, rgba(0,212,255,1) 100%)"
              position="absolute"
              borderRadius="50%"
              top={\`calc(\${position.top}% - 20px)\`}
              left={\`calc(\${position.left}% - 20px)\`}
              key={index}
              p="5px"
              align="center"
              justify="center"
              cursor="pointer"
            >
              {icons[index]}
            </Flex>
          );
        })}
      </Flex>

      <Flex
        as={motion.div}
        initial={{ x: "-50%", y: "-50%" }}
        animate={{ x: "-50%", y: "-50%" }}
        whileHover={{ scale: 1.1, x: "-50%", y: "-50%" }}
        whileTap={{ scale: 0.9 }}
        h="70px"
        w="70px"
        borderRadius="50%"
        onClick={() => setIsToggled((prev) => !prev)}
        background="radial-gradient(circle, rgba(86,83,139,1) 0%, rgba(3,3,28,1) 100%, rgba(0,212,255,1) 100%)"
        position="absolute"
        top="50%"
        left="50%"
        zIndex="1"
        align="center"
        justify="center"
        cursor="pointer"
      >
        Toggle
      </Flex>
    </Flex>
  );
};

export default ToggleCircularBtns;
  `;
}

export default ToggleCircularBtns;

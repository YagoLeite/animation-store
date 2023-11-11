import { Flex, useMediaQuery, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const data = [
  {
    title: "Item Number 1",
    color: "#26a69a", // Teal A400
  },
  {
    title: "Item Number 2",
    color: "#42a5f5", // Blue 400
  },
  {
    title: "Item Number 3",
    color: "#5c6bc0", // Indigo 400
  },
  {
    title: "Item Number 4",
    color: "#7e57c2", // Deep Purple 400
  },
  {
    title: "Item Number 5",
    color: "#ab47bc", // Purple 400
  },
  {
    title: "Item Number 6",
    color: "#ec407a", // Pink 400
  },
  {
    title: "Item Number 7",
    color: "#ef5350", // Red 400
  },
  {
    title: "Item Number 8",
    color: "#ffa726", // Orange 400
  },
  {
    title: "Item Number 9",
    color: "#ffd54f", // Yellow 400
  },
  {
    title: "Item Number 10",
    color: "#9ccc65", // Light Green 400
  },
];

const getVariant = (direction) => ({
  initial: {
    opacity: 0,
    x: direction === "right" ? "-100%" : "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: direction === "right" ? "100%" : "-100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
});

const MainBanner = ({ isCoding }) => {
  const [position, setPosition] = useState(4);
  const [direction, setDirection] = useState(undefined);
  const [switchState, setSwitchState] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 800px)");

  const circularIndex = (i) => ((i % data.length) + data.length) % data.length;

  useEffect(() => {
    if (direction === "right") {
      setPosition((prev) => prev - 1);
    }
    if (direction === "left") {
      setPosition((prev) => prev + 1);
    }
  }, [switchState]);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setDirection("right");
        setSwitchState((prev) => !prev);
      }, 10000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isMobile]);

  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <AnimatePresence initial={false}>
          <Flex
            w="100%"
            h={["auto", "auto", "441px", "441px", "441px"]}
            align="center"
            justify="center"
          >
            {/* left items */}
            <Flex
              borderRadius="10px"
              minW="120px"
              w="120px"
              h="150px"
              align="center"
              justify="center"
              position="relative"
              overflow="hidden"
            >
              <AnimatePresence initial={false}>
                <Flex
                  as={motion.div}
                  variants={getVariant(direction)}
                  custom={{ direction }}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                  w="100%"
                  h="100%"
                  position="absolute"
                  top="0"
                  left="0"
                  justify="center"
                  align="center"
                  key={data[circularIndex(position - 2)]?.title}
                  bg={data[circularIndex(position - 2)]?.color}
                >
                  <Text textAlign="center">
                    {data[circularIndex(position - 2)]?.title}
                  </Text>
                </Flex>
              </AnimatePresence>
            </Flex>
            <Flex
              borderRadius="10px"
              minW="150px"
              w="150px"
              h="200px"
              align="center"
              justify="center"
              position="relative"
              overflow="hidden"
              mr="10px"
            >
              <AnimatePresence initial={false}>
                <Flex
                  as={motion.div}
                  variants={getVariant(direction)}
                  custom={{ direction }}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                  w="100%"
                  h="100%"
                  position="absolute"
                  top="0"
                  left="0"
                  transform="translate(-50%, -50%)"
                  justify="center"
                  align="center"
                  key={data[circularIndex(position - 1)]?.title}
                  bg={data[circularIndex(position - 1)]?.color}
                >
                  <Text>{data[circularIndex(position - 1)]?.title}</Text>
                </Flex>
              </AnimatePresence>
            </Flex>

            <Flex
              minW={["30px", "40px", "40px"]}
              minH={["30px", "40px", "40px"]}
              borderRadius="50%"
              align="center"
              justify="center"
              onClick={() => {
                setDirection("right");
                setSwitchState((prev) => !prev);
              }}
              bg="#FFFFFFB3"
              _hover={{ bg: "gray.600" }}
              cursor="pointer"
            >
              <BsChevronLeft />
            </Flex>
            {/* center item */}

            <Flex
              minW={["150px", "350px", "400px", "550px"]}
              borderRadius="10px"
              w="550px"
              h="300px"
              mx="20px"
              overflow="hidden"
              position="relative"
              align="center"
              justify="center"
              zIndex="3"
            >
              <AnimatePresence initial={false}>
                <Flex
                  as={motion.div}
                  variants={getVariant(direction)}
                  custom={{ direction }}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                  w="100%"
                  h="100%"
                  position="absolute"
                  top="0"
                  left="0"
                  transform="translate(-50%, -50%)"
                  justify="center"
                  align="center"
                  key={data[circularIndex(position)]?.title}
                  bg={data[circularIndex(position)]?.color}
                >
                  <Text>{data[circularIndex(position)]?.title}</Text>
                </Flex>
              </AnimatePresence>
            </Flex>
            <Flex
              minW={["30px", "40px", "40px"]}
              minH={["30px", "40px", "40px"]}
              borderRadius="50%"
              align="center"
              justify="center"
              onClick={() => {
                setDirection("left");
                setSwitchState((prev) => !prev);
              }}
              bg="#FFFFFFB3"
              _hover={{ bg: "gray.600" }}
              cursor="pointer"
            >
              <BsChevronRight />
            </Flex>

            {/* right items */}
            <Flex
              borderRadius="10px"
              minW="150px"
              w="150px"
              h="200px"
              ml="10px"
              align="center"
              justify="center"
              position="relative"
              overflow="hidden"
              zIndex="2"
            >
              <AnimatePresence initial={false}>
                <Flex
                  as={motion.div}
                  variants={getVariant(direction)}
                  custom={{ direction }}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                  w="100%"
                  h="100%"
                  position="absolute"
                  top="0"
                  left="0"
                  transform="translate(-50%, -50%)"
                  justify="center"
                  align="center"
                  key={data[circularIndex(position + 1)]?.title}
                  bg={data[circularIndex(position + 1)]?.color}
                >
                  <Text>{data[circularIndex(position + 1)]?.title}</Text>
                </Flex>
              </AnimatePresence>
            </Flex>
            <Flex
              borderRadius="10px"
              minW="120px"
              w="120px"
              h="150px"
              align="center"
              justify="center"
              position="relative"
              overflow="hidden"
              zIndex="1"
            >
              <AnimatePresence initial={false}>
                <Flex
                  as={motion.div}
                  variants={getVariant(direction)}
                  custom={{ direction }}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                  w="100%"
                  h="100%"
                  position="absolute"
                  top="0"
                  left="0"
                  transform="translate(-50%, -50%)"
                  justify="center"
                  align="center"
                  key={data[circularIndex(position + 2)]?.title}
                  bg={data[circularIndex(position + 2)]?.color}
                >
                  <Text textAlign="center">
                    {data[circularIndex(position + 2)]?.title}
                  </Text>
                </Flex>
              </AnimatePresence>
            </Flex>
          </Flex>
        </AnimatePresence>
      )}
    </>
  );
};

function code() {
  return `
import { Flex, useMediaQuery, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const data = [
  {
    title: "Item Number 1",
    color: "#26a69a", // Teal A400
  },
  {
    title: "Item Number 2",
    color: "#42a5f5", // Blue 400
  },
  {
    title: "Item Number 3",
    color: "#5c6bc0", // Indigo 400
  },
  {
    title: "Item Number 4",
    color: "#7e57c2", // Deep Purple 400
  },
  {
    title: "Item Number 5",
    color: "#ab47bc", // Purple 400
  },
  {
    title: "Item Number 6",
    color: "#ec407a", // Pink 400
  },
  {
    title: "Item Number 7",
    color: "#ef5350", // Red 400
  },
  {
    title: "Item Number 8",
    color: "#ffa726", // Orange 400
  },
  {
    title: "Item Number 9",
    color: "#ffd54f", // Yellow 400
  },
  {
    title: "Item Number 10",
    color: "#9ccc65", // Light Green 400
  },
];

const getVariant = (direction) => ({
  initial: {
    opacity: 0,
    x: direction === "right" ? "-100%" : "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: direction === "right" ? "100%" : "-100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
});

const MainBanner = () => {
  const [position, setPosition] = useState(4);
  const [direction, setDirection] = useState(undefined);
  const [switchState, setSwitchState] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 800px)");

  const circularIndex = (i) => ((i % data.length) + data.length) % data.length;

  useEffect(() => {
    if (direction === "right") {
      setPosition((prev) => prev - 1);
    }
    if (direction === "left") {
      setPosition((prev) => prev + 1);
    }
  }, [switchState]);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setDirection("right");
        setSwitchState((prev) => !prev);
      }, 10000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isMobile]);

  return (
    <AnimatePresence initial={false}>
      <Flex
        w="100%"
        h={["auto", "auto", "441px", "441px", "441px"]}
        align="center"
        justify="center"
      >
        {/* left items */}
        <Flex
          borderRadius="10px"
          minW="120px"
          w="120px"
          h="150px"
          align="center"
          justify="center"
          position="relative"
          overflow="hidden"
        >
          <AnimatePresence initial={false}>
            <Flex
              as={motion.div}
              variants={getVariant(direction)}
              custom={{ direction }}
              initial="initial"
              animate="visible"
              exit="exit"
              w="100%"
              h="100%"
              position="absolute"
              top="0"
              left="0"
              justify="center"
              align="center"
              key={data[circularIndex(position - 2)]?.title}
              bg={data[circularIndex(position - 2)]?.color}
            >
              <Text textAlign="center">
                {data[circularIndex(position - 2)]?.title}
              </Text>
            </Flex>
          </AnimatePresence>
        </Flex>
        <Flex
          borderRadius="10px"
          minW="150px"
          w="150px"
          h="200px"
          align="center"
          justify="center"
          position="relative"
          overflow="hidden"
          mr="10px"
        >
          <AnimatePresence initial={false}>
            <Flex
              as={motion.div}
              variants={getVariant(direction)}
              custom={{ direction }}
              initial="initial"
              animate="visible"
              exit="exit"
              w="100%"
              h="100%"
              position="absolute"
              top="0"
              left="0"
              transform="translate(-50%, -50%)"
              justify="center"
              align="center"
              key={data[circularIndex(position - 1)]?.title}
              bg={data[circularIndex(position - 1)]?.color}
            >
              <Text>{data[circularIndex(position - 1)]?.title}</Text>
            </Flex>
          </AnimatePresence>
        </Flex>

        <Flex
          minW={["30px", "40px", "40px"]}
          minH={["30px", "40px", "40px"]}
          borderRadius="50%"
          align="center"
          justify="center"
          onClick={() => {
            setDirection("right");
            setSwitchState((prev) => !prev);
          }}
          bg="#FFFFFFB3"
          _hover={{ bg: "gray.600" }}
          cursor="pointer"
        >
          <BsChevronLeft />
        </Flex>
        {/* center item */}

        <Flex
          minW={["150px", "350px", "400px", "550px"]}
          borderRadius="10px"
          w="550px"
          h="300px"
          mx="20px"
          overflow="hidden"
          position="relative"
          align="center"
          justify="center"
          zIndex="3"
        >
          <AnimatePresence initial={false}>
            <Flex
              as={motion.div}
              variants={getVariant(direction)}
              custom={{ direction }}
              initial="initial"
              animate="visible"
              exit="exit"
              w="100%"
              h="100%"
              position="absolute"
              top="0"
              left="0"
              transform="translate(-50%, -50%)"
              justify="center"
              align="center"
              key={data[circularIndex(position)]?.title}
              bg={data[circularIndex(position)]?.color}
            >
              <Text>{data[circularIndex(position)]?.title}</Text>
            </Flex>
          </AnimatePresence>
        </Flex>
        <Flex
          minW={["30px", "40px", "40px"]}
          minH={["30px", "40px", "40px"]}
          borderRadius="50%"
          align="center"
          justify="center"
          onClick={() => {
            setDirection("left");
            setSwitchState((prev) => !prev);
          }}
          bg="#FFFFFFB3"
          _hover={{ bg: "gray.600" }}
          cursor="pointer"
        >
          <BsChevronRight />
        </Flex>

        {/* right items */}
        <Flex
          borderRadius="10px"
          minW="150px"
          w="150px"
          h="200px"
          ml="10px"
          align="center"
          justify="center"
          position="relative"
          overflow="hidden"
          zIndex="2"
        >
          <AnimatePresence initial={false}>
            <Flex
              as={motion.div}
              variants={getVariant(direction)}
              custom={{ direction }}
              initial="initial"
              animate="visible"
              exit="exit"
              w="100%"
              h="100%"
              position="absolute"
              top="0"
              left="0"
              transform="translate(-50%, -50%)"
              justify="center"
              align="center"
              key={data[circularIndex(position + 1)]?.title}
              bg={data[circularIndex(position + 1)]?.color}
            >
              <Text>{data[circularIndex(position + 1)]?.title}</Text>
            </Flex>
          </AnimatePresence>
        </Flex>
        <Flex
          borderRadius="10px"
          minW="120px"
          w="120px"
          h="150px"
          align="center"
          justify="center"
          position="relative"
          overflow="hidden"
          zIndex="1"
        >
          <AnimatePresence initial={false}>
            <Flex
              as={motion.div}
              variants={getVariant(direction)}
              custom={{ direction }}
              initial="initial"
              animate="visible"
              exit="exit"
              w="100%"
              h="100%"
              position="absolute"
              top="0"
              left="0"
              transform="translate(-50%, -50%)"
              justify="center"
              align="center"
              key={data[circularIndex(position + 2)]?.title}
              bg={data[circularIndex(position + 2)]?.color}
            >
              <Text textAlign="center">
                {data[circularIndex(position + 2)]?.title}
              </Text>
            </Flex>
          </AnimatePresence>
        </Flex>
      </Flex>
    </AnimatePresence>
  );
};

export default MainBanner;
  `;
}

export default MainBanner;

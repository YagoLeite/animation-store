import {
  Flex,
  Image,
  useDisclosure,
  useMediaQuery,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";

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

const MainBanner = ({ bannerList }) => {
  const [position, setPosition] = useState(4);
  const [direction, setDirection] = useState(undefined);
  const [switchState, setSwitchState] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [redirectURL, setRedirectURL] = useState("");
  //   const { setIsLoading } = useProgress();
  const [isMobile] = useMediaQuery("(max-width: 800px)");

  //   const data = bannerList?.map((item, i) => ({
  //     key: i,
  //     img: item?.imageBanner,
  //     color: '#0ea5e9'
  //   }));

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
          minW="150px"
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
              <Text>{data[circularIndex(position - 2)]?.title}</Text>
            </Flex>
          </AnimatePresence>
        </Flex>
        <Flex
          minW="200px"
          h="200px"
          align="center"
          justify="center"
          position="relative"
          overflow="hidden"
          //   mr="10px"
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
          minW="40px"
          minH="40px"
          borderRadius="50%"
          align="center"
          justify="center"
          // mx="auto"
          onClick={() => {
            setDirection("right");
            setSwitchState((prev) => !prev);
          }}
          bg="#FFFFFFB3"
          _hover={{ bg: "gray.600" }}
          cursor="pointer"
        >
          {/* <ArrowNarrowLeftIcon /> */}L
        </Flex>
        {/* center item */}
        <Flex
          //   minW={["100%", "100%", "550px", "350px", "350px"]}
          //   h={["200px", "300px", "320px", "221px", "421px"]}
          minW="350px"
          h="250px"
          //   mx="20px"
          overflow="hidden"
          position="relative"
          align="center"
          justify="center"
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
          minW="40px"
          minH="40px"
          borderRadius="50%"
          align="center"
          justify="center"
          // mx="auto"
          onClick={() => {
            setDirection("left");
            setSwitchState((prev) => !prev);
          }}
          bg="#FFFFFFB3"
          _hover={{ bg: "gray.600" }}
          cursor="pointer"
        >
          {/* <ArrowNarrowRightIcon /> */}D
        </Flex>
        {/* right items */}
        <Flex
          minW="200px"
          h="200px"
          //   ml="10px"
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
          minW="150px"
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
              transform="translate(-50%, -50%)"
              justify="center"
              align="center"
              key={data[circularIndex(position + 2)]?.title}
              bg={data[circularIndex(position + 2)]?.color}
            >
              <Text>{data[circularIndex(position + 2)]?.title}</Text>
            </Flex>
          </AnimatePresence>
        </Flex>
      </Flex>
    </AnimatePresence>
  );
};

export default MainBanner;

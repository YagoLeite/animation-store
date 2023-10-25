import { Flex, Image, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const bannerList = [1, 2, 3, 4, 5, 6, 7, 8];

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
  const [direction, setDirection] = useState("right");
  const [switchState, setSwitchState] = useState(false);
  const [redirectURL, setRedirectURL] = useState("");
  //   const { setIsLoading } = useProgress();
  //   const [isMobile] = useMediaQuery("(max-width: 800px)");

  const data = bannerList?.map((item, i) => ({
    key: i,
    img: item?.imageBanner,
    color: "#0ea5e9",
  }));

  const circularIndex = (i) => ((i % data.length) + data.length) % data.length;

  useEffect(() => {
    if (direction === "right") {
      setPosition((prev) => prev - 1);
    }
    if (direction === "left") {
      setPosition((prev) => prev + 1);
    }
  }, [switchState]);

  //   useEffect(() => {
  //     if (isMobile) {
  //       const interval = setInterval(() => {
  //         setDirection('right');
  //         setSwitchState((prev) => !prev);
  //       }, 10000);

  //       return () => {
  //         clearInterval(interval);
  //       };
  //     }
  //   }, [isMobile]);

  return (
    <Flex w="100%" overflow="hidden">
      <AnimatePresence>
        <Flex
          w="100%"
          h={["auto", "auto", "441px", "441px", "441px"]}
          align="center"
          justify="center"
        >
          {/* left items */}
          <Flex
            w="198px"
            h="260px"
            align="center"
            justify="center"
            position="relative"
            overflow="hidden"
          >
            <AnimatePresence initial={false}>
              {/* <Image
                h="100%"
                w="100%"
                key={bannerList[circularIndex(position - 2)]?.id}
                src={bannerList[circularIndex(position - 2)]?.imageThumbnail}
                objectFit="cover"
                as={motion.img}
                variants={getVariant(direction)}
                custom={{ direction }}
                initial="initial"
                animate="visible"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              /> */}
              <Flex
                as={motion.div}
                w="198px"
                h="260px"
                bg="blue"
                variants={getVariant(direction)}
                custom={{ direction }}
                initial="initial"
                animate="visible"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </AnimatePresence>
          </Flex>
          <Flex
            minW={["206px", "206px", "206px", "206px", "280px"]}
            h={["271px", "271px", "271px", "271px", "330px"]}
            align="center"
            justify="center"
            position="relative"
            overflow="hidden"
            mr="10px"
          >
            <AnimatePresence initial={false}>
              {/* <Image
                h="100%"
                w="100%"
                objectFit="cover"
                src={bannerList[circularIndex(position - 1)]?.imageThumbnail}
                key={bannerList[circularIndex(position - 1)]?.id}
                as={motion.img}
                variants={getVariant(direction)}
                custom={{ direction }}
                initial="initial"
                animate="visible"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: "translate(-50%, -50%)",
                }}
              /> */}
              <Flex
                w="280px"
                h="330px"
                as={motion.div}
                variants={getVariant(direction)}
                custom={{ direction }}
                initial="initial"
                animate="visible"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: "translate(-50%, -50%)",
                }}
              />
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
            {/* <ArrowNarrowLeftIcon /> */}
          </Flex>
          {/* center item */}
          <Flex
            minW={["100%", "100%", "550px", "750px", "750px"]}
            h={["200px", "300px", "320px", "421px", "421px"]}
            mx="20px"
            overflow="hidden"
            position="relative"
            align="center"
            justify="center"
          >
            <AnimatePresence initial={false}>
              {/* <Image
                  h="100%"
                  w="100%"
                  objectFit="cover"
                  src={bannerList[circularIndex(position)]?.imageBanner}
                  key={bannerList[circularIndex(position)]?.id}
                  as={motion.img}
                  variants={getVariant(direction)}
                  custom={{ direction }}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: "translate(-50%, -50%)",
                  }}
                /> */}
              <Flex
                as={motion.div}
                h="400px"
                w="500px"
                bg="green"
                variants={getVariant(direction)}
                custom={{ direction }}
                initial="initial"
                animate="visible"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: "translate(-50%, -50%)",
                }}
              />
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
            {/* <ArrowNarrowRightIcon /> */}
          </Flex>
          {/* right items */}
          <Flex
            minW={["206px", "206px", "206px", "206px", "280px"]}
            h={["271px", "271px", "271px", "271px", "330px"]}
            ml="10px"
            align="center"
            justify="center"
            position="relative"
            overflow="hidden"
          >
            <AnimatePresence initial={false}>
              {/* <Image
                h="100%"
                w="100%"
                objectFit="cover"
                src={bannerList[circularIndex(position + 1)]?.imageThumbnail}
                key={bannerList[circularIndex(position + 1)]?.id}
                as={motion.img}
                variants={getVariant(direction)}
                custom={{ direction }}
                initial="initial"
                animate="visible"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: "translate(-50%, -50%)",
                }}
              /> */}
              <Flex
                as={motion.div}
                h="330px"
                w="280px"
                variants={getVariant(direction)}
                custom={{ direction }}
                initial="initial"
                animate="visible"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: "translate(-50%, -50%)",
                }}
              />
            </AnimatePresence>
          </Flex>
          <Flex
            w="198px"
            h="260px"
            align="center"
            justify="center"
            position="relative"
            overflow="hidden"
          >
            <AnimatePresence initial={false}>
              {/* <Image
                h="100%"
                w="100%"
                objectFit="cover"
                src={bannerList[circularIndex(position + 2)]?.imageThumbnail}
                key={bannerList[circularIndex(position + 2)]?.id}
                as={motion.img}
                variants={getVariant(direction)}
                custom={{ direction }}
                initial="initial"
                animate="visible"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: "translate(-50%, -50%)",
                }}
              /> */}
              <Flex
                as={motion.div}
                w="198px"
                h="260px"
                variants={getVariant(direction)}
                custom={{ direction }}
                initial="initial"
                animate="visible"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: "translate(-50%, -50%)",
                }}
              />
            </AnimatePresence>
          </Flex>
        </Flex>
      </AnimatePresence>
    </Flex>
  );
};

export default MainBanner;

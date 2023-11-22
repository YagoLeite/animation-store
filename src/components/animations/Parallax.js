"use client";
import { Flex, Text } from "@chakra-ui/react";
import { CiWifiOn, CiBatteryFull, CiLock } from "react-icons/ci";
import { RxLetterCaseToggle, RxReload } from "react-icons/rx";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { IoBookOutline, IoCopyOutline } from "react-icons/io5";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const veiwPortHeight = "370px";

const Parallax = () => {
  const containerRef = useRef(null);

  console.log(containerRef, "containerRef");
  return (
    <Flex
      maxW="330px"
      w="100%"
      boxShadow="2xl"
      h="500px"
      p="2px"
      borderRadius="22px"
      overflowY="hidden"
      bg="black"
    >
      <Flex
        w="100%"
        h="100%"
        direction="column"
        borderRadius="20px"
        bg="gray.300"
        color="black"
        gap="20px"
      >
        {/* Time, camera, wifi and battery */}

        <Flex w="100%" h="20px" justify="space-between">
          <Flex
            w="100%"
            maxW="80px"
            align="center"
            justify="center"
            p="5px 10px"
          >
            <Text fontSize="11px">1:07</Text>
          </Flex>
          <Flex
            borderBottomRightRadius="10px"
            borderBottomLeftRadius="10px"
            bg="black"
            h="20px"
            w="200px"
            justify="center"
          >
            <Flex gap="10px" justify="center" align="center">
              <Flex w="50px" h="5px" bg="gray.800" borderRadius="10px" />
              <Flex
                w="5px"
                h="5px"
                borderRadius="50%"
                bgGradient="radial(white, blue)"
                mb="3px"
              />
            </Flex>
          </Flex>
          <Flex
            w="100%"
            maxW="80px"
            align="center"
            gap="5px"
            justify="center"
            p="5px 10px"
          >
            <CiWifiOn />
            <CiBatteryFull />
          </Flex>
        </Flex>

        {/* website url */}
        <Flex w="100%" h="20px" px="20px">
          <Flex
            w="100%"
            h="100%"
            bg="gray.600"
            borderRadius="10px"
            align="center"
            justify="space-between"
            px="10px"
            fontSize="13px"
          >
            <RxLetterCaseToggle />
            <Flex align="center" gap="5px" justify="center">
              <CiLock />
              <Text>www.animationstore.dev</Text>
            </Flex>
            <RxReload />
          </Flex>
        </Flex>

        <Flex w="100%" h="100%" direction="column">
          <Flex
            ref={containerRef}
            w="100%"
            // minH="370px"
            h="370px"
            overflowY="scroll"
          >
            {/* parallax content */}
            <Flex
              // ref={containerRef}
              // as={motion.div}
              // position="relative"
              w="100%"
              h="fit-content"
              direction="column"
            >
              {containerRef && (
                <Flex direction="column" mb="40px">
                  <FirstSection containerRef={containerRef} />
                  <SecondSection containerRef={containerRef} />
                  <ThirdSection containerRef={containerRef} />
                  <FourthSection containerRef={containerRef} />
                  <FifthSection containerRef={containerRef} />
                </Flex>
              )}
            </Flex>
          </Flex>

          {/* footer */}

          <Flex
            w="100%"
            h="50px"
            borderBottomRadius="22px"
            align="center"
            gap="15px"
            direction="column"
            px="10px"
            py="5px"
          >
            <Flex w="100%" justify="space-between">
              <MdOutlineKeyboardArrowLeft />
              <MdOutlineKeyboardArrowRight />
              <IoBookOutline />
              <IoCopyOutline />
            </Flex>
            <Flex w="150px" h="5px" bg="gray.800" borderRadius="10px" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

function FirstSection({ containerRef }) {
  return (
    <Flex w="100%" h={veiwPortHeight} align="center" justify="center">
      <Text fontSize="50px" fontWeight="bold">
        Scroll Down
      </Text>
    </Flex>
  );
}

function SecondSection({ containerRef }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start end", "end end"],
    layoutEffect: false,
  });

  console.log(containerRef, "second");

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <Flex as={motion.div} ref={ref} h={veiwPortHeight} align="end">
      <Flex
        as={motion.div}
        w="100%"
        justify="center"
        style={{
          scale: scaleProgress,
          opacity: scaleProgress,
        }}
        mb="25px"
      >
        <Text fontSize="60px" fontWeight="bold">
          Slowly
        </Text>
      </Flex>
    </Flex>
  );
}

function ThirdSection({ containerRef }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start end", "end end"],
    layoutEffect: false,
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 20]);

  return (
    <Flex ref={ref} h="600px" align="center" justify="center" overflow="hidden">
      <Flex
        as={motion.div}
        w="40px"
        h="40px"
        bg="black"
        borderRadius="50%"
        style={{ scale: scaleProgress, opacity: scaleProgress }}
      />
    </Flex>
  );
}

function FourthSection({ containerRef }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start end", "end end"],
    layoutEffect: false,
  });

  const yProgress = useTransform(scrollYProgress, [0, 1], ["0px", "690px"]);

  return (
    <Flex
      as={motion.div}
      ref={ref}
      h="800px"
      align="center"
      justify="center"
      position="relative"
    >
      <Flex
        w="100%"
        h="100%"
        direction="column"
        justify="space-between"
        zIndex={2}
      >
        <Flex w="100%" bg="gray.800" h="110px" />
        <Flex w="100%" bg="gray.800" h="110px" />
        <Flex w="100%" bg="gray.800" h="110px" />
        <Flex w="100%" bg="gray.800" h="110px" />
      </Flex>
      <Flex
        as={motion.div}
        w="100%"
        justify="center"
        top="0"
        align="center"
        position="absolute"
        zIndex={1}
        style={{ y: yProgress }}
      >
        <Text fontSize="40px" textAlign="center" fontWeight="bold">
          TAKE YOUR TIME
        </Text>
      </Flex>
    </Flex>
  );
}

function FifthSection({ containerRef }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start end", "end end"],
    layoutEffect: false,
  });

  const yProgress = useTransform(scrollYProgress, [0, 0.8], ["0px", "800px"]);
  const sizeProgress = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["50px", "200px"]
  );
  const rotateProgress = useTransform(scrollYProgress, [0, 0.8], [0, 360]);
  const leftProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["-50px", "calc(100% - 255px)"]
  );

  const opacityProgress = useTransform(scrollYProgress, [0.4, 1], [0, 1]);

  return (
    <Flex
      ref={ref}
      h="1000px"
      align="center"
      justify="center"
      position="relative"
    >
      <Flex
        as={motion.div}
        borderRadius="10px"
        position="absolute"
        justify="center"
        align="center"
        bg="orange"
        top="0"
        // left="-100px"
        style={{
          y: yProgress,
          left: leftProgress,
          width: sizeProgress,
          height: sizeProgress,
          rotate: rotateProgress,
        }}
      >
        <Flex as={motion.div} style={{ opacity: opacityProgress }}>
          <Text fontWeight="bold">Get this code for free!</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Parallax;

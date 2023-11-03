import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flex } from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// const test = [1, 2, 3, 4, 5, 6, 7];
const test = [
  { n: 1, bgGradient: "linear(to-l, #7928CA, #FF0080)" },
  { n: 2, bgGradient: "linear(to-r, green.200, pink.500)" },
  { n: 3, bgGradient: "linear(to-r, gray.300, yellow.400, pink.200)" },
  { n: 4, bgGradient: "linear(to-r, red.500, yellow.500)" },
  { n: 5, bgGradient: "linear(to-r, teal.500, green.500)" },
  { n: 6, bgGradient: "linear(to-r, pink.500, blue.800, yellow.100)" },
  { n: 7, bgGradient: "linear(to-r, blue.200, yellow.500, green.800)" },
];

const SimpleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        x: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
        opacity: {
          duration: 0.5,
        },
      },
    },
    exitRight: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    exitLeft: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };

  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === test.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? test.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div>
      <Flex
        h="100%"
        w="fit-content"
        align="center"
        justify="center"
        direction="column"
        gap="25px"
      >
        <Flex
          h="fit-content"
          // maxW="400px"
          w="fit-content"
          borderRadius="10px"
          position="relative"
          overflow="hidden"
        >
          <AnimatePresence mode="wait">
            <Flex
              as={motion.div}
              w={["200px", "250px", "350px", "400px"]}
              borderRadius="10px"
              h={["200px", "200px", "300px", "450px"]}
              bgGradient={test[currentIndex].bgGradient}
              justify="center"
              align="center"
              key={currentIndex}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit={direction === "right" ? "exitLeft" : "exitRight"}
              variants={slideVariants}
            >
              {test[currentIndex].n}
            </Flex>
          </AnimatePresence>
          <div className="slide_direction">
            <Flex justify="space-between">
              <Flex
                as={motion.div}
                align="center"
                justify="center"
                color="white"
                borderRadius="50%"
                position="absolute"
                left="0"
                top="0"
                bottom="0"
                margin="auto 10px"
                h="25px"
                w="25px"
                bg="orange"
                variants={slidersVariants}
                whileHover="hover"
                onClick={handlePrevious}
                cursor="pointer"
              >
                <BsArrowLeft />
              </Flex>

              <Flex
                as={motion.div}
                align="center"
                justify="center"
                bg="orange"
                color="white"
                borderRadius="50%"
                position="absolute"
                right="0"
                top="0"
                bottom="0"
                margin="auto 10px"
                h="25px"
                w="25px"
                variants={slidersVariants}
                whileHover="hover"
                onClick={handleNext}
                cursor="pointer"
              >
                <BsArrowRight />
              </Flex>
            </Flex>
          </div>
        </Flex>

        <Flex gap={["15px", "20px"]} justify="center" align="center">
          {test.map((_, index) => (
            <Flex
              w={["15px", "20px"]}
              h={["15px", "20px"]}
              borderRadius="50px"
              cursor="pointer"
              bg="blue"
              as={motion.div}
              key={index}
              onClick={() => handleDotClick(index)}
              initial="initial"
              animate={currentIndex === index ? "animate" : ""}
              whileHover="hover"
              variants={dotsVariants}
              align="center"
              justify="center"
            ></Flex>
          ))}
        </Flex>
      </Flex>
    </div>
  );
};

export default SimpleCarousel;

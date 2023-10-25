import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flex } from "@chakra-ui/react";

const test = [1, 2, 3, 4, 5, 6, 7];

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
      <Flex h="100%" w="100%" direction="column" gap="25px">
        <Flex
          h="400px"
          maxW="400px"
          borderRadius="10px"
          position="relative"
          overflow="hidden"
        >
          <AnimatePresence mode="wait">
            <Flex
              as={motion.div}
              w="400px"
              borderRadius="10px"
              h="450px"
              bg="green"
              justify="center"
              align="center"
              key={currentIndex}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit={direction === "right" ? "exitLeft" : "exitRight"}
              variants={slideVariants}
            >
              {test[currentIndex]}
            </Flex>
          </AnimatePresence>
          <div className="slide_direction">
            <Flex justify="space-between">
              <Flex
                as={motion.div}
                align="center"
                justify="center"
                bg="orange"
                color="white"
                borderRadius="50%"
                position="absolute"
                left="0"
                top="0"
                bottom="0"
                margin="auto 10px"
                h="25px"
                w="25px"
                variants={slidersVariants}
                whileHover="hover"
                onClick={handlePrevious}
              >
                {/* Left arrow SVG */}
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
              >
                {/* Right arrow SVG */}
              </Flex>
            </Flex>
          </div>
        </Flex>

        <Flex gap="20px" justify="center" align="center">
          {test.map((_, index) => (
            <Flex
              w="20px"
              h="20px"
              borderRadius="50px"
              bg="blue"
              as={motion.div}
              key={index}
              onClick={() => handleDotClick(index)}
              initial="initial"
              animate={currentIndex === index ? "animate" : ""}
              whileHover="hover"
              variants={dotsVariants}
            ></Flex>
          ))}
        </Flex>
      </Flex>
    </div>
  );
};

export default SimpleCarousel;

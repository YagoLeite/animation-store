import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flex } from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const data = [
  {
    title: "Item Number 1",
    color: "#14b8a6",
  },
  {
    title: "Item Number 2",
    color: "#06b6d4",
  },
  {
    title: "Item Number 3",
    color: "#0ea5e9",
  },
  {
    title: "Item Number 4",
    color: "#3b82f6",
  },
  {
    title: "Item Number 5",
    color: "#6366f1",
  },
  {
    title: "Item Number 6",
    color: "#8b5cf6",
  },
  {
    title: "Item Number 7",
    color: "#a855f7",
  },
  {
    title: "Item Number 8",
    color: "#d946ef",
  },
  {
    title: "Item Number 9",
    color: "#ec4899",
  },
  {
    title: "Item Number 10",
    color: "#f43f5e",
  },
];

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

const SimpleCarousel = ({ isCoding }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === data.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex
          h="100%"
          w="fit-content"
          align="center"
          justify="center"
          direction="column"
          gap="25px"
          py="20px"
        >
          <Flex
            h="fit-content"
            w="fit-content"
            borderRadius="10px"
            position="relative"
            overflow="hidden"
          >
            <AnimatePresence mode="wait">
              <Flex
                as={motion.div}
                w={["280px", "400px", "500px", "700px"]}
                borderRadius="10px"
                h={["200px", "200px", "300px", "450px"]}
                bg={data[currentIndex].color}
                justify="center"
                align="center"
                key={currentIndex}
                initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit={direction === "right" ? "exitLeft" : "exitRight"}
                variants={slideVariants}
              >
                {data[currentIndex].title}
              </Flex>
            </AnimatePresence>

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
          </Flex>

          <Flex gap={["15px", "20px"]} justify="center" align="center">
            {data.map((item, index) => (
              <Flex
                w={["15px", "20px"]}
                h={["15px", "20px"]}
                borderRadius="50px"
                cursor="pointer"
                bg={item.color}
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
      )}
    </>
  );
};

function code() {
  return `
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flex } from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const data = [
  {
    title: "Item Number 1",
    color: "#14b8a6",
  },
  {
    title: "Item Number 2",
    color: "#06b6d4",
  },
  {
    title: "Item Number 3",
    color: "#0ea5e9",
  },
  {
    title: "Item Number 4",
    color: "#3b82f6",
  },
  {
    title: "Item Number 5",
    color: "#6366f1",
  },
  {
    title: "Item Number 6",
    color: "#8b5cf6",
  },
  {
    title: "Item Number 7",
    color: "#a855f7",
  },
  {
    title: "Item Number 8",
    color: "#d946ef",
  },
  {
    title: "Item Number 9",
    color: "#ec4899",
  },
  {
    title: "Item Number 10",
    color: "#f43f5e",
  },
];

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

const SimpleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === data.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
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
          w="fit-content"
          borderRadius="10px"
          position="relative"
          overflow="hidden"
        >
          <AnimatePresence mode="wait">
            <Flex
              as={motion.div}
              w={["280px", "400px", "500px", "700px"]}
              borderRadius="10px"
              h={["200px", "200px", "300px", "450px"]}
              bg={data[currentIndex].color}
              justify="center"
              align="center"
              key={currentIndex}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit={direction === "right" ? "exitLeft" : "exitRight"}
              variants={slideVariants}
            >
              {data[currentIndex].title}
            </Flex>
          </AnimatePresence>
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
        </Flex>

        <Flex gap={["15px", "20px"]} justify="center" align="center">
          {data.map((item, index) => (
            <Flex
              w={["15px", "20px"]}
              h={["15px", "20px"]}
              borderRadius="50px"
              cursor="pointer"
              bg={item.color}
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
  );
};

export default SimpleCarousel;

  `;
}

export default SimpleCarousel;

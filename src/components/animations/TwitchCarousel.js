import React, { useState } from "react";
import { Box, IconButton, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import useResizeObserver from "use-resize-observer"; // Ensure this is adapted for Chakra UI
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

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

// Constants
const PADDING = 16;
const NUMBER_OF_ITEMS_TO_SHOW = 5;

// Calculate carousel item positions
function getCarouselItemXPositions(itemWidth, containerWidth) {
  if (!itemWidth || !containerWidth) {
    return { rightest: 0, right: 0, center: 0, left: 0, leftest: 0 };
  }

  const right = containerWidth / 2 - itemWidth - PADDING;
  const rightest = right * 2;
  const center = 0;
  const left = -(containerWidth / 2) + itemWidth + PADDING;
  const leftest = left * 2;

  return { rightest, right, center, left, leftest };
}

// Variants for Framer Motion animations
const itemVariants = {
  rightest: (custom) => ({
    x: custom.rightest,
    scale: 0.7,
    opacity: 1,
    zIndex: 1,
  }),
  right: (custom) => ({
    x: custom.right,
    scale: 0.85,
    opacity: 1,
    zIndex: 2,
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    zIndex: 3,
  },
  left: (custom) => ({
    x: custom.left,
    scale: 0.85,
    opacity: 1,
    zIndex: 2,
  }),
  leftest: (custom) => ({
    x: custom.leftest,
    scale: 0.7,
    opacity: 1,
    zIndex: 1,
  }),
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  exit: {
    opacity: 0,
    scale: 0.5,
  },
};

// Mapping of item indices to animation variants
const indexToVariantsMap = {
  0: "leftest",
  1: "left",
  2: "center",
  3: "right",
  4: "rightest",
};

// Arrow button component using Chakra UI
const ArrowButton = ({ handleClick, variant }) => (
  <IconButton
    onClick={handleClick}
    icon={
      variant === "left" ? (
        <BsArrowLeftCircleFill />
      ) : (
        <BsArrowRightCircleFill />
      )
    }
    borderRadius="full"
    backgroundColor="gray.700"
    _hover={{ transform: "scale(1.2)" }}
    size="md"
    isRound={true}
    zIndex={4}
  />
);

// Carousel item component
const CarouselItem = ({ position, children, containerWidth }) => {
  const { ref, width } = useResizeObserver();
  const itemXPosition = getCarouselItemXPositions(width, containerWidth);

  return (
    <Box
      as={motion.div}
      ref={ref}
      custom={itemXPosition}
      variants={itemVariants}
      animate={indexToVariantsMap[position]}
      initial="initial"
      exit="exit"
      //   h="100%"
      //   h="300px"
      transition={{ duration: 0.3, ease: "linear" }}
      //   style={{
      //     left: `calc(50% - ${(width || 432) / 2}px)`,
      //   }}
      position="absolute"
      left={`calc(50% - ${(width || 432) / 2}px)`}
    >
      {children}
    </Box>
  );
};

// Main carousel component
const Carousel = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const [items, setItems] = useState(childrenArray);
  const { ref, width } = useResizeObserver();

  // Handlers for next and previous buttons
  const handleClickNext = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const handleClickPrevious = () => {
    setItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, -1),
    ]);
  };

  const itemsToShow = items.slice(0, NUMBER_OF_ITEMS_TO_SHOW);

  return (
    <Flex
      ref={ref}
      justifyContent="center"
      alignItems="center"
      position="relative"
      //   bg="red"
      w={["200px", "400px", "500px", "1000px"]}
    >
      <ArrowButton variant="left" handleClick={handleClickPrevious} />
      <Flex
        h="100%"
        w="100%"
        mx="auto"
        align="center"
        // bg="blue"
        overflow="hidden"
      >
        <AnimatePresence initial={false}>
          {itemsToShow.map((child, index) => (
            <CarouselItem
              key={child.key}
              position={index}
              containerWidth={width}
            >
              {child}
            </CarouselItem>
          ))}
        </AnimatePresence>
      </Flex>
      <ArrowButton variant="right" handleClick={handleClickNext} />
    </Flex>
  );
};

// TwitchCarousel component
const TwitchCarousel = () => (
  <Box my="20" display="flex" justifyContent="center">
    <Flex position="relative" w="100%" h="100%" align="center" justify="center">
      <Carousel>
        {data.map((item) => (
          <Flex
            justify="center"
            align="center"
            key={item.title}
            h="176px"
            w={["128px", "240px", "384px"]}
            bg={item.color}
            p={4}
            borderRadius="xl"
            boxShadow="2xl"
            textAlign="center"
          >
            {item.title}
          </Flex>
        ))}
      </Carousel>
    </Flex>
  </Box>
);

export default TwitchCarousel;

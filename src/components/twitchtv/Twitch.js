import { motion, AnimatePresence } from "framer-motion";
import React, { Children, useState } from "react";
import useResizeObserver from "use-resize-observer";
import { Button, Flex } from "@chakra-ui/react";

const PADDING = 50;
const NUMBER_OF_ITEMS_TO_SHOW = 5;

export const data = [
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

function getCarouselItemXPositions(itemWidth, containerWidth) {
  if (!itemWidth || !containerWidth) {
    return {
      rightest: 0,
      right: 0,
      center: 0,
      left: 0,
      leftest: 0,
    };
  }

  const right = containerWidth / 2 - itemWidth - PADDING;
  const rightest = right * 2;
  const center = 0;
  const left = -(containerWidth / 2) + itemWidth + PADDING;
  const leftest = left * 2;

  return {
    rightest,
    right,
    center,
    left,
    leftest,
  };
}

const ITEM_VARIANTS = {
  rightest: ({ rightest }) => ({
    x: rightest,
    scale: 0.7,
    opacity: 1,
    zIndex: 1,
  }),
  right: ({ right }) => ({
    x: right,
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
  left: ({ left }) => ({
    x: left,
    scale: 0.85,
    opacity: 1,
    zIndex: 2,
  }),
  leftest: ({ leftest }) => ({
    x: leftest,
    scale: 0.7,
    opacity: 1,
    zIndex: 1,
  }),
  initial: {
    opacity: 0,
    scale: 0,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

const IndexToVariantsMap = {
  0: "leftest",
  1: "left",
  2: "center",
  3: "right",
  4: "rightest",
};

const ArrowButton = ({ handleClick, variant }) => (
  <Button
    as={motion.div}
    type="button"
    zIndex="4"
    h="40px"
    w="40px"
    borderRadius="50%"
    // ml={variant === "left" ? "10px" : "0px"}
    // mr={variant === "right" ? "10px" : "0px"}
    onClick={handleClick}
    // whileHover={{ scale: 1.3 }}
  >
    {variant === "left" ? "left" : "right"}
  </Button>
);

const CarouselItem = ({ position, children, containerWidth }) => {
  const { ref, width } = useResizeObserver();
  const itemXPosition = getCarouselItemXPositions(width, containerWidth);

  return (
    <motion.div
      ref={ref}
      //   style={{
      //     left: `calc(50% - ${(width || 432) / 2}px)`,
      //   }}
      variants={ITEM_VARIANTS}
      animate={IndexToVariantsMap[position]}
      initial="initial"
      exit="exit"
      custom={itemXPosition}
      transition={{ duration: 0.5, zIndex: { delay: 0.25 } }}
      position="absolute"
    >
      {children}
    </motion.div>
  );
};

const Carousel = ({ children }) => {
  const childrenArray = Children.toArray(children);
  const [items, setItems] = useState(childrenArray);
  const { ref, width } = useResizeObserver();

  console.log(ref, width);

  const handleClickNext = () => {
    // Take the first item and put it at the bottom
    const [first, ...rest] = items;
    setItems([...rest, first]);
  };

  const handleClickPrevious = () => {
    // We want to move the items in the array in reverse. So take the last item and put it at the top again.
    // 1. Get the last child
    const lastChild = items[items.length - 1];
    // Take a copy if current state. Remove the last child from it
    const childrenWithoutLastChild = [...items].filter(
      (item) => item !== lastChild
    );
    // Apply the last child again at the start of the list
    setItems([lastChild, ...childrenWithoutLastChild]);
  };

  const itemsToShow = [...items].splice(0, NUMBER_OF_ITEMS_TO_SHOW);

  return (
    <Flex
      position="relative"
      h={["100px", "180px", "330px", "330px", "380px"]}
      w="100%"
      align="center"
      justify="center"
      ref={ref}
    >
      <ArrowButton variant="left" handleClick={handleClickPrevious} />
      <Flex
        position="relative"
        align="center"
        justify="center"
        overflow="hidden"
        h="100%"
        w="100%"
      >
        <AnimatePresence initial={false}>
          {itemsToShow.map((child, index) => (
            <CarouselItem
              position={index}
              key={React.isValidElement(child) ? child.key : ""}
              containerWidth={width || 0}
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

const Twitch = () => (
  <Flex w="100%" overflow="hidden" bg="red">
    <Carousel>
      {data.map((item) => (
        <Flex
          // className="flex h-44 w-32 items-center justify-center rounded-xl p-2 md:w-60 lg:w-96"
          // style={{
          //   backgroundColor: item.color,
          // }}
          //   h={["81px", "168px", "262px", "312px", "310px", "340px"]}
          //   maxH={["81px", "168px", "262px", "312px", "310px", "340px"]}
          //   w={["80px", "150px", "120px", "400px", "400px", "500px"]}
          w="200px"
          h="150px"
          align="center"
          justify="center"
          overflow="hidden"
          bg={item.color}
          key={item.title}
        >
          <h2 className="text-sm font-bold text-stone-100 md:text-lg lg:text-xl">
            {item.title}
          </h2>
        </Flex>
      ))}
    </Carousel>
  </Flex>
);

export default Twitch;

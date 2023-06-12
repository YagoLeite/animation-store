import {
  AspectRatio,
  Button,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useControls } from "leva";
import React, { Children, useEffect, useState } from "react";
import useResizeObserver from "use-resize-observer";
// import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from "../icons";

const PADDING = -80;
const NUMBER_OF_ITEMS_TO_SHOW = 5;
export const data = [
  {
    title: "Item Number 1",
    img: "/mercadoInternacional.jpg",
    color: "#14b8a6",
  },

  {
    title: "Item Number 2",
    img: "/tapeReadingBanner.jpg",
    color: "#06b6d4",
  },
  {
    title: "Item Number 3",
    img: "/analiseGraficaBanner.jpg",
    color: "#0ea5e9",
  },
  {
    title: "Item Number 4",
    img: "/radarAcoesBanner.jpg",
    color: "#3b82f6",
  },
  {
    title: "Item Number 5",
    img: "/pointsBanner.jpg",
    color: "#6366f1",
  },
  {
    title: "Item Number 6",
    img: "/relatorioExponencialBanner.jpg",
    color: "#8b5cf6",
  },
];

function getCarouselItemXPositions(itemWidth, containerWidth, controler) {
  if (!controler.CardWidth || !containerWidth) {
    return {
      rightest: 0,
      right: 0,
      center: 0,
      left: 0,
      leftest: 0,
    };
  }

  const right = containerWidth / 2 - itemWidth - controler.Padding;
  const rightest = right * 2 - controler.Padding;
  const center = 0;
  const left = -(containerWidth / 2) + itemWidth + controler.Padding;
  const leftest = left * 2 + controler.Padding;

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
    scale: 0.35,

    opacity: 1,
    zIndex: 1,
  }),
  right: ({ right }) => ({
    x: right,
    scale: 0.5,

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
    scale: 0.5,

    opacity: 1,
    zIndex: 2,
  }),
  leftest: ({ leftest }) => ({
    x: leftest,
    scale: 0.35,

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
    ml={variant === "left" ? "10px" : "0px"}
    mr={variant === "right" ? "10px" : "0px"}
    onClick={handleClick}
    // whileHover={{ scale: 1.3 }}
  >
    {variant === "left" ? "left" : "right"}
  </Button>
);

const CarouselItem = ({ position, children, containerWidth, controler }) => {
  const { ref, width } = useResizeObserver();
  const itemXPosition = getCarouselItemXPositions(
    width,
    containerWidth,
    controler
  );

  console.log(width, containerWidth);

  return (
    <Flex position="absolute">
      <motion.div
        ref={ref}
        variants={ITEM_VARIANTS}
        animate={IndexToVariantsMap[position]}
        initial="initial"
        exit="exit"
        custom={itemXPosition}
        transition={{ duration: 0.5, zIndex: { delay: 0.25 } }}
      >
        {children}
      </motion.div>
    </Flex>
  );
};

const Carousel = ({ children, isOpen, setContainerWidth, controler }) => {
  const childrenArray = Children.toArray(children);
  const [items, setItems] = React.useState(childrenArray);
  const { ref, width } = useResizeObserver();

  useEffect(() => {
    width && setContainerWidth(width);
  }, [width]);

  const handleClickNext = () => {
    const [first, ...rest] = items;
    setItems([...rest, first]);
  };

  const handleClickPrevious = () => {
    const lastChild = items[items.length - 1];

    const childrenWithoutLastChild = [...items].filter(
      (item) => item !== lastChild
    );

    setItems([lastChild, ...childrenWithoutLastChild]);
  };

  const itemsToShow = [...items].splice(0, NUMBER_OF_ITEMS_TO_SHOW);

  return (
    <Flex
      position="relative"
      h="680px"
      w="100%"
      align="center"
      justify="center"
    >
      <ArrowButton variant="left" handleClick={handleClickPrevious} />
      <Flex
        ref={ref}
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
              isOpen={isOpen}
              controler={controler}
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

const Test = ({ isOpen }) => {
  const [containerWidth, setContainerWidth] = useState(null);

  const controler = useControls({
    CardWidth: { value: 400, min: 200, max: 700, step: 50 },
    Padding: { value: -30, min: -50, max: 50, step: 1 },
  });

  return (
    <Flex w="100%" overflow="hidden">
      <Carousel
        setContainerWidth={setContainerWidth}
        isOpen={isOpen}
        controler={controler}
      >
        {data.map((item) => (
          <AspectRatio ratio={16 / 9} minW="200px" w="100%" h="100%">
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              overflow="hidden"
              bg={item.color}
              key={item.title}
              borderRadius="15px"
            >
              <Text>olá</Text>
            </Flex>
          </AspectRatio>
        ))}
      </Carousel>
    </Flex>
  );
};

export default Test;

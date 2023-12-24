import React, { useEffect, useState } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import useResizeObserver from "use-resize-observer";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const data = [
  {
    name: "Feijoada",
    description:
      "Classic Brazilian Feijoada: Slow-cooked black bean and pork stew, accompanied by sautéed collard greens and ripe banana slices.",
    image: "/feijoadaImage.png",
    key: Math.random(),
  },
  {
    name: "Chicken with Pequi",
    description:
      "Roasted Chicken with Pequi: Succulent chicken delicately flavored with the unique taste of pequi fruit, a Brazilian culinary treasure.",
    image: "/galinhaComPequiImage.png",
    key: Math.random(),
  },
  {
    name: "Vatapa",
    description:
      "Vatapá Delight: A creamy, spicy Brazilian stew blending shrimp, bread, coconut milk, finely ground peanuts, and palm oil, garnished with fresh herbs.",
    image: "/vatapaImage.png",
    key: Math.random(),
  },
  {
    name: "Feijoada",
    description:
      "Classic Brazilian Feijoada: Slow-cooked black bean and pork stew, accompanied by sautéed collard greens and ripe banana slices.",
    image: "/feijoadaImage.png",
    key: Math.random(),
  },
  {
    name: "Chicken with Pequi",
    description:
      "Roasted Chicken with Pequi: Succulent chicken delicately flavored with the unique taste of pequi fruit, a Brazilian culinary treasure.",
    image: "/galinhaComPequiImage.png",
    key: Math.random(),
  },
  {
    name: "Vatapa",
    description:
      "Vatapá Delight: A creamy, spicy Brazilian stew blending shrimp, bread, coconut milk, finely ground peanuts, and palm oil, garnished with fresh herbs.",
    image: "/vatapaImage.png",
    key: Math.random(),
  },
];

const textVariants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  centered: (isCentered) => ({
    scale: isCentered ? 1 : 0.6,
    y: isCentered ? 0 : -30,
    rotateZ: isCentered ? 360 : -360,
    filter: isCentered ? "drop-shadow(0px 0px 10px white)" : "",
    transition: { duration: 0.5 },
  }),
};

const BrazilianFoods = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, width } = useResizeObserver();
  const { ref: imageRef, width: imageWidth } = useResizeObserver();
  const controls = useAnimation();
  const itemWidth = imageWidth || 200; // Width of each item
  const gapSize = width ? (width - itemWidth * 3) / 2 : 0; // Calculated gap size

  const imageContainerVariants = {
    initial: { x: 0 },
    animate: (currentIndex) => ({
      x: -(itemWidth + gapSize) * (currentIndex - 1),
      transition: { type: "linear", duration: 0.5 },
    }),
  };

  const movementHandler = (direction) => {
    if (isAnimating) return;
    setCurrentIndex((prevIndex) =>
      direction === "right"
        ? prevIndex + 1 >= data.length
          ? data.length - 1
          : prevIndex + 1
        : prevIndex - 1 <= 0
        ? 0
        : prevIndex - 1
    );
  };

  useEffect(() => {
    const trigger = async () => {
      if (isAnimating) return;
      setIsAnimating(true);
      await controls.start("animate");
      setIsAnimating(false);
    };
    trigger();
  }, [currentIndex]);

  return (
    <Flex
      w="100%"
      maxW="800px"
      h="100%"
      maxH="700px"
      bg="black"
      direction="column"
      gap="20px"
      overflow="hidden"
      fontFamily="Playfair Display"
      py="20px"
    >
      <Flex
        w="100%"
        justify="center"
        align="center"
        direction="column"
        gap="20px"
      >
        <Flex
          w="100%"
          justify="center"
          align="center"
          direction="column"
          gap="20px"
        >
          <Flex
            w="100%"
            justify="center"
            align="center"
            overflow="hidden"
            minH="70px"
            h="100%"
          >
            <AnimatePresence mode="wait">
              <Flex
                as={motion.div}
                key={data[currentIndex].name}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Text fontSize={["28px", "36px", "36px"]}>
                  {data[currentIndex].name}
                </Text>
              </Flex>
            </AnimatePresence>
          </Flex>
          <Flex
            w={["90%", "70%", "70%"]}
            overflow="hidden"
            h="100%"
            minH={["110px", "100px", "90px"]}
          >
            <AnimatePresence mode="wait">
              <Flex
                as={motion.div}
                key={data[currentIndex].name}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Text textAlign="center" fontSize={["14px", "16px", "16px"]}>
                  {data[currentIndex].description}
                </Text>
              </Flex>
            </AnimatePresence>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" h="100%" overflow="hidden">
        <Flex
          as={motion.div}
          variants={imageContainerVariants}
          initial={false}
          animate={controls}
          custom={currentIndex}
          w={`${itemWidth * data.length + gapSize * (data.length - 1)}px`}
          h="100%"
          ref={ref}
          gap={`${gapSize}px`}
          align="center"
        >
          {data.map((item, index) => (
            <Image
              as={motion.img}
              ref={imageRef}
              variants={imageVariants}
              initial={false}
              custom={currentIndex === index}
              animate="centered"
              key={item.key}
              src={item.image}
              alt={item.name}
              h={["90px", "140px", "150px", "200px", "200px"]}
              w={["90px", "140px", "150px", "200px", "200px"]}
            />
          ))}
        </Flex>
      </Flex>
      <Flex w="100%" h="50px" my="20px" gap="100px" justify="center">
        <Flex
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => movementHandler("left")}
          h="30px"
          w="30px"
          cursor="pointer"
        >
          <BsArrowLeftCircleFill size="100%" />
        </Flex>
        <Flex
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => movementHandler("right")}
          h="30px"
          w="30px"
          cursor="pointer"
        >
          <BsArrowRightCircleFill size="100%" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BrazilianFoods;

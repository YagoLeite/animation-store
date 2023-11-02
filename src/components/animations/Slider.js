import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

const numberOfItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const gap = 15;

const Slider = () => {
  const sliderRef = useRef();
  const [constraint, setConstraint] = useState(0);

  const updateConstraints = () => {
    const slider = sliderRef.current;
    if (slider) {
      const sliderWidth = slider.scrollWidth;
      const containerWidth = slider.offsetWidth;
      setConstraint(-(sliderWidth - containerWidth + gap));
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateConstraints();

      const handleResize = () => {
        updateConstraints();
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <Flex w="100%" overflowX="hidden" ref={sliderRef}>
      <Flex
        gap={`${gap}px`}
        py="15px"
        w="fit-content"
        cursor="grab"
        as={motion.div}
        drag="x"
        dragConstraints={{ left: constraint, right: 0 }}
        dragElastic={0.2}
      >
        {numberOfItems.map((_, i) => {
          return <Card key={i} />;
        })}
      </Flex>
    </Flex>
  );
};

function Card() {
  return (
    <Flex
      as={motion.div}
      whileHover={{ y: -10 }}
      h="200px"
      boxShadow="lg"
      w="200px"
      borderRadius="10px"
      bg="rgb(20, 20, 20)"
      align="center"
      justify="center"
    >
      <Text>Drag us</Text>
    </Flex>
  );
}

export default Slider;

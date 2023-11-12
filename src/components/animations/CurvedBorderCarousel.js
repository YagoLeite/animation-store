import { Flex, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import React, { useRef, useState, useCallback, useEffect } from "react";
import useResizeObserver from "use-resize-observer";

const numberOfItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const gap = 15;

const CurvedBorderCarousel = () => {
  const sliderRef = useRef();
  const [constraint, setConstraint] = useState(0);

  const updateConstraints = useCallback(() => {
    const slider = sliderRef.current;
    if (slider) {
      const sliderWidth = slider.scrollWidth;
      const containerWidth = slider.offsetWidth;
      const newConstraint = -(sliderWidth - containerWidth + gap);
      setConstraint(newConstraint);
    }
  }, [gap]);

  useEffect(() => {
    updateConstraints();
  }, [updateConstraints]);

  useResizeObserver({
    ref: sliderRef,
    onResize: () => updateConstraints(),
  });

  return (
    <Flex
      ref={sliderRef}
      w="100%"
      position="relative"
      h="fit-content"
      overflow="hidden"
    >
      <Flex
        w="110%"
        h={["60px", "60px", "100px"]}
        position="absolute"
        bg="rgb(62, 62, 62)"
        borderRadius="50%"
        top="0"
        transform="translate(-5%, -50%)"
        zIndex={1}
      />

      <Flex
        w="110%"
        h={["60px", "60px", "100px"]}
        position="absolute"
        bg="rgb(62, 62, 62)"
        borderRadius="50%"
        bottom="0"
        transform="translate(-5%, 50%)"
        zIndex="1"
      />

      <Flex
        gap={`${gap}px`}
        w="fit-content"
        cursor="grab"
        as={motion.div}
        drag="x"
        dragConstraints={{ left: constraint, right: 0 }}
        dragElastic={0.2}
        key={constraint}
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
      h={["250px", "350px", "350px"]}
      boxShadow="lg"
      w={["120px", "250px", "300px"]}
      align="center"
      justify="center"
    >
      <Image
        src="https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/16:9/w_1600%2Cc_limit/gettyimages-1146431497.jpg"
        objectFit="cover"
        h="100%"
        w="100%"
        draggable={false}
      />
    </Flex>
  );
}

export default CurvedBorderCarousel;

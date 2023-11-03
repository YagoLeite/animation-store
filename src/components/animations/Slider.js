import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useRef, useState, useCallback, useEffect } from "react";
import useResizeObserver from "use-resize-observer";

import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const numberOfItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const gap = 15;

const Slider = ({ isCoding }) => {
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
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            type: "ease",
            transition: {
              duration: 0.5,
            },
          }}
          w="100%"
          overflowX="hidden"
          ref={sliderRef}
        >
          <Flex
            gap={`${gap}px`}
            py="15px"
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
      )}
    </>
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

function code() {
  return `
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useRef, useState, useCallback, useEffect } from "react";
import useResizeObserver from "use-resize-observer";

const numberOfItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const gap = 15;

const Slider = () => {
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
    <Flex w="100%" overflowX="hidden" ref={sliderRef}>
      <Flex
        gap={\`${gap}px\`}
        py="15px"
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
`;
}

export default Slider;

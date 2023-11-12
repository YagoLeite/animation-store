import { Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import React, { useRef, useState, useCallback, useEffect } from "react";
import useResizeObserver from "use-resize-observer";

const numberOfItems = [
  {
    image:
      "https://static.wixstatic.com/media/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png/v1/fill/w_740,h_423,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png",
    key: Math.random(),
  },
  {
    image:
      "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/16:9/w_1600%2Cc_limit/gettyimages-1146431497.jpg",
    key: Math.random(),
  },
  {
    image:
      "https://wallpapers.com/images/featured-full/nature-2ygv7ssy2k0lxlzu.jpg",
    key: Math.random(),
  },
  {
    image:
      "https://static.wixstatic.com/media/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png/v1/fill/w_740,h_423,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png",
    key: Math.random(),
  },
  {
    image:
      "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/16:9/w_1600%2Cc_limit/gettyimages-1146431497.jpg",
    key: Math.random(),
  },
  {
    image:
      "https://wallpapers.com/images/featured-full/nature-2ygv7ssy2k0lxlzu.jpg",
    key: Math.random(),
  },
  {
    image:
      "https://static.wixstatic.com/media/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png/v1/fill/w_740,h_423,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png",
    key: Math.random(),
  },
  {
    image:
      "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/16:9/w_1600%2Cc_limit/gettyimages-1146431497.jpg",
    key: Math.random(),
  },
  {
    image:
      "https://wallpapers.com/images/featured-full/nature-2ygv7ssy2k0lxlzu.jpg",
    key: Math.random(),
  },
  {
    image:
      "https://static.wixstatic.com/media/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png/v1/fill/w_740,h_423,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png",
    key: Math.random(),
  },
  {
    image:
      "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/16:9/w_1600%2Cc_limit/gettyimages-1146431497.jpg",
    key: Math.random(),
  },
  {
    image:
      "https://wallpapers.com/images/featured-full/nature-2ygv7ssy2k0lxlzu.jpg",
    key: Math.random(),
  },
];

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
        {numberOfItems.map((item) => {
          return <Card key={item.key} data={item} />;
        })}
      </Flex>
    </Flex>
  );
};

function Card({ data }) {
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
        src={data.image}
        objectFit="cover"
        h="100%"
        w="100%"
        draggable={false}
      />
    </Flex>
  );
}

export default CurvedBorderCarousel;

import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const images = ["red", "green", "blue", "orange"];
const cardWidthNotSelected = 100; // Width of card when not selected
const cardMargin = 5; // Margin between cards

const Dontknow = () => {
  const [selectedImage, setSelectedImage] = useState("red");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Listen for window resize events and update windowWidth state
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Subtract total width of non-selected cards from window width to calculate selected card's width
  const cardWidthSelected =
    windowWidth - (images.length - 1) * (cardWidthNotSelected + cardMargin);

  const variants = {
    selected: {
      width: cardWidthSelected,
      transition: { duration: 1, ease: "easeInOut" },
    },
    notSelected: {
      width: cardWidthNotSelected,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <Flex width="100%" h="600px" alignItems="stretch" overflow="hidden">
      {images.map((img, i) => (
        <Flex
          as={motion.div}
          borderRadius="5px"
          key={i}
          variants={variants}
          initial="notSelected"
          animate={selectedImage === img ? "selected" : "notSelected"}
          height="100%"
          bg={img}
          bgSize="cover"
          bgPosition="center"
          marginRight={i === images.length - 1 ? 0 : cardMargin}
          onClick={() => setSelectedImage(img)}
        />
      ))}
    </Flex>
  );
};

export default Dontknow;

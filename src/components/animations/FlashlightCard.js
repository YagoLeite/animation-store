import React, { useEffect, useRef } from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

const FlashlightCard = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;

    const handleMouseMove = (e) => {
      const cardElements = cards.childNodes;

      cardElements.forEach((card) => {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    cards.addEventListener("mousemove", handleMouseMove);

    return () => {
      cards.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const bgColor = useColorModeValue("rgb(20, 20, 20)", "rgb(23, 23, 23)");

  return (
    <Flex
      ref={cardsRef}
      wrap="wrap"
      gap={2}
      w="calc(100% - 20px)"
      maxW="916px"
      sx={{
        ":hover > .card::after": {
          opacity: 1,
        },
      }}
    >
      {[...Array(6)].map((_, idx) => (
        <Card index={idx} bgColor={bgColor} />
      ))}
    </Flex>
  );
};

function Card({ bgColor }) {
  return (
    <Box
      className="card"
      w="300px"
      h="260px"
      borderRadius="10px"
      bg="rgba(255, 255, 255, 0.1)"
      position="relative"
      cursor="pointer"
      sx={{
        ":hover::before": {
          opacity: 1,
        },
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          w: "100%",
          h: "100%",
          borderRadius: "inherit",
          bg: "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)",
          opacity: 0,
          zIndex: 3,
          transition: "opacity 500ms",
        },
        "::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          w: "100%",
          h: "100%",
          borderRadius: "inherit",
          bg: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)",
          opacity: 0,
          zIndex: 1,
          transition: "opacity 500ms",
        },
      }}
    >
      <Box
        className="card-content"
        position="absolute"
        inset="1px"
        p="10px"
        bg={bgColor}
        borderRadius="inherit"
        zIndex="2"
      />
    </Box>
  );
}

export default FlashlightCard;

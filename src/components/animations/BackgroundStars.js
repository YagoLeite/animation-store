import { Flex } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { IoIosStar } from "react-icons/io";
// Define the colors and animation variants
const starColors = ["#FFD700", "#C0C0C0", "#FF6347"]; // Gold, Silver, Tomato
const animationVariants = {
  type1: { rotateX: [0, 360], rotateY: [0, 360], y: [0, 100] },
  type2: { rotateX: [0, 720], rotateY: [0, 254], y: [0, 100] },
  type3: { rotateX: [0, 1080], rotateY: [0, 180], y: [0, 100] },
};

const BackgroundStars = () => {
  const [stars, setStars] = useState([]);
  const containerRef = useRef();
  const lastPosition = useRef({ x: null, y: null });

  const addStar = (x, y) => {
    const newId = `star-${Date.now()}`;
    const color = starColors[Math.floor(Math.random() * starColors.length)];
    const animationType = `type${Math.floor(Math.random() * 3) + 1}`;
    setStars((prevStars) => [
      ...prevStars,
      { id: newId, x, y, color, animationType },
    ]);
  };

  const removeStar = (id) => {
    setStars((currentStars) => currentStars.filter((star) => star.id !== id));
  };

  const handleMouseMove = (e) => {
    if (typeof window !== "undefined" && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (
        x >= 0 &&
        y >= 0 &&
        x <= rect.width &&
        y <= rect.height &&
        (Math.abs(lastPosition.current.x - x) > 50 ||
          Math.abs(lastPosition.current.y - y) > 50)
      ) {
        addStar(x, y);
        lastPosition.current = { x, y };
      }
    }
  };

  return (
    <Flex
      ref={containerRef}
      w="100%"
      h="400px"
      background="linear-gradient(to bottom, #0f0c29, #302b63, #24243e)"
      position="relative"
      onMouseMove={handleMouseMove}
    >
      {stars.map((star) => (
        <Star
          key={star.id}
          id={star.id}
          x={star.x}
          y={star.y}
          color={star.color}
          animationType={star.animationType}
          removeStar={removeStar}
        />
      ))}
    </Flex>
  );
};

function Star({ x, y, id, color, animationType, removeStar }) {
  const variants = {
    initial: { opacity: 1, scale: 1 },
    animate: {
      ...animationVariants[animationType],
      opacity: 0,
      scale: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.span
      initial="initial"
      animate="animate"
      variants={variants}
      onAnimationComplete={() => removeStar(id)}
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        color: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IoIosStar />
    </motion.span>
  );
}

export default BackgroundStars;

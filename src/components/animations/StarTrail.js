import { Flex } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosStar } from "react-icons/io";
// Define the colors and animation variants
const starColors = ["#FFD700", "#C0C0C0", "#FF6347"]; // Gold, Silver, Tomato
const animationVariants = {
  type1: {
    rotateX: [0, 45, 45, 180],
    rotateY: [0, 30, 30, 270],
    rotateZ: [0, 0, 0, 90],
    x: [0, 10, 25],
    y: [0, 135],
    scale: [1, 1, 0.25],
    opacity: [1, 0],
    transition: { duration: 1, ease: "easeInOut" }, // Adjust duration and easing to match your CSS animation
  },
  type2: {
    rotateX: [0, -20, -20, -90],
    rotateY: [0, 10, 10, 45],
    x: [0, -10, -10],
    y: [0, 160],
    scale: [0.25, 1, 0.25],
    opacity: [1, 0],
    transition: { duration: 2, ease: "easeInOut" }, // Adjust duration and easing to match your CSS animation
  },
  type3: {
    rotateX: [0, 0, 0, -180],
    rotateY: [0, 45, 45, -90],
    x: [0, 7, 20],
    y: [0, 120],
    scale: [1, 1, 0.5],
    opacity: [1, 0],
    transition: { duration: 1.5, ease: "easeInOut" }, // Adjust duration and easing to match your CSS animation
  },
};

const StarTrail = () => {
  const [stars, setStars] = useState([]);
  const containerRef = useRef();
  const lastStarTime = useRef(Date.now());

  const addStar = (x, y) => {
    const newId = `star-${Date.now()}`;
    const color = starColors[Math.floor(Math.random() * starColors.length)];
    const animationType = `type${Math.floor(Math.random() * 3) + 1}`;
    setStars((prevStars) => [
      ...prevStars,
      { id: newId, x, y, color, animationType },
    ]);
    lastStarTime.current = Date.now();
  };

  const removeStar = (id) => {
    setStars((currentStars) => currentStars.filter((star) => star.id !== id));
  };

  const handleMouseMove = (e) => {
    const now = Date.now();
    if (
      typeof window !== "undefined" &&
      containerRef.current &&
      now - lastStarTime.current >= 100
    ) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      addStar(x, y);
    }
  };

  useEffect(() => {
    const checkBoundariesInterval = setInterval(() => {
      stars.forEach((star) => {
        const element = document.getElementById(star.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.bottom > window.innerHeight ||
            rect.top < 0 ||
            rect.right > window.innerWidth ||
            rect.left < 0
          ) {
            removeStar(star.id);
          }
        }
      });
    }, 100);

    return () => clearInterval(checkBoundariesInterval);
  }, [stars]);

  return (
    <Flex
      ref={containerRef}
      w="100%"
      h="400px"
      overflow="hidden"
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
    // initial: { opacity: 1, scale: 1 },
    animate: {
      ...animationVariants[animationType],
      //   opacity: 0,
      //   scale: 0,
      //   transition: { duration: 1.5, ease: "easeInOut" },
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

export default StarTrail;

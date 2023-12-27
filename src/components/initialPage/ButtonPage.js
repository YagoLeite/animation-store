import React, { useState, useRef } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useProgress } from "@/hooks/useProgress";

const circleVariants = {
  initial: { scale: 1 },
  animate: {
    scale: 30,
    transition: {
      duration: 0.4,
      type: "easeOut",
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.4,
      type: "easeIn",
    },
  },
};

const ButtonPage = ({ text }) => {
  const { setIsLoading } = useProgress();
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <Link
      href={"/all?page=1"}
      _hover={{ textDecoration: "none" }}
      onClick={() => setIsLoading(true)}
      style={{ width: "100%", height: "100%" }}
    >
      <Flex
        ref={buttonRef}
        as={motion.div}
        whileHover={{ boxShadow: "0px 2px 5px #64ffda", y: -2, color: "black" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        whileTap={{ scale: 0.9 }}
        borderRadius="5px"
        border="2px #64ffda solid"
        w="100%"
        h="100%"
        align="center"
        justify="center"
        position="relative"
        overflow="hidden"
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              variants={circleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                position: "absolute",
                left: `${mousePosition.x - 7.5}px`,
                top: `${mousePosition.y - 7.5}px`,
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: "#64ffda",
                pointerEvents: "none",
              }}
            />
          )}
        </AnimatePresence>
        <Text fontSize="20px" fontFamily="Lekton" zIndex={1}>
          {text}
        </Text>
      </Flex>
    </Link>
  );
};

export default ButtonPage;

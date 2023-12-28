import React, { useState, useRef } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

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

const CircleFillButton = ({ isCoding }) => {
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
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex
          ref={buttonRef}
          as={motion.div}
          whileHover={{
            boxShadow: "0px 2px 5px #64ffda",
            scale: 1.1,
            color: "black",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
          whileTap={{ scale: 0.9 }}
          borderRadius="5px"
          border="2px #64ffda solid"
          w="200px"
          h="70px"
          align="center"
          justify="center"
          position="relative"
          overflow="hidden"
          cursor="pointer"
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
            Hover me
          </Text>
        </Flex>
      )}
    </>
  );
};

function code() {
  return `import React, { useState, useRef } from "react";
    import { Flex, Text } from "@chakra-ui/react";
    import { motion, AnimatePresence } from "framer-motion";
    
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
    
    const CircleFillButton = () => {
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
        <Flex
          ref={buttonRef}
          as={motion.div}
          whileHover={{
            boxShadow: "0px 2px 5px #64ffda",
            scale: 1.1,
            color: "black",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
          whileTap={{ scale: 0.9 }}
          borderRadius="5px"
          border="2px #64ffda solid"
          w="200px"
          h="70px"
          align="center"
          justify="center"
          position="relative"
          overflow="hidden"
          cursor="pointer"
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
                  left: \`\${mousePosition.x - 7.5}px\`,
                  top: \`\${mousePosition.y - 7.5}px\`,
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
            Hover me
          </Text>
        </Flex>
      );
    };
    
    export default CircleFillButton;`;
}

export default CircleFillButton;

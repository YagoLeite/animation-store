import React, { useState } from "react";
import { motion } from "framer-motion";
import { SimpleGrid, Box } from "@chakra-ui/react";

const Spotlight = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const gridColumns = 10;
  const gridRows = 5;

  const calculateIntensity = (currentIndex) => {
    if (hoverIndex === -1) return 0;
    const hoveredRow = Math.floor(hoverIndex / gridColumns);
    const hoveredCol = hoverIndex % gridColumns;
    const currentRow = Math.floor(currentIndex / gridColumns);
    const currentCol = currentIndex % gridColumns;
    const distance = Math.sqrt(
      Math.pow(hoveredRow - currentRow, 2) +
        Math.pow(hoveredCol - currentCol, 2)
    );
    return Math.max(0, 1 - distance / 3);
  };

  return (
    <SimpleGrid columns={gridColumns} spacing="2px" bg="blackAlpha.900" p={4}>
      {Array.from({ length: gridColumns * gridRows }, (_, index) => (
        <Box
          as={motion.div}
          key={index}
          w="20px"
          h="20px"
          borderRadius="50%"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(-1)}
          animate={{
            backgroundImage:
              hoverIndex !== -1 && calculateIntensity(index) > 0
                ? `radial-gradient(circle at center, rgba(255, 255, 255, ${calculateIntensity(
                    index
                  )}) 0%, rgba(0, 0, 0, 0) 70%)`
                : "none",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
      ))}
    </SimpleGrid>
  );
};

export default Spotlight;

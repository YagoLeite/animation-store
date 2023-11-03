import React, { useEffect, useRef } from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const FlashlightCard = ({ isCoding }) => {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!isCoding) {
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
    }
  }, [isCoding]);

  const bgColor = useColorModeValue("rgb(20, 20, 20)", "rgb(23, 23, 23)");

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
          ref={cardsRef}
          wrap="wrap"
          gap={2}
          w="calc(100% - 20px)"
          justify="center"
          sx={{
            ":hover > .card::after": {
              opacity: 1,
            },
          }}
        >
          {[...Array(6)].map((_, idx) => (
            <Card index={idx} key={idx} bgColor={bgColor} />
          ))}
        </Flex>
      )}
    </>
  );
};

function Card({ bgColor }) {
  return (
    <Box
      className="card"
      w={["120px", "150px", "300px"]}
      h={["95px", "130px", "260px"]}
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
      <Flex
        className="card-content"
        position="absolute"
        justify="center"
        align="center"
        inset="2px"
        p="10px"
        bg={bgColor}
        borderRadius="inherit"
        zIndex="2"
      >
        <Text fontSize={["11px", "15px"]}>Hover us!</Text>
      </Flex>
    </Box>
  );
}

function code() {
  return `import React, { useEffect, useRef } from "react";
  import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
  
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
          // The code below has an issue. Adjust the template literal ;)
            card.style.setProperty("--mouse-x", {x}px );
            card.style.setProperty("--mouse-y", {y}px );            
 
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
        justify="center"
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
        w={["95px", "95px", "300px"]}
        h={["75px", "75px", "260px"]}
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
        <Flex
          className="card-content"
          position="absolute"
          justify="center"
          align="center"
          inset="2px"
          p="10px"
          bg={bgColor}
          borderRadius="inherit"
          zIndex="2"
        >
          <Text>Hover us!</Text>
        </Flex>
      </Box>
    );
  }
  
  export default FlashlightCard;
  `;
}

export default FlashlightCard;

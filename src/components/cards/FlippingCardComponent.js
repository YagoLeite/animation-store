import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useControls } from "leva";
import { useState } from "react";

const FlippingCard = ({ controler }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
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
      h="254px"
      alignItems="center"
      justifyContent="center"
      style={{ perspective: 1000 }}
      fontFamily="sans-serif"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        as={motion.div}
        position="relative"
        w="100%"
        h="254px"
        textAlign="center"
        style={{ transformStyle: "preserve-3d" }}
        animate={
          isHovered
            ? { [controler.Rotate]: 180, transition: { duration: 0.5 } }
            : { [controler.Rotate]: 0, transition: { duration: 0.5 } }
        }
      >
        <Box
          as={motion.div}
          position="absolute"
          w="100%"
          h="100%"
          boxShadow="0 8px 14px 0 rgba(0,0,0,0.2)"
          border={`1px solid ${controler.ColorOne}`}
          borderRadius="1rem"
          bg={controler.BackgroundOne}
          color={controler.ColorOne}
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <Center flexDir="column" h="100%" justifyContent="center">
            <Text fontSize="1.5em" fontWeight="900">
              FLIP CARD
            </Text>
            <Text>Hover Me</Text>
          </Center>
        </Box>

        <Box
          as={motion.div}
          position="absolute"
          w="100%"
          h="100%"
          boxShadow="0 8px 14px 0 rgba(0,0,0,0.2)"
          border={`1px solid ${controler.ColorOne}`}
          borderRadius="1rem"
          bg={controler.BackgroundTwo}
          color={controler.ColorTwo}
          style={{
            backfaceVisibility: "hidden",
            transform: `${controler.Rotate}(180deg)`,
          }}
        >
          <Center flexDir="column" h="100%" justifyContent="center">
            <Text fontSize="1.5em" fontWeight="900">
              BACK
            </Text>
            <Text>Leave Me</Text>
          </Center>
        </Box>
      </Box>
    </Flex>
  );
};

const FlippingCardComponent = () => {
  const controler = useControls({
    ColorOne: "#dece3a",
    ColorTwo: "#c7dbc7",
    BackgroundOne: "#4b111b",
    BackgroundTwo: "#0a0b34",
    Amount: { value: 6, min: 1, max: 20, step: 1 },
    Rotate: { value: "rotateY", options: ["rotateY", "rotateX"] },
    ContainerWidth: { value: "100%", max: "100%" },
  });
  return (
    <Flex direction="column" gap="20px" w="100%">
      <Flex w="100%" align="center" justify="center">
        <Flex w={controler.ContainerWidth} border="1px solid white" p="15px">
          <Grid
            templateColumns="repeat(auto-fill, minmax(190px, 1fr))"
            gap="20px"
            w="100%"
          >
            {Array.from({ length: controler.Amount }).map((item, index) => {
              return (
                <Flex as={motion.div}>
                  <FlippingCard key={index} controler={controler} />
                </Flex>
              );
            })}
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FlippingCardComponent;

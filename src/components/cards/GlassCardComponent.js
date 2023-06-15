import React from "react";

import { Flex, Text, Box, Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useControls } from "leva";

const GlassCard = ({ controler }) => {
  return (
    <Flex
      as={motion.div}
      color={controler.TextColor}
      position="relative"
      flexDirection="column"
      justifyContent="space-between"
      width="100%"
      height="15.875em"
      p={4}
      backgroundColor="rgba(255, 255, 255, 0.074)"
      border="1px"
      borderColor="rgba(255, 255, 255, 0.222)"
      backdropFilter="blur(20px)"
      borderRadius=".7rem"
      transition="all ease .3s"
      whileHover={{
        boxShadow: `0px 0px 20px 1px ${controler.BoxShadowColor}`,
        borderColor: "rgba(255, 255, 255, 0.454)",
      }}
    >
      <Flex
        position="absolute"
        top="40%"
        right="30%"
        w="20px"
        h="20px"
        borderRadius="50%"
        bg={controler.LightColor}
        boxShadow={`0 0 30px 40px ${controler.LightColor}`}
        opacity={0.6}
        zIndex="-1"
      />

      <Text fontSize="2rem" fontWeight="500" letterSpacing=".1em">
        GLASS EFFECT
      </Text>
      <Box>
        <Text as="strong" display="block" mb=".5rem">
          JOE WATSON SBF
        </Text>
        <Text fontSize=".9em" fontWeight="300" letterSpacing=".1em">
          0000 000 000 0000
        </Text>
        <Flex>
          <Text fontSize=".7rem" fontWeight="300">
            VALID
          </Text>
          <Text fontSize=".7rem" fontWeight="500" mr=".2rem">
            01/28
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

const GlassCardComponent = () => {
  const controler = useControls({
    LightColor: "#fab5704c",
    BoxShadowColor: "#ffbb763f",
    TextColor: "#ffffff",
    Amount: { value: 6, min: 1, max: 20, step: 1 },
    ContainerWidth: { value: "100%", max: "100%" },
  });

  return (
    <Flex direction="column" gap="20px" w="100%">
      <Flex w="100%" align="center" justify="center">
        <Flex w={controler.ContainerWidth} border="1px solid white" p="35px">
          <Grid
            templateColumns="repeat(auto-fill, minmax(190px, 1fr))"
            gap="30px"
            w="100%"
          >
            {Array.from({ length: controler.Amount }).map((item, index) => {
              return (
                <Flex as={motion.div}>
                  <GlassCard key={index} controler={controler} />
                </Flex>
              );
            })}
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GlassCardComponent;

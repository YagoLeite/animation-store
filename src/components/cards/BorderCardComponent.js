import { Flex, Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useControls } from "leva";

function BorderCard({ controler }) {
  const innerCardVariant = {
    rest: {
      scale: 1,
      borderRadius: "15px",
    },
    hover: {
      scale: 0.98,
      borderRadius: "20px",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <Flex
      as={motion.div}
      whileInView={{
        opacity: 1,
        type: "ease",
        transition: {
          duration: 0.5,
        },
      }}
      initial={{ opacity: 0 }}
      w="100%"
      minW="190px"
      maxW="300px"
    >
      <Flex
        as={motion.div}
        w="100%"
        h="254px"
        borderRadius="20px"
        backgroundImage={`linear-gradient(163deg, ${controler.ColorOne} 0%, ${controler.ColorTwo} 100%)`}
        initial={{ y: 0, boxShadow: "none" }}
        whileHover={{
          boxShadow: `0px 0px 20px 1px ${controler.ShadowColor}`,
          y: -10,
          transition: { duration: 0.2 },
        }}
      >
        <Flex
          as={motion.div}
          w="100%"
          h="254px"
          bg={controler.BackgroundColor}
          variants={innerCardVariant}
          initial="rest"
          whileHover="hover"
          align="center"
          justify="center"
        >
          <Text fontSize="28px" color={controler.TextColor}>
            Hover me
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default function BorderCardComponent() {
  const controler = useControls({
    ShadowColor: "rgba(0, 255, 117, 0.30)",
    ColorOne: "#00ff75",
    ColorTwo: "#3700ff",
    BackgroundColor: "#1e1e6c",
    TextColor: "#53d12c",
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
                <Flex as={motion.div} whileHover={{ y: -5 }}>
                  <BorderCard key={index} controler={controler} />
                </Flex>
              );
            })}
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
}

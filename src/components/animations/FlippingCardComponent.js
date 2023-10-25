import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import CodeSnippet from "../code/CodeSnippet";

const code = ` <Flex
as={motion.div}
initial={{ opacity: 0 }}
whileInView={{
  opacity: 1,
  type: "ease",
  transition: {
    duration: 0.5,
  },
}}
w="300px"
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
      ? { rotateY: 180, transition: { duration: 0.5 } }
      : { rotateY: 0, transition: { duration: 0.5 } }
  }
>
  <Box
    as={motion.div}
    position="absolute"
    w="100%"
    h="100%"
    boxShadow="0 8px 14px 0 rgba(0,0,0,0.2)"
    border="1px solid #dece3a"
    borderRadius="1rem"
    bg="#4b111b"
    color="#dece3a"
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
    border="1px solid #dece3a"
    borderRadius="1rem"
    bg="#0a0b34"
    color="#c7dbc7"
    style={{
      backfaceVisibility: "hidden",
      transform: "rotateY(180deg)",
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
</Flex>`;

const FlippingCard = ({ isCoding }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {isCoding ? (
        <CodeSnippet code={code} />
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
          w="300px"
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
                ? { rotateY: 180, transition: { duration: 0.5 } }
                : { rotateY: 0, transition: { duration: 0.5 } }
            }
          >
            <Box
              as={motion.div}
              position="absolute"
              w="100%"
              h="100%"
              boxShadow="0 8px 14px 0 rgba(0,0,0,0.2)"
              border={`1px solid #dece3a`}
              borderRadius="1rem"
              bg="#4b111b"
              color="#dece3a"
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
              border="1px solid #dece3a"
              borderRadius="1rem"
              bg="#0a0b34"
              color="#c7dbc7"
              style={{
                backfaceVisibility: "hidden",
                transform: `rotateY(180deg)`,
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
      )}
    </>
  );
};

export default FlippingCard;

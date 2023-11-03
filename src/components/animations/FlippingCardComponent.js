import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const FlippingCard = ({ isCoding }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex
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
              border={`1px solid #64ffda`}
              borderRadius="1rem"
              bg="rgb(20, 20, 20)"
              color="#64ffda"
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
              border="1px solid #64ffda"
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

function code() {
  return ` 
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
 </Flex>
 `;
}
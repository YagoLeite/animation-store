import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const TwitchCard = ({ isCoding }) => {
  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex direction="column" gap="5px">
          <Flex w={["300px", "400px", "400px", "400px"]} h="250px" bg="black">
            <Flex
              as={motion.div}
              cursor="pointer"
              whileHover={{
                transform: "translate(5px, -5px)",
              }}
              position="relative"
              w={["300px", "400px", "400px", "400px"]}
              h="250px"
              bg="pink"
            >
              <Image
                src="https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/16:9/w_1600%2Cc_limit/gettyimages-1146431497.jpg"
                objectFit="cover"
              />
              <Flex
                position="absolute"
                borderRadius="10px"
                top="5%"
                left="5%"
                w="fit-content"
                px="20px"
                py="2px"
                bg="red"
                justify="center"
                align="center"
              >
                <Text fontWeight="bold" fontSize={["14px", "15px", "16px"]}>
                  LIVE
                </Text>
              </Flex>
              <Flex
                position="absolute"
                bottom="5%"
                left="5%"
                w="fit-content"
                px="5px"
                background="rgba(0, 0, 0, 0.5)"
                justify="center"
                align="center"
              >
                <Text fontSize={["14px", "15px", "16px"]}>
                  9,2 thousand watching
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex w="100%" gap="10px" align="top">
            <Avatar size="sm" mt="5px" cursor="pointer" />
            <Flex w="100%" direction="column">
              <Text
                cursor="pointer"
                _hover={{ color: "#bf94ff" }}
                w="fit-content"
                fontSize={["14px", "15px", "18px"]}
              >
                Your Live's Name!
              </Text>
              <Text
                cursor="pointer"
                w="fit-content"
                opacity="0.9"
                fontSize={["13px", "14px", "15px"]}
              >
                TwitchID
              </Text>
              <Text
                cursor="pointer"
                _hover={{ color: "#bf94ff" }}
                w="fit-content"
                opacity="0.9"
                fontSize={["12px", "13px", "13px"]}
              >
                Game
              </Text>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};

function code() {
  return `
import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const TwitchCard = () => {
  return (
    <Flex direction="column" gap="5px">
      <Flex w={["300px", "400px", "400px", "400px"]} h="250px" bg="black">
        <Flex
          as={motion.div}
          cursor="pointer"
          whileHover={{
            transform: "translate(5px, -5px)",
          }}
          position="relative"
          w={["300px", "400px", "400px", "400px"]}
          h="250px"
          bg="pink"
        >
          <Image
            src="https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/16:9/w_1600%2Cc_limit/gettyimages-1146431497.jpg"
            objectFit="cover"
          />
          <Flex
            position="absolute"
            borderRadius="10px"
            top="5%"
            left="5%"
            w="fit-content"
            px="20px"
            py="2px"
            bg="red"
            justify="center"
            align="center"
          >
            <Text fontWeight="bold" fontSize={["14px", "15px", "16px"]}>
              LIVE
            </Text>
          </Flex>
          <Flex
            position="absolute"
            bottom="5%"
            left="5%"
            w="fit-content"
            px="5px"
            background="rgba(0, 0, 0, 0.5)"
            justify="center"
            align="center"
          >
            <Text fontSize={["14px", "15px", "16px"]}>
              9,2 thousand watching
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" gap="10px" align="top">
        <Avatar size="sm" mt="5px" cursor="pointer" />
        <Flex w="100%" direction="column">
          <Text
            cursor="pointer"
            _hover={{ color: "#bf94ff" }}
            w="fit-content"
            fontSize={["14px", "15px", "18px"]}
          >
            Your Live's Name!
          </Text>
          <Text
            cursor="pointer"
            w="fit-content"
            opacity="0.9"
            fontSize={["13px", "14px", "15px"]}
          >
            TwitchID
          </Text>
          <Text
            cursor="pointer"
            _hover={{ color: "#bf94ff" }}
            w="fit-content"
            opacity="0.9"
            fontSize={["12px", "13px", "13px"]}
          >
            Game
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TwitchCard;`;
}

export default TwitchCard;

import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";

const Showcase = ({ data }) => {
  const [isCoding, setIsCoding] = useState(false);
  const ComponentToRender = data?.component;
  return (
    <Flex
      w="100%"
      h="fit-content"
      direction="column"
      borderWidth="1px"
      borderColor="black"
      borderRadius="10px 10px 0px 0px"
      borderStyle="solid"
      boxShadow="md"
      color="white"
    >
      {/* showcase header */}
      <Flex
        w="100%"
        h="40px"
        p="8px"
        justify="space-between"
        borderBottom="1px solid black"
      >
        <Flex>{data?.name}</Flex>
        <Flex
          onClick={() => setIsCoding((prev) => !prev)}
          gap="8px"
          align="center"
          justify="center"
        >
          <BsCodeSlash />
          <Text fontSize="12px" fontWeight="800">
            Code
          </Text>
        </Flex>
      </Flex>
      <Flex
        justify={isCoding ? "left" : "center"}
        align="center"
        bg="rgb(62, 62, 62)"
        h="fit-content"
        p={isCoding ? "0px" : "30px"}
      >
        {ComponentToRender && <ComponentToRender isCoding={isCoding} />}
      </Flex>
    </Flex>
  );
};

export default Showcase;

import Header from "@/components/header/Header";
import { data } from "@/data";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const { query, back } = useRouter();
  const content = data.find((item) => item.name === query.projectName);
  return (
    <Flex minH="100vh" bg="#0a192f" w="100%" justify="center">
      <Flex w="100%" maxW="1400px" direction="column" gap="20px">
        <Header />
        {content && (
          <Flex w="100%" justify="center">
            {content.content}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default index;

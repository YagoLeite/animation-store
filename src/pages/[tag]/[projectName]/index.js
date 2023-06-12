import Header from "@/components/header/Header";
import { data } from "@/data";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const { query, back } = useRouter();
  const content = data.find((item) => item.name === query.projectName);
  return (
    <Flex w="100%" direction="column" gap="20px" bg="#0a192f">
      <Header />
      {content && (
        <Flex w="100%" justify="center">
          {content.content}
        </Flex>
      )}
    </Flex>
  );
};

export default index;

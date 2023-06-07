import BritComponent from "@/components/cards/BritComponent";
import ExpandCards from "@/components/cards/ExpandCards";
import Header from "@/components/header/Header";
import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const data = { "expanding-cards": <ExpandCards />, brit: <BritComponent /> };

const index = () => {
  const { query, back } = useRouter();

  return (
    <Flex direction="column">
      <Header />
      <Flex direction="column" p="30px" gap="20px">
        <Text cursor="pointer" onClick={() => back()}>
          Voltar
        </Text>
        {data[query.projectName]}
      </Flex>
    </Flex>
  );
};

export default index;

import Header from "@/components/header/Header";
import { data } from "@/data";
import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const { query, back } = useRouter();
  return (
    <Flex direction="column">
      <Header />
      <Text>{query.tag} category!</Text>
      <Flex gap="10px">
        {data
          .filter((item) => item.tags.includes(query.tag))
          .map((item, index) => {
            return (
              <Link href={`tag/${item.name}`} key={index}>
                <TagCard item={item} />
              </Link>
            );
          })}
      </Flex>
    </Flex>
  );
};

function TagCard({ item }) {
  return (
    <Flex
      direction="column"
      gap="15px"
      bg="green"
      w="fit-content"
      justify="top"
    >
      <Flex w="400px" h="300px" justify="center" align="center" bg="pink">
        <Image src={item.image} objectFit="cover" />
      </Flex>
      <Flex bg="red" gap="10px">
        {item.tags.map((tag, index) => {
          return <Text>{tag}</Text>;
        })}
      </Flex>
    </Flex>
  );
}

export default index;

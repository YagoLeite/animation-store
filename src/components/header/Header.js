import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  console.log("oi");
  return (
    <Flex w="100%" h="50px" gap="30px">
      <Text>Animation Store</Text>
      <Link href="/card">Cards</Link>
    </Flex>
  );
};

export default Header;

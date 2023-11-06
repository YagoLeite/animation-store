import { Flex } from "@chakra-ui/react";
import Header from "@/components/header/Header";
import Hero from "@/components/initialPage/Hero";
import Footer from "@/components/footer/Footer";
import Display from "@/components/initialPage/Display";
import Stacks from "@/components/initialPage/Stacks";

export default function Home() {
  return (
    <Flex
      direction="column"
      bg="#141517"
      color="#ccd6f6"
      align="center"
      w="100%"
      maxW="100vw"
      pb="30px"
    >
      <Header />
      <Hero />
      <Flex w="100%" direction="column" gap="60px" align="center">
        <Display />
        <Stacks />
      </Flex>
      <Flex w="100%" justify="center" align="center" mt="30px">
        <Footer />
      </Flex>
    </Flex>
  );
}

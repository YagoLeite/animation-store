import { Flex } from "@chakra-ui/react";
import Header from "@/components/header/Header";
import Hero from "@/components/initialPage/Hero";
import Showcase from "@/components/showcase/Showcase";
import { data } from "@/data";
import Footer from "@/components/footer/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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
      <Flex w="100%" maxW="1440px" align="center" justify="center" px="20px">
        <Showcase data={data[currentIndex]} delay={1} />
      </Flex>
      <Flex w="100%" justify="center" align="center" mt="30px">
        <Footer />
      </Flex>
    </Flex>
  );
}

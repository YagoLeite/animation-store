import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Flex } from "@chakra-ui/react";
import Header from "@/components/header/Header";
import Hero from "@/components/initialPage/Hero";
import LibraryDescription from "@/components/initialPage/LibraryDescription";
import Showcase from "@/components/showcase/Showcase";
import { data } from "@/data";
import Footer from "@/components/footer/Footer";

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
      <Flex w="100%" maxW="1000px" align="center" justify="center" px="20px">
        <Showcase data={data[1]} />
      </Flex>
      <Flex w="100%" justify="center" align="center" mt="30px">
        <Footer />
      </Flex>
    </Flex>
  );
}

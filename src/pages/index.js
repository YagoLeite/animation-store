import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Flex } from "@chakra-ui/react";
import Header from "@/components/header/Header";
import Hero from "@/components/initialPage/Hero";
import LibraryDescription from "@/components/initialPage/LibraryDescription";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Flex direction="column" bg="#0a192f" color="#ccd6f6" align="center">
      <Flex w="100%" maxW="1400px" direction="column" align="center">
        <Header />
        <Hero />
        <LibraryDescription />
      </Flex>
    </Flex>
  );
}

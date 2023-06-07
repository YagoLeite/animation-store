import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Flex } from "@chakra-ui/react";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
    </Flex>
  );
}

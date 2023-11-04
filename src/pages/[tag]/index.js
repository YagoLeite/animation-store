import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Pagination from "@/components/initialPage/Pagination";
import Sidebar from "@/components/sidebar/Sidebar";
import { data } from "@/data";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import slugify from "react-slugify";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = ({ ogTitle, ogDescription, ogImage }) => {
  const router = useRouter();
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const filteredData = data.filter((anim) =>
    anim.tags.includes(router.query.tag)
  );

  const toggleHandler = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  useEffect(() => {
    setIsToggleMenuOpen(false);
  }, [router.query.tag]);

  return (
    <>
      <Head>
        <title>Animation Store</title>
        <meta property="og:title" content={ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={ogDescription} />
        <meta name="author" content="Yago Leite"></meta>
        <meta property="og:image" content={ogImage} />
      </Head>
      <Flex direction="column" bg="#141517" color="#ccd6f6" h="100%">
        <Header
          isToggleMenuOpen={isToggleMenuOpen}
          toggleHandler={toggleHandler}
          setIsToggleMenuOpen={setIsToggleMenuOpen}
        />
        <Flex>
          <Flex display={["none", "none", "flex", "flex"]}>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          </Flex>
          <Flex
            direction="column"
            overflowX="hidden"
            minH="calc(100vh - 70px)"
            gap="20px"
            px="20px"
            pb="30px"
            w="100%"
          >
            <Pagination data={filteredData} />
            <Footer />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { query, resolvedUrl } = context;
  const hash = resolvedUrl.includes("#")
    ? resolvedUrl.split("#")[1]
    : undefined;

  const ogData = data.find((item) => slugify(item.name) === hash);

  // Prepare the OG tags data based on the URL hash
  const title = hash && ogData ? ogData.name : "Animation Store";
  const description =
    hash && ogData ? ogData.description : "Animated component for developers";
  const image =
    hash && ogData
      ? ogData.image
      : "https://animation-store.vercel.app/pokemonCardImage.png";

  // Pass the OG tags data to the page via props
  return {
    props: {
      ogTitle: title,
      ogDescription: description,
      ogImage: image,
    },
  };
};

export default index;

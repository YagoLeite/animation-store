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


const index = ({ ogTitle, ogDescription, ogImage, ogUrl }) => {
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
        <title>{ogTitle}</title>
        {/* General OG tags */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />{" "}
        {/* You should define ogUrl in getServerSideProps */}
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@yourTwitterHandle" />{" "}
        {/* Your Twitter handle */}
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
        {/* Additional tags for other purposes */}
        <meta name="description" content={ogDescription} />
        <meta name="author" content="Yago Leite" />
        {/* Favicon - recommended to have one */}
        <link rel="icon" href="/favicon.ico" />
        {/* Additional meta tags can be added here as needed */}
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
  const { query } = context;
  const filter = query.filter;
  const ogUrl = `https://${context.req.headers.host}${context.resolvedUrl}`;

  const ogData = filter
    ? data.find((item) => slugify(item.name) === filter)
    : undefined;

  const title = ogData ? ogData.name : "Animation Store";
  const description = ogData
    ? ogData.description
    : "Animated component for developers";
  const image = ogData
    ? ogData.image
    : "https://animation-store.vercel.app/pokemonCardImage.png";

  return {
    props: {
      ogTitle: title,
      ogDescription: description,
      ogImage: image,
      ogUrl: ogUrl,
    },
  };
};


export default index;

import { Flex } from "@chakra-ui/react";
import Header from "@/components/header/Header";
import Hero from "@/components/initialPage/Hero";
import Footer from "@/components/footer/Footer";
import Display from "@/components/initialPage/Display";
import Stacks from "@/components/initialPage/Stacks";
import Head from "next/head";

export default function Home({ ogUrl, ogImage, ogDescription, ogTitle }) {
  return (
    <>
      <Head>
        <title>{ogTitle}</title>
        {/* Standard OG tags for all platforms including Facebook */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:site_name" content="Animation Store" />
        {/* Specific Facebook tags */}
        <meta property="fb:app_id" content="yourAppId" />{" "}
        {/* Your Facebook app ID if you have one */}
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@yourTwitterHandle" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
        {/* Meta tags beneficial for SEO */}
        <meta name="description" content={ogDescription} />
        <meta name="author" content="Yago Leite" />
        <meta
          name="keywords"
          content="Animation, Store, Web Components, etc"
        />{" "}
        {/* Relevant keywords */}
        {/* Specify a canonical link if you have duplicate content across different URLs */}
        <link rel="canonical" href={ogUrl} />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Additional meta tags can be added here as needed */}
      </Head>

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
    </>
  );
}

export const getServerSideProps = async (context) => {
  const ogUrl = `https://${context.req.headers.host}${context.resolvedUrl}`;
  return {
    props: {
      ogTitle: "Animation Store",
      ogDescription: "Animated component for developers",
      ogImage: "https://animation-store.vercel.app/homePageImage.png",
      ogUrl: ogUrl,
    },
  };
};

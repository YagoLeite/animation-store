import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Pagination from "@/components/initialPage/Pagination";
import Sidebar from "@/components/sidebar/Sidebar";
import { data } from "@/data";
import { Flex } from "@chakra-ui/react";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const { query } = useRouter();
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  const toggleHandler = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  useEffect(() => {
    setIsToggleMenuOpen(false);
  }, [query.tag]);

  const filteredData = data.filter((anim) => anim.tags.includes(query.tag));
  const [isOpen, setIsOpen] = useState(true);
  return (
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
  );
};

export default index;

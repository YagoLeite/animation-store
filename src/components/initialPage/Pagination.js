import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Showcase from "../showcase/Showcase";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useProgress } from "@/hooks/useProgress";
const ITEMS_PER_PAGE = 5;

const Pagination = ({ data }) => {
  const { query, push } = useRouter();
  const [paginatedData, setPaginatedData] = useState([]);
  const { setIsLoading } = useProgress();

  const currentPage = Number(query.page);

  const changePage = (page) => {
    const queryParam = { ...query, page: page.toString() };

    push({ pathname: query.pathname, query: queryParam }, undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  useEffect(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const newPaginatedData = data.slice(start, end);
    setPaginatedData(newPaginatedData);
  }, [data, currentPage]);

  const pageCount = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <>
      {paginatedData?.map((item) => {
        return <Showcase data={item} key={item.key} />;
      })}
      <Flex justify="center">
        <Flex justifyContent="space-between" w="80%" align="center" gap="10px">
          <Flex
            as={motion.button}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            h="30px"
            w="40px"
            justify="center"
            align="center"
            cursor="pointer"
            onClick={() => {
              setIsLoading(true);
              changePage(currentPage - 1);
            }}
            disabled={currentPage === 1}
            bg="#3633433d"
            borderRadius="10px"
          >
            <AiOutlineLeft size="80%" />
          </Flex>
          <Flex w="fit-content" gap="15px" justify="center" align="center">
            {Array.from({ length: pageCount }, (_, i) => (
              <Flex
                as={motion.button}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
                borderRadius="10px"
                h="30px"
                w="40px"
                justify="center"
                align="center"
                cursor="pointer"
                bg={currentPage === i + 1 ? "#363343a1" : "#3633433d"}
                key={i}
                onClick={() => {
                  setIsLoading(true);
                  changePage(i + 1);
                }}
                disabled={currentPage === i + 1}
              >
                {i + 1}
              </Flex>
            ))}
          </Flex>
          <Flex
            as={motion.button}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            h="30px"
            w="40px"
            cursor="pointer"
            justify="center"
            align="center"
            onClick={() => {
              setIsLoading(true);
              changePage(currentPage + 1);
            }}
            disabled={currentPage === pageCount}
            bg="#3633433d"
            borderRadius="10px"
          >
            <AiOutlineRight size="80%" />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Pagination;

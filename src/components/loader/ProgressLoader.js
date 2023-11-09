import { useProgress } from "@/hooks/useProgress";
import { Flex, Progress } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ProgressLoader = () => {
  const { isLoading, setIsLoading } = useProgress();
  const router = useRouter();

  useEffect(() => {
    setIsLoading(false);
  }, [router.query.tag, router.query.filter, router.query.page]);

  return (
    <>
      {isLoading ? (
        <Progress
          position="sticky"
          top="0"
          zIndex={28}
          borderColor="#64ffda"
          size="xs"
          h="3px"
          w="100%"
          isIndeterminate
          bg="#141517"
        />
      ) : (
        <Flex w="100%" h="3px" bg="#141517" />
      )}
    </>
  );
};

export default ProgressLoader;

import { useProgress } from "@/hooks/useProgress";
import { Flex, Progress } from "@chakra-ui/react";
import React from "react";

const ProgressLoader = () => {
  const { isLoading } = useProgress();
  console.log(isLoading);
  return (
    <>
      {isLoading ? (
        <Progress
          position="sticky"
          top="0"
          zIndex={8}
          // size="xs"
          h="3px"
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

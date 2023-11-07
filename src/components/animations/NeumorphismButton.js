import { Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const NeumorphismButton = ({ isCoding }) => {
  const boxShadowNormal = " -5px 5px 10px #353535,  5px -5px 10px #474747";
  const boxShadowHover =
    "inset -5px 5px 10px #212121, inset 5px -5px 10px #5b5b5b";
  const colorTextNormal = "rgb(200, 200, 200)";
  const colorTextHover = "rgb(255, 255, 255)";

  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Button
          as={motion.button}
          px="4"
          py="2"
          h="70px"
          w="190px"
          bg="transparent"
          borderRadius="10px"
          display="flex"
          alignItems="center"
          gap="2"
          color={colorTextNormal}
          boxShadow={boxShadowNormal}
          whileHover={{
            boxShadow: boxShadowHover,
            color: colorTextHover,
          }}
          transition="all"
          _hover={{
            background: "none",
          }}
        >
          <Text fontSize="16px">Hover Me</Text>
        </Button>
      )}
    </>
  );
};

function code() {
  return `
import { Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const NeumorphismButton = () => {
  const boxShadowNormal = " -5px 5px 10px #353535,  5px -5px 10px #474747";
  const boxShadowHover =
    "inset -5px 5px 10px #212121, inset 5px -5px 10px #5b5b5b";
  const colorTextNormal = "rgb(200, 200, 200)";
  const colorTextHover = "rgb(255, 255, 255)";

  return (
    <Button
      as={motion.button}
      px="4"
      py="2"
      h="70px"
      w="190px"
      bg="transparent"
      borderRadius="10px"
      display="flex"
      alignItems="center"
      gap="2"
      color={colorTextNormal}
      boxShadow={boxShadowNormal}
      whileHover={{
        boxShadow: boxShadowHover,
        color: colorTextHover,
      }}
      transition="all"
      _hover={{
        background: "none",
      }}
    >
      <Text fontSize="16px">Hover Me</Text>
    </Button>
  );
};

export default NeumorphismButton;

    `;
}

export default NeumorphismButton;

import { useRef, useState } from "react";
import { Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const TARGET_TEXT = "Hover this btn";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 60;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const CrazyTextButton = ({ isCoding }) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(TARGET_TEXT);
  };

  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Button
          as={motion.button}
          onMouseEnter={() => {
            scramble();
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseLeave={stopScramble}
          w="200px"
          h="70px"
          bg="#050d12"
          color="gray.300"
          _hover={{
            background: "gray.900",
          }}
          gap="10px"
          borderWidth="1px"
          borderColor="black"
          borderRadius="lg"
          textTransform="uppercase"
          fontSize={["20px"]}
          fontFamily="Lekton"
          overflow="hidden"
        >
          <Text>{text}</Text>
        </Button>
      )}
    </>
  );
};

function code() {
  return `
import { useRef, useState } from "react";
import { Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TARGET_TEXT = "Hover this btn";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 60;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const CrazyTextButton = () => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(TARGET_TEXT);
  };

  return (
    <Button
      as={motion.button}
      onMouseEnter={() => {
        scramble();
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onMouseLeave={stopScramble}
      w="200px"
      h="70px"
      bg="#050d12"
      color="gray.300"
      _hover={{
        background: "gray.900",
      }}
      gap="10px"
      borderWidth="1px"
      borderColor="black"
      borderRadius="lg"
      textTransform="uppercase"
      fontSize={["20px"]}
      fontFamily="Lekton"
      overflow="hidden"
    >
      <Text>{text}</Text>
    </Button>
  );
};

export default CrazyTextButton;

    `;
}

export default CrazyTextButton;

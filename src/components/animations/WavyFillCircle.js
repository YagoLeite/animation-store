import { Flex, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const containerVariant = {
  animate: {
    y: ["80%", "-10%", "80%"],
    transition: {
      duration: 8,
      repeat: Infinity,
    },
  },
};

const svgVariant = {
  animateOne: {
    x: ["0%", "-70%", "0%"],
    transition: {
      duration: 8,
      repeat: Infinity,
    },
  },
  animateTwo: {
    x: ["-70%", "0%", "-70%"],
    transition: {
      duration: 8,
      repeat: Infinity,
    },
  },
};

const WavyFillCircle = ({ isCoding }) => {
  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex
          w="80px"
          h="80px"
          borderRadius="50%"
          bgGradient="linear(to-t, #f3f3f3, #667ae3)"
          overflow="hidden"
        >
          <Flex
            as={motion.div}
            variants={containerVariant}
            animate="animate"
            w="200px"
            h="100px"
            position="relative"
          >
            <Flex
              as={motion.div}
              variants={svgVariant}
              animate="animateOne"
              position="absolute"
              w="fit-content"
              h="fit-content"
              zIndex="1"
            >
              <BackgroundIconOne />
            </Flex>
            <Flex
              as={motion.div}
              variants={svgVariant}
              animate="animateTwo"
              position="absolute"
              w="fit-content"
              h="fit-content"
            >
              <BackgroundIconTwo osition="absolute" />
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};

function BackgroundIconTwo({ props }) {
  return (
    <Icon
      {...props}
      width="268"
      height="99"
      viewBox="0 0 268 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 99V27.0453C0 21.2178 2.13437 15.592 5.99984 11.2309C13.7759 2.45792 26.7761 0.639833 36.6606 6.943L38.6489 8.21091C47.8122 14.0541 59.6893 13.3642 68.1144 6.49935C75.9311 0.130198 86.792 -0.966088 95.7238 3.71249L106.484 9.34853C116.605 14.6505 128.855 13.7771 138.122 7.0925C147.522 0.311859 159.977 -0.481766 170.162 5.05086L175.813 8.12052C187.069 14.2349 200.73 13.8869 211.661 7.20738C222.952 0.307088 237.124 0.179592 248.538 6.87563L249.168 7.24509C260.524 13.9074 267.5 26.0879 267.5 39.2542V99H0Z"
        fill="url(#paint0_linear_134_3)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_134_3"
          x1="133.75"
          y1="-4"
          x2="133.75"
          y2="99"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.21" stop-color="#075EE2" />
          <stop offset="1" stop-color="#04025F" stop-opacity="0.83" />
        </linearGradient>
      </defs>
    </Icon>
  );
}

function BackgroundIconOne({ props }) {
  return (
    <Icon
      width="268"
      height="99"
      viewBox="0 0 268 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 99V27.0453C0 21.2178 2.13437 15.592 5.99984 11.2309C13.7759 2.45792 26.7761 0.639833 36.6606 6.943L38.6489 8.21091C47.8122 14.0541 59.6893 13.3642 68.1144 6.49935C75.9311 0.130198 86.792 -0.966088 95.7238 3.71249L106.484 9.34853C116.605 14.6505 128.855 13.7771 138.122 7.0925C147.522 0.311859 159.977 -0.481766 170.162 5.05086L175.813 8.12052C187.069 14.2349 200.73 13.8869 211.661 7.20738C222.952 0.307088 237.124 0.179592 248.538 6.87563L249.168 7.24509C260.524 13.9074 267.5 26.0879 267.5 39.2542V99H0Z"
        fill="url(#paint0_linear_134_2)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_134_2"
          x1="133.75"
          y1="-4"
          x2="133.75"
          y2="99"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.21" stop-color="#07B9F1" />
          <stop offset="1" stop-color="#0D09E3" stop-opacity="0.83" />
        </linearGradient>
      </defs>
    </Icon>
  );
}

function code() {
  return `
import { Flex, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const containerVariant = {
  animate: {
    y: ["80%", "-10%", "80%"],
    transition: {
      duration: 8,
      repeat: Infinity,
    },
  },
};

const svgVariant = {
  animateOne: {
    x: ["0%", "-70%", "0%"],
    transition: {
      duration: 8,
      repeat: Infinity,
    },
  },
  animateTwo: {
    x: ["-70%", "0%", "-70%"],
    transition: {
      duration: 8,
      repeat: Infinity,
    },
  },
};

const WavyFillCircle = () => {
  return (
    <Flex
      w="80px"
      h="80px"
      borderRadius="50%"
      bgGradient="linear(to-t, #f3f3f3, #667ae3)"
      overflow="hidden"
    >
      <Flex
        as={motion.div}
        variants={containerVariant}
        animate="animate"
        w="200px"
        h="100px"
        position="relative"
      >
        <Flex
          as={motion.div}
          variants={svgVariant}
          animate="animateOne"
          position="absolute"
          w="fit-content"
          h="fit-content"
          zIndex="1"
        >
          <BackgroundIconOne />
        </Flex>
        <Flex
          as={motion.div}
          variants={svgVariant}
          animate="animateTwo"
          position="absolute"
          w="fit-content"
          h="fit-content"
        >
          <BackgroundIconTwo osition="absolute" />
        </Flex>
      </Flex>
    </Flex>
  );
};

function BackgroundIconTwo({ props }) {
  return (
    <Icon
      {...props}
      width="268"
      height="99"
      viewBox="0 0 268 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 99V27.0453C0 21.2178 2.13437 15.592 5.99984 11.2309C13.7759 2.45792 26.7761 0.639833 36.6606 6.943L38.6489 8.21091C47.8122 14.0541 59.6893 13.3642 68.1144 6.49935C75.9311 0.130198 86.792 -0.966088 95.7238 3.71249L106.484 9.34853C116.605 14.6505 128.855 13.7771 138.122 7.0925C147.522 0.311859 159.977 -0.481766 170.162 5.05086L175.813 8.12052C187.069 14.2349 200.73 13.8869 211.661 7.20738C222.952 0.307088 237.124 0.179592 248.538 6.87563L249.168 7.24509C260.524 13.9074 267.5 26.0879 267.5 39.2542V99H0Z"
        fill="url(#paint0_linear_134_3)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_134_3"
          x1="133.75"
          y1="-4"
          x2="133.75"
          y2="99"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.21" stop-color="#075EE2" />
          <stop offset="1" stop-color="#04025F" stop-opacity="0.83" />
        </linearGradient>
      </defs>
    </Icon>
  );
}

function BackgroundIconOne({ props }) {
  return (
    <Icon
      width="268"
      height="99"
      viewBox="0 0 268 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 99V27.0453C0 21.2178 2.13437 15.592 5.99984 11.2309C13.7759 2.45792 26.7761 0.639833 36.6606 6.943L38.6489 8.21091C47.8122 14.0541 59.6893 13.3642 68.1144 6.49935C75.9311 0.130198 86.792 -0.966088 95.7238 3.71249L106.484 9.34853C116.605 14.6505 128.855 13.7771 138.122 7.0925C147.522 0.311859 159.977 -0.481766 170.162 5.05086L175.813 8.12052C187.069 14.2349 200.73 13.8869 211.661 7.20738C222.952 0.307088 237.124 0.179592 248.538 6.87563L249.168 7.24509C260.524 13.9074 267.5 26.0879 267.5 39.2542V99H0Z"
        fill="url(#paint0_linear_134_2)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_134_2"
          x1="133.75"
          y1="-4"
          x2="133.75"
          y2="99"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.21" stop-color="#07B9F1" />
          <stop offset="1" stop-color="#0D09E3" stop-opacity="0.83" />
        </linearGradient>
      </defs>
    </Icon>
  );
}

export default WavyFillCircle;`;
}

export default WavyFillCircle;

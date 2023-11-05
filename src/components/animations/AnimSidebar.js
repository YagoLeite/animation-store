import { Box, Flex, Text, Button, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillBehanceCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const variants = {
  open: {
    width: "240px",
    transition: { duration: 0.5, ease: "easeIn" },
  },
  closed: { width: "65px", transition: { duration: 0.5, ease: "easeIn" } },
};

const textVariants = {
  open: {
    opacity: 1,
    display: "block",
    transition: { delay: 0.5, duration: 1 },
  },
  closed: { opacity: 0, display: "none" },
};

const mobileVariants = {
  open: {
    width: "100%",
    transition: { duration: 0.5, ease: "linear" },
  },
  // closed: { width: "65px", transition: { duration: 1, ease: "easeIn" } },
};

const data = [
  { name: "facebook", icon: <AiFillFacebook size="100%" /> },
  { name: "twitter", icon: <AiFillTwitterSquare size="100%" /> },
  { name: "instagram", icon: <AiFillInstagram size="100%" /> },
  { name: "linkedIn", icon: <AiFillLinkedin size="100%" /> },
  { name: "gitHub", icon: <AiFillGithub size="100%" /> },
  { name: "behance", icon: <AiFillBehanceCircle size="100%" /> },
];

const AnimSidebar = ({ isCoding }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  const toggleHandler = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };
  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
        <Flex justify="center" px="10px" align="center" py="20px">
          <Flex
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              type: "ease",
              transition: {
                duration: 0.5,
              },
            }}
            w="100%"
            direction="column"
            bg="#010914"
            position="relative"
          >
            <Flex
              justify="space-between"
              align="center"
              w="100%"
              h="70px"
              px="8px"
            >
              {isMobile && (
                <>
                  <Button
                    _hover={{ color: "gray.300" }}
                    onClick={toggleHandler}
                    variant="ghost"
                  >
                    <FaBars size={30} color="white" />
                  </Button>

                  {isToggleMenuOpen && (
                    <AnimMobileSidebar
                      isOpen={isToggleMenuOpen}
                      setIsOpen={setIsToggleMenuOpen}
                    />
                  )}
                </>
              )}

              <Text>Header</Text>
              <Text
                onClick={() => setIsMobile((prev) => !prev)}
                cursor="pointer"
                fontSize="13px"
              >
                {isMobile ? "Desktop" : "Mobile"}
              </Text>
            </Flex>
            <Flex w="100%">
              {!isMobile && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
              <Flex w="100%" p="15px" bg="#1c1c1e">
                <Flex
                  w="100%"
                  minH="400px"
                  border="1px solid white"
                  align="center"
                  justify="center"
                  onClick={() => setIsOpen((prev) => !prev)}
                  cursor="pointer"
                  direction="column"
                  gap="20px"
                >
                  <Text>{isOpen ? "Close Sidebar" : "Open Sidebar"}</Text>
                  <Text textAlign="center">Your component goes here</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <Flex
      as={motion.ul}
      direction="column"
      position="sticky"
      px="8px"
      py="10px"
      top="70px"
      gap="10px"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      w="100%"
      bg="#010914"
    >
      {data.map((obj, index) => {
        return (
          <SidebarButton
            isOpen={isOpen}
            textVariants={textVariants}
            data={obj}
            index={index}
            setIsOpen={setIsOpen}
          />
        );
      })}
    </Flex>
  );
}

function SidebarButton({ isOpen, setIsOpen, textVariants, data }) {
  return (
    <li
      style={{
        listStyle: "none",
        width: "100%",
        cursor: "pointer",
      }}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <Flex
        as={motion.div}
        whileTap={{ scale: 0.9 }}
        whileHover={{ color: "#64ffda", gap: "20px" }}
        h="50px"
        borderRadius="10px"
        gap="13px"
        w="100%"
        px="15px"
        bg="transparent linear-gradient(180deg, #8B98A9 0%, #0F161C 100%) 0% 0% no-repeat padding-box"
        justify="left"
        align="center"
      >
        <Flex h="18px" w="18px" align="center" justify="center">
          {data.icon}
        </Flex>
        <Text
          as={motion.div}
          animate={isOpen ? "open" : "closed"}
          textTransform="capitalize"
          variants={textVariants}
          fontSize="15px"
        >
          {data.name}
        </Text>
      </Flex>
    </li>
  );
}

function AnimMobileSidebar({ isOpen, setIsOpen, ...rest }) {
  return (
    <Flex
      {...rest}
      as={motion.div}
      position="absolute"
      w="200px"
      top="0"
      left="0"
      animate={isOpen ? "open" : "closed"}
      variants={mobileVariants}
      h="100%"
      direction="column"
      bg="#010914"
      color="white"
      px="20px"
      zIndex="6"
    >
      <Flex h="30px" justify={"space-between"} my="20px">
        <Text letterSpacing={"1.5px"} color="#FFFFFF" opacity={"1"}>
          Tags
        </Text>
        <Box onClick={() => setIsOpen((prev) => !prev)} cursor="pointer">
          <AiOutlineClose />
        </Box>
      </Flex>
      <Divider borderColor="white" w="100%" opacity={0.15} mb="20px" />
      <Flex direction="column" justify="space-between" h="100%" gap="10px">
        <Flex as="ul" direction="column" gap="10px">
          {data.map((item, index) => {
            return (
              <SidebarButton
                key={index}
                data={item}
                textVariants={textVariants}
                isOpen={isOpen}
              />
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

function code() {
  return `
import { Box, Flex, Text, Button, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillBehanceCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const variants = {
  open: {
    width: "240px",
    transition: { duration: 0.5, ease: "easeIn" },
  },
  closed: { width: "65px", transition: { duration: 0.5, ease: "easeIn" } },
};

const textVariants = {
  open: {
    opacity: 1,
    display: "block",
    transition: { delay: 0.5, duration: 1 },
  },
  closed: { opacity: 0, display: "none" },
};

const mobileVariants = {
  open: {
    width: "100%",
    transition: { duration: 0.5, ease: "linear" },
  },
  // closed: { width: "65px", transition: { duration: 1, ease: "easeIn" } },
};

const data = [
  { name: "facebook", icon: <AiFillFacebook size="100%" /> },
  { name: "twitter", icon: <AiFillTwitterSquare size="100%" /> },
  { name: "instagram", icon: <AiFillInstagram size="100%" /> },
  { name: "linkedIn", icon: <AiFillLinkedin size="100%" /> },
  { name: "gitHub", icon: <AiFillGithub size="100%" /> },
  { name: "behance", icon: <AiFillBehanceCircle size="100%" /> },
];

const AnimSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  const toggleHandler = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };
  return (
    <Flex justify="center" px="10px" align="center" py="20px">
      <Flex
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          type: "ease",
          transition: {
            duration: 0.5,
          },
        }}
        w="100%"
        direction="column"
        bg="#010914"
        position="relative"
      >
        <Flex justify="space-between" align="center" w="100%" h="70px" px="8px">
          {isMobile && (
            <>
              <Button
                _hover={{ color: "gray.300" }}
                onClick={toggleHandler}
                variant="ghost"
              >
                <FaBars size={30} color="white" />
              </Button>

              {isToggleMenuOpen && (
                <AnimMobileSidebar
                  isOpen={isToggleMenuOpen}
                  setIsOpen={setIsToggleMenuOpen}
                />
              )}
            </>
          )}

          <Text>Header</Text>
          <Text
            onClick={() => setIsMobile((prev) => !prev)}
            cursor="pointer"
            fontSize="13px"
          >
            {isMobile ? "Desktop" : "Mobile"}
          </Text>
        </Flex>
        <Flex w="100%">
          {!isMobile && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
          <Flex w="100%" p="15px" bg="#1c1c1e">
            <Flex
              w="100%"
              minH="400px"
              border="1px solid white"
              align="center"
              justify="center"
              onClick={() => setIsOpen((prev) => !prev)}
              cursor="pointer"
              direction="column"
              gap="20px"
            >
              <Text>{isOpen ? "Close Sidebar" : "Open Sidebar"}</Text>
              <Text textAlign="center">Your component goes here</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <Flex
      as={motion.ul}
      direction="column"
      position="sticky"
      px="8px"
      py="10px"
      top="70px"
      gap="10px"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      w="100%"
      bg="#010914"
    >
      {data.map((obj, index) => {
        return (
          <SidebarButton
            isOpen={isOpen}
            textVariants={textVariants}
            data={obj}
            index={index}
            setIsOpen={setIsOpen}
          />
        );
      })}
    </Flex>
  );
}

function SidebarButton({ isOpen, setIsOpen, textVariants, data }) {
  return (
    <li
      style={{
        listStyle: "none",
        width: "100%",
        cursor: "pointer",
      }}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <Flex
        as={motion.div}
        whileTap={{ scale: 0.9 }}
        whileHover={{ color: "#64ffda", gap: "20px" }}
        h="50px"
        borderRadius="10px"
        gap="13px"
        w="100%"
        px="15px"
        bg="transparent linear-gradient(180deg, #8B98A9 0%, #0F161C 100%) 0% 0% no-repeat padding-box"
        justify="left"
        align="center"
      >
        <Flex h="18px" w="18px" align="center" justify="center">
          {data.icon}
        </Flex>
        <Text
          as={motion.div}
          animate={isOpen ? "open" : "closed"}
          textTransform="capitalize"
          variants={textVariants}
          fontSize="15px"
        >
          {data.name}
        </Text>
      </Flex>
    </li>
  );
}

function AnimMobileSidebar({ isOpen, setIsOpen, ...rest }) {
  return (
    <Flex
      {...rest}
      as={motion.div}
      position="absolute"
      w="200px"
      top="0"
      left="0"
      animate={isOpen ? "open" : "closed"}
      variants={mobileVariants}
      h="100%"
      direction="column"
      bg="#010914"
      color="white"
      px="20px"
      zIndex="6"
    >
      <Flex h="30px" justify={"space-between"} my="20px">
        <Text letterSpacing={"1.5px"} color="#FFFFFF" opacity={"1"}>
          Tags
        </Text>
        <Box onClick={() => setIsOpen((prev) => !prev)} cursor="pointer">
          <AiOutlineClose />
        </Box>
      </Flex>
      <Divider borderColor="white" w="100%" opacity={0.15} mb="20px" />
      <Flex direction="column" justify="space-between" h="100%" gap="10px">
        <Flex as="ul" direction="column" gap="10px">
          {data.map((item, index) => {
            return (
              <SidebarButton
                key={index}
                data={item}
                textVariants={textVariants}
                isOpen={isOpen}
              />
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AnimSidebar;

  `;
}

export default AnimSidebar;

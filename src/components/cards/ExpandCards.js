import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useControls } from "leva";
import React, { useState, useEffect } from "react";
import CodePlayground from "./CodePlayground";

const images = [
  "https://images.unsplash.com/photo-1593161499316-0cd67918ab6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1902&q=80",
  "https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1842&q=80",
  "https://images.unsplash.com/photo-1621017470037-449f2e60f4b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1793&q=80",
  "https://images.unsplash.com/photo-1591266188709-38a21ab2fec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1707&q=80",
];

const textVariants = {
  selected: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  notSelected: { opacity: 0 },
};

const containerVariants = {
  selected: {
    borderRadius: "10px",
    width: "150px",
    height: "40px",
    opacity: 0.8,
    transition: { duration: 1 },
  },
  notSelected: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    opacity: 0.4,
    transition: { duration: 1 },
  },
};

const cardWidthNotSelected = 100;
const cardMargin = 0;

const ExpandCards = () => {
  const [selectedImage, setSelectedImage] = useState(images[1]);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1000
  );

  const controler = useControls({
    Duration: { value: 1, min: 0.1, max: 2, step: 0.1 },
    Ease: {
      value: "easeInOut",
      options: ["easeInOut", "easeIn", "easeOut", "linear"],
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const cardWidthSelected =
    windowWidth - (images.length - 1) * (cardWidthNotSelected + cardMargin);

  const variants = {
    selected: {
      width: cardWidthSelected,
      transition: { duration: controler.Duration, ease: controler.Ease },
    },
    notSelected: {
      width: cardWidthNotSelected,
      transition: { duration: controler.Duration, ease: controler.Ease },
    },
  };

  return (
    <Flex direction="column">
      <Flex
        width="100%"
        h="600px"
        alignItems="stretch"
        gap="10px"
        overflow="hidden"
        justify="center"
        align="center"
      >
        {images.map((img, i) => (
          <Flex
            as={motion.div}
            key={i}
            borderRadius="10px"
            cursor="pointer"
            align="end"
            justify="center"
            variants={variants}
            initial="notSelected"
            animate={selectedImage === img ? "selected" : "notSelected"}
            height="100%"
            // bg={img}
            bgImage={img}
            bgSize="cover"
            bgPosition="center"
            // marginRight={i === images.length - 1 ? 0 : cardMargin}
            onClick={() => setSelectedImage(img)}
          >
            <Flex
              as={motion.div}
              variants={containerVariants}
              bg="white"
              mb="15px"
              align="center"
              justify="center"
            >
              <Text as={motion.div} variants={textVariants}>
                Your Description
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
      {/* <CodePlayground code={generateCode()} /> */}
    </Flex>
  );
};

// function generateCode() {
//   return `const textVariants = {
//     selected: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
//     notSelected: { opacity: 0 },
//   };
  
//   const containerVariants = {
//     selected: {
//       borderRadius: "10px",
//       width: "150px",
//       height: "40px",
//       opacity: 0.8,
//       transition: { duration: 1 },
//     },
//     notSelected: {
//       width: "20px",
//       height: "20px",
//       borderRadius: "50%",
//       opacity: 0.4,
//       transition: { duration: 1 },
//     },
//   };
  
//   const cardWidthNotSelected = 100;
//   const cardMargin = 0;
  
//   const YourComponent = () => {
//     const [selectedImage, setSelectedImage] = useState(images[1]);
//     const [windowWidth, setWindowWidth] = useState(
//       typeof window !== "undefined" ? window.innerWidth : 1000
//     );
  
//     const controler = useControls({
//       Duration: { value: 1, min: 0.1, max: 2, step: 0.1 },
//       Ease: {
//         value: "easeInOut",
//         options: ["easeInOut", "easeIn", "easeOut", "linear"],
//       },
//     });
  
//     useEffect(() => {
//       if (typeof window !== "undefined") {
//         const handleResize = () => {
//           setWindowWidth(window.innerWidth);
//         };
  
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//       }
//     }, []);
  
//     const cardWidthSelected =
//       windowWidth - (images.length - 1) * (cardWidthNotSelected + cardMargin);
  
//     const variants = {
//       selected: {
//         width: cardWidthSelected,
//         transition: { duration: controler.Duration, ease: controler.Ease },
//       },
//       notSelected: {
//         width: cardWidthNotSelected,
//         transition: { duration: controler.Duration, ease: controler.Ease },
//       },
//     };
  
//     return (
//       <Flex direction="column">
//         <Flex
//           width="100%"
//           h="600px"
//           alignItems="stretch"
//           gap="10px"
//           overflow="hidden"
//           justify="center"
//           align="center"
//         >
//           {images.map((img, i) => (
//             <Flex
//               as={motion.div}
//               key={i}
//               borderRadius="10px"
//               cursor="pointer"
//               align="end"
//               justify="center"
//               variants={variants}
//               initial="notSelected"
//               animate={selectedImage === img ? "selected" : "notSelected"}
//               height="100%"
//               bgImage={img}
//               bgSize="cover"
//               bgPosition="center"
//               onClick={() => setSelectedImage(img)}
//             >
//               <Flex
//                 as={motion.div}
//                 variants={containerVariants}
//                 bg="white"
//                 mb="15px"
//                 align="center"
//                 justify="center"
//               >
//                 <Text as={motion.div} variants={textVariants}>
//                   Your Description
//                 </Text>
//               </Flex>
//             </Flex>
//           ))}
//         </Flex>
//     );
//   };
//     `;
// }

export default ExpandCards;

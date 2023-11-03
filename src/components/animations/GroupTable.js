import React, { useState } from "react";
import { Reorder, motion } from "framer-motion";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(() => import("../code/CodePlayground"), {
  ssr: false,
});

const data = [
  {
    name: "Brazil",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png",
    index: 0,
    group: "A",
  },
  {
    name: "Argentina",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png",
    index: 3,
    group: "A",
  },
  {
    name: "Spain",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png",
    index: 2,
    group: "A",
  },
  {
    name: "Germany",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/320px-Flag_of_Germany.svg.png",
    index: 1,
    group: "A",
  },
  {
    name: "USA",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png",
    index: 4,
    group: "A",
  },
];

const Position = () => {
  return (
    <Flex
      direction="column"
      minW="45px"
      justify="space-between"
      alignItems="left"
      gap="24px"
    >
      {["1º", "2º", "3º", "4º", "5º"].map((position, index) => (
        <Flex
          key={index}
          py="5px"
          h="100%"
          borderColor={index <= 1 ? "rgb(255, 176, 74)" : "gray.700"}
          borderRadius="2px"
          borderBottomWidth="5px"
          justifyContent="center"
          alignItems="center"
        >
          {position}
        </Flex>
      ))}
    </Flex>
  );
};

const Item = ({ team, index, onDragEnd }) => {
  return (
    <Reorder.Item
      onDragEnd={onDragEnd}
      value={team}
      id={team}
      style={{ listStyle: "none" }}
    >
      <Flex
        px="8px"
        py="5px"
        h="100%"
        w="100%"
        justify="space-arround"
        alignItems="center"
        borderRadius="2px"
        borderBottomWidth="5px"
        bg="rgb(20, 20, 20)"
        borderColor={index <= 1 ? "rgb(255, 176, 74)" : "gray.700"}
        cursor="grab"
        opacity={index <= 1 ? 1 : 0.5}
        gap={["24px"]}
      >
        <Flex
          w="60px"
          h="60px"
          bg="gray.700"
          borderColor="#c9c5c9"
          borderWidth="1px"
          borderRadius="50%"
          overflow="hidden"
          alt="country flag"
        >
          {team.flag && (
            <Image objectFit="cover" alt="country flag" src={team.flag} />
          )}
        </Flex>
        <Text fontSize={["24px"]}>{team.name}</Text>
      </Flex>
    </Reorder.Item>
  );
};

const GroupTable = ({ isCoding }) => {
  const [items, setItems] = useState(data);

  const onDragEnd = () => {
    //Do your magic
  };

  return (
    <>
      {isCoding ? (
        <CodePlayground code={code()} />
      ) : (
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
          direction="column"
          bg="rgb(20, 20, 20)"
          py="16px"
          px="20px"
          w="100%"
          gap="10px"
          maxW="450px"
        >
          <Text fontSize={["32px"]}> Group A </Text>
          <Flex gap="4px">
            <Position />
            <Box w="100%">
              <Reorder.Group axis="y" onReorder={setItems} values={items}>
                <Flex
                  direction="column"
                  justify="space-between"
                  gap="24px"
                  alignItems="left"
                >
                  {items.map((team, index) => {
                    return (
                      <Item
                        onDragEnd={onDragEnd}
                        team={team}
                        index={index}
                        key={team.name}
                      />
                    );
                  })}
                </Flex>
              </Reorder.Group>
            </Box>
          </Flex>
          <Flex w="100%" justifyContent="flex-end">
            <Flex
              as={motion.div}
              justify="center"
              alignItems="center"
              bg="#E36262"
              cursor="pointer"
              w={["100px", "140px"]}
              _hover={{ bg: "#d73838" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Text
                pb="2px"
                fontWeight="400"
                fontSize={["24px", "32px"]}
                color="white"
              >
                Confirm
              </Text>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default GroupTable;

function code() {
  return `
    import React, { useState } from "react";
    import { Reorder, motion } from "framer-motion";
    import { Box, Flex, Text, Image } from "@chakra-ui/react";

    const data = [
      {
        name: "Brazil",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png",
        index: 0,
        group: "A",
      },
      {
        name: "Argentina",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png",
        index: 3,
        group: "A",
      },
      {
        name: "Spain",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png",
        index: 2,
        group: "A",
      },
      {
        name: "Germany",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/320px-Flag_of_Germany.svg.png",
        index: 1,
        group: "A",
      },
      {
        name: "USA",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png",
        index: 4,
        group: "A",
      },
    ];
    
    const Position = () => {
        return (
          <Flex
            direction="column"
            minW="45px"
            justify="space-between"
            alignItems="left"
            gap="24px"
          >
            {["1º", "2º", "3º", "4º", "5º"].map((position, index) => (
              <Flex
                key={index}
                py="5px"
                h="100%"
                borderColor={index <= 1 ? "rgb(255, 176, 74)" : "gray.700"}
                borderRadius="2px"
                borderBottomWidth="5px"
                justifyContent="center"
                alignItems="center"
              >
                {position}
              </Flex>
            ))}
          </Flex>
        );
      };
      
      const Item = ({ team, index, onDragEnd }) => {
        return (
          <Reorder.Item
          onDragEnd={onDragEnd}
          value={team}
          id={team}
          style={{ listStyle: "none" }}
        >
          <Flex
            px="8px"
            py="5px"
            h="100%"
            w="100%"
            justify="space-arround"
            alignItems="center"
            borderRadius="2px"
            borderBottomWidth="5px"
            bg="rgb(20, 20, 20)"
            borderColor={index <= 1 ? "rgb(255, 176, 74)" : "gray.700"}
            cursor="grab"
            opacity={index <= 1 ? 1 : 0.5}
            gap={["24px"]}
          >
            <Flex
              w="60px"
              h="60px"
              bg="gray.700"
              borderColor="#c9c5c9"
              borderWidth="1px"
              borderRadius="50%"
              overflow="hidden"
              alt="country flag"
            >
              {team.flag && (
                <Image objectFit="cover" alt="country flag" src={team.flag} />
              )}
            </Flex>
            <Text fontSize={["24px"]}>{team.name}</Text>
          </Flex>
        </Reorder.Item>
        );
      };
      
      const GroupTable = () => {
        const [items, setItems] = useState(data);
      
        const onDragEnd = () => {
          //Do your magic
        };
      
        return (
          <Flex
          direction="column"
          bg="rgb(20, 20, 20)"
          py="16px"
          px="20px"
          w="100%"
          gap="10px"
          maxW="450px"
        >
          <Text fontSize={["32px"]}> Group A </Text>
          <Flex gap="4px">
            <Position />
            <Box w="100%">
              <Reorder.Group axis="y" onReorder={setItems} values={items}>
                <Flex
                  direction="column"
                  justify="space-between"
                  gap="24px"
                  alignItems="left"
                >
                  {items.map((team, index) => {
                    return (
                      <Item
                        onDragEnd={onDragEnd}
                        team={team}
                        index={index}
                        key={team.name}
                      />
                    );
                  })}
                </Flex>
              </Reorder.Group>
            </Box>
          </Flex>
          <Flex w="100%" justifyContent="flex-end">
            <Flex
              as={motion.div}
              justify="center"
              alignItems="center"
              bg="#E36262"
              cursor="pointer"
              w={["100px", "140px"]}
              _hover={{ bg: "#d73838" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Text
                pb="2px"
                fontWeight="400"
                fontSize={["24px", "32px"]}
                color="white"
              >
                Confirm
              </Text>
            </Flex>
          </Flex>
        </Flex>
        );
      };
      
      export default GroupTable;
      `;
}

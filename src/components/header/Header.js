import { tags } from "@/data";
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Flex w="100%" h="80px" gap="30px" align="center" justify="space-between">
      <Link href="/">Animation Store</Link>
      <Menu>
        <MenuButton>Tags</MenuButton>
        <MenuList>
          {tags.map((tag, index) => {
            return (
              <MenuItem key={index}>
                <Link href={`/${tag}`} style={{ width: "100%" }}>
                  {tag}
                </Link>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;

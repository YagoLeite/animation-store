import React, { useRef, useState } from "react";
import AceEditor from "react-ace";

// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/theme-ambiance";
// import "ace-builds/src-noconflict/theme-chaos";
// import "ace-builds/src-noconflict/theme-chrome";
// import "ace-builds/src-noconflict/theme-clouds";
// import "ace-builds/src-noconflict/theme-clouds_midnight";
// import "ace-builds/src-noconflict/theme-cobalt";
// import "ace-builds/src-noconflict/theme-crimson_editor";
// import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-dracula";
// import "ace-builds/src-noconflict/theme-dreamweaver";
// import "ace-builds/src-noconflict/theme-eclipse";
// import "ace-builds/src-noconflict/theme-github";
// import "ace-builds/src-noconflict/theme-gob";
// import "ace-builds/src-noconflict/theme-gruvbox";
// import "ace-builds/src-noconflict/theme-idle_fingers";
// import "ace-builds/src-noconflict/theme-iplastic";
// import "ace-builds/src-noconflict/theme-katzenmilch";
// import "ace-builds/src-noconflict/theme-kr_theme";
// import "ace-builds/src-noconflict/theme-kuroir";
// import "ace-builds/src-noconflict/theme-merbivore";
// import "ace-builds/src-noconflict/theme-merbivore_soft";
// import "ace-builds/src-noconflict/theme-mono_industrial";
// import "ace-builds/src-noconflict/theme-monokai";
// import "ace-builds/src-noconflict/theme-nord_dark";
// import "ace-builds/src-noconflict/theme-pastel_on_dark";
// import "ace-builds/src-noconflict/theme-solarized_dark";
// import "ace-builds/src-noconflict/theme-solarized_light";
// import "ace-builds/src-noconflict/theme-sqlserver";
// import "ace-builds/src-noconflict/theme-terminal";
// import "ace-builds/src-noconflict/theme-textmate";
// import "ace-builds/src-noconflict/theme-tomorrow";
// import "ace-builds/src-noconflict/theme-tomorrow_night";
// import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
// import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
// import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
// import "ace-builds/src-noconflict/theme-twilight";
// import "ace-builds/src-noconflict/theme-vibrant_ink";
// import "ace-builds/src-noconflict/theme-xcode";
import { Flex, Button, useToast } from "@chakra-ui/react";
import { RxCopy } from "react-icons/rx";
import { motion } from "framer-motion";

function CodePlayground({ code }) {
  const editorRef = useRef(null);
  const toast = useToast();

  const getCodeFromEditor = () => {
    if (editorRef.current) {
      return editorRef.current.editor.getValue();
    }
    return "";
  };

  const handleCopyClick = async () => {
    const codeToCopy = getCodeFromEditor();

    try {
      await navigator.clipboard.writeText(codeToCopy);
      toast({
        title: "Code copied!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Failed to copy!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      direction="column"
      position="relative"
    >
      <Flex
        as={motion.div}
        whileHover={{ scale: 1.1, color: "#64ffda" }}
        position="absolute"
        cursor="pointer"
        onClick={handleCopyClick}
        top="10"
        right="10"
        zIndex="2"
        h="30px"
        w="30px"
      >
        <RxCopy height="100%" width="100%" />
      </Flex>
      <AceEditor
        ref={editorRef}
        mode="javascript"
        theme="dracula"
        width="100%"
        name="code_editor"
        editorProps={{ $blockScrolling: true }}
        value={code}
        setOptions={{
          showLineNumbers: false,
        }}
        readOnly={true}
      />
    </Flex>
  );
}

export default CodePlayground;

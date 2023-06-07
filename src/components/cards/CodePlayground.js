import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import { Flex } from "@chakra-ui/react";

function CodePlayground({ code }) {
  return (
    <Flex w="100%" justify="center" align="center">
      <AceEditor
        mode="javascript"
        theme="github"
        // width="100%"
        name="code_editor"
        editorProps={{ $blockScrolling: true }}
        value={code}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
        readOnly={true} // make the editor read-only
      />
    </Flex>
  );
}

export default CodePlayground;

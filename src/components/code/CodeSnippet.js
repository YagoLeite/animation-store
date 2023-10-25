import React from "react";
import { Box } from "@chakra-ui/react";
import Highlight, { defaultProps } from "prism-react-renderer";

const CodeSnippet = ({ code }) => {
  return (
    <Box p="4" rounded="md" bg="gray.800">
      <Highlight {...defaultProps} code={code} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export default CodeSnippet;

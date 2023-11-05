import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme/theme";
import "@fontsource/inter";
import { ProgressProvider } from "@/context/ProgressContext";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ProgressProvider>
        <Component {...pageProps} />
      </ProgressProvider>
    </ChakraProvider>
  );
}

import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme/theme";
import "@fontsource/inter";
import "@fontsource/lekton";
import { ProgressProvider } from "@/context/ProgressContext";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ProgressProvider>
        <Component {...pageProps} />
        <Analytics />
      </ProgressProvider>
    </ChakraProvider>
  );
}

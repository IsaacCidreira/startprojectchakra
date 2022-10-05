import type { AppProps } from 'next/app';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import Header from '../components/Header';
import { NavDrawerProvider } from '../contexts/NavDrawerContext';
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <NavDrawerProvider>
        <Flex flexDir="column">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Flex>
      </NavDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;

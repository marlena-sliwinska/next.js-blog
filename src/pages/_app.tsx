import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { Layout } from 'layout/Layout';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>My blog title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;

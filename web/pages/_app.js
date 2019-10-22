import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const myApp = props => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.js"></script>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default myApp;

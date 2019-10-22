import React from 'react';
import Head from 'next/head';
import GuestFilter from '../components/guest';

const Guests = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.js"></script>
      </Head>
      <GuestFilter />
    </>
  );
};

export default Guests;

import Head from 'next/head';
import "../styles/globals.css";
import { SearchContext } from './api/SearchContext';
import React, { useState } from 'react';

export default function App({ Component, pageProps }) {
   const [query, setQuery] = useState('');
  return (
    <>
    <SearchContext.Provider value={{ query, setQuery }}>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap" 
        />
      </Head>
      <Component {...pageProps} />
      </SearchContext.Provider>
    </>
  );
}

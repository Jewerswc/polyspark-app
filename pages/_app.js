import Head from 'next/head';
import Script from 'next/script';
import '../styles/reset.css';
import "../styles/globals.css";
import { SearchContext } from './api/SearchContext';
import React, { useState } from 'react';

export default function App({ Component, pageProps }) {
   const [query, setQuery] = useState('');
  return (
    <>
    <SearchContext.Provider value={{ query, setQuery }}>
    <Script
        src="https://accounts.google.com/gsi/client"
        strategy="beforeInteractive"
        onLoad={() => console.log('✅ Google Identity SDK loaded')}
      />
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

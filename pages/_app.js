// pages/_app.js
import Head from 'next/head';
import Script from 'next/script';
import '../styles/reset.css';
import '../styles/globals.css';
import { SearchContext } from './api/SearchContext';
import React, { useState, useEffect, useCallback } from 'react';
import { getAccessToken } from './api/auth';
import API from './../lib/api';

export default function App({ Component, pageProps }) {
  const [query, setQuery] = useState('');

  // load token on mount
  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      API.setAuthToken(token);
    }
  }, []);

  // callback receives the credential response from Google
  const handleGoogleCredentialResponse = useCallback((response) => {
    // `response.credential` is your JWT
    console.log('✅ ID token from Google:', response.credential);

    // You might send it to your backend here, or store it in context/state
    // Example:
    // authApi.exchangeGoogleToken(response.credential).then(...);
  }, []);

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {/*
        Only inject the GSI <script> if the client id is present
        (avoids initializing with `undefined` in dark environments)
      */}
      {process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID && (
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="beforeInteractive"
          onLoad={() => {
            console.log('✅ Google Identity SDK loaded');
            // initialize the SDK
            window.google.accounts.id.initialize({
              client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
              callback: handleGoogleCredentialResponse,
            });
            // optionally display the One-Tap prompt
            window.google.accounts.id.prompt();
          }}
        />
      )}

      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap"
        />
      </Head>

      <Component {...pageProps} />
    </SearchContext.Provider>
  );
}

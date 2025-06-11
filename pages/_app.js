// pages/_app.js
import Head from 'next/head'
import Script from 'next/script'
import '../styles/reset.css'
import '../styles/globals.css'
import { SearchContext } from './api/SearchContext'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getAccessToken } from './api/auth'
import API from './../lib/api'

// ← Mixpanel helpers
import { initMixpanel, trackEvent, identifyUser } from './../lib/mixpanel'

export default function App({ Component, pageProps }) {
  const [query, setQuery] = useState('')
  const router = useRouter()

  // — your existing auth setup
  useEffect(() => {
    const token = getAccessToken()
    if (token) {
      API.setAuthToken(token)
    }
  }, [])

  // — Mixpanel init, identify & page-view tracking
  useEffect(() => {
    initMixpanel()
  
    if (pageProps.user) {
      console.log('[Mixpanel] identifying user:', pageProps.user.id)   // 🔍
      identifyUser(pageProps.user.id, {
        name: pageProps.user.name,
        email: pageProps.user.email,
      })
    }

    // track the first load
    trackEvent('Page View', { path: router.pathname })

    // track client-side route changes
    const handleRoute = (url) => trackEvent('Page View', { path: url })
    router.events.on('routeChangeComplete', handleRoute)
    return () => {
      router.events.off('routeChangeComplete', handleRoute)
    }
  }, [router.events, router.pathname, pageProps.user])

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {/* your Google Identity SDK */}
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
  )
}

'use client'
console.log('GSI client_id:', process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)


import React, { useEffect } from 'react'
import styles from './ContinueWithGoogle.module.css'
import API from './../../../../lib/api'
import { setTokens } from './../../../../pages/api/auth'



export default function ContinueWithGoogleButton({ onLoginSuccess }) {
  useEffect(() => {
    // Initialize the OAuth2 Code client once
    if (
      typeof window !== 'undefined' &&
      window.google &&
      window.google.accounts?.oauth2 &&
      !window._gsiCodeInitialized
    ) {
      window._gsiCodeClient = window.google.accounts.oauth2.initCodeClient({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: 'openid email profile',
        ux_mode: 'popup',
        callback: async (resp) => {
          try {
            // 1️⃣ send code to your backend
            const { data } = await API.post('google_auth/', {
              code: resp.code,
            })
            // 2️⃣ store tokens
            setTokens(data)
            // 3️⃣ signal success
            onLoginSuccess()
          } catch (err) {
            console.error('Google code-flow error', err)
            // handle/display error as you like
          }
        },
      })
      window._gsiCodeInitialized = true
    }
  }, [onLoginSuccess])

  const handleClick = () => {
    if (window._gsiCodeClient) {
      window._gsiCodeClient.requestCode()
    } else {
      console.error('Google Identity SDK not loaded')
    }
  }

  return (
    <button
      className={styles.ContinueWithGoogleButton}
      onClick={handleClick}
    >
      <img
        src="/Icons/GoogleVector.svg"
        alt="Google icon"
        className={styles.googleIcon}
      />
      Continue with Google
    </button>
  )
}

import React from 'react';
import API from './../../../../lib/api'
import { setTokens } from './../../../../pages/api/auth'
import styles from './ContinueWithGoogleMobile.module.css';

export default function ContinueWithGoogleButton({ onLoginSuccess }) {
  useEffect(() => {
    // only initialize once, after the GSI script has loaded
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
          if (!resp.code) {
            console.error('No code returned from Google', resp)
            return
          }
          try {
            // 1️⃣ send the authorization code to your backend
            const { data } = await API.post('/google_auth', {
              code: resp.code,
            })
            // 2️⃣ save whatever tokens your server returned
            setTokens(data)
            // 3️⃣ let the parent know we’re logged in now
            onLoginSuccess()
          } catch (err) {
            console.error('Google code-flow error', err)
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
    <button className={styles.ContinueWithGoogleButton} onClick={handleClick}>
      <img 
        src="/Icons/GoogleVector.svg" 
        alt="Google icon" 
        className={styles.googleIcon}
      />
      Continue with Google
    </button>
  );
}

import React, { useEffect } from 'react'
import styles from './ContinueWithGoogle.module.css'
import API from './../../../../lib/api'
import { setTokens } from './../../../../pages/api/auth'

export default function ContinueWithGoogleButton({ onLoginSuccess }) {
  useEffect(() => {
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
            // 1) send Google code to backend
            const { data } = await API.post('auth/google/', {
              code: resp.code,
            })

            // data = { access, refresh, is_new_user }
            // 2) save tokens locally
            setTokens(data)

            // 3) if new user, bubble that up
            if (data.is_new_user) {
              onLoginSuccess({ is_new_user: true });
            } else {
              onLoginSuccess({ is_new_user: false });
            }
            
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
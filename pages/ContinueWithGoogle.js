// components/ContinueWithGoogle/ContinueWithGoogle.jsx
import React, { useEffect, useRef } from 'react'

export default function ContinueWithGoogle({ onSuccess }) {
  const buttonRef = useRef(null)

  useEffect(() => {
    if (window.google && buttonRef.current) {
      // Initialize GSI with your client ID & callback
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: onSuccess,
      })

      // Render the official Google “Sign in with Google” button
      window.google.accounts.id.renderButton(buttonRef.current, {
        theme: 'outline',
        size: 'large',
        width: 300,
      })

      // (optionally) show the One Tap prompt
      // window.google.accounts.id.prompt()
    }
  }, [onSuccess])

  return <div ref={buttonRef} />
}

import React, { useState, useEffect } from 'react';
import NavigationButtonColumn from './components/NavigationButtons/NavigationButtonColumn';
import SocialButtonsRow       from './components/SocialButtons/SocialButtonsRow';
import ButtonFrame            from './components/AuthButtons/ButtonFrame';
import styles                 from './MoreOverlay.module.css';
import API from '../../lib/api'
import {
  getAccessToken,
  refreshAccessToken,
  clearTokens,
  isLoggedIn,
  logout,
} from '../../pages/api/auth'


function LogoutButton({ onLogout }) {
  return (
    <button
      className={styles.LogoutButton}
      onClick={() => {
        // Clear tokens and invoke parent callback
        logout()
        onLogout?.()
      }}
    >
      Log out
    </button>
  )
}

export default function MoreOverlay({
  onClose,
  onExited,
  onLogin,
  onSignup,
  onLogout,
  navigationButtons,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [loggedIn, setLoggedIn] = useState(isLoggedIn())

  // New state for profile info:
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [username, setUsername] = useState('')

  useEffect(() => {
    // Fade‐in
    const timer = setTimeout(() => setIsVisible(true), 0)

    // Re‐check login status when overlay mounts
    const currentlyLoggedIn = isLoggedIn()
    setLoggedIn(currentlyLoggedIn)

    // If they are logged in, attempt to fetch their profile
    if (currentlyLoggedIn) {
      const token = getAccessToken()
      if (token) {
        // Ensure our API client has the Authorization header
        if (!API.defaults.headers.common['Authorization']) {
          API.setAuthToken(token)
        }

        async function fetchProfile() {
          try {
            const res = await API.get('me/')
            // Expecting res.data = { username, avatar_url, … }
            setAvatarUrl(res.data.avatar_url)
            setUsername(res.data.username)
            // Cache avatar for next time:
            window.localStorage.setItem(
              'cachedAvatarUrl',
              res.data.avatar_url
            )
          } catch (err) {
            const status = err.response?.status
            const code = err.response?.data?.code

            // Handle expired token → try refresh
            if (status === 401 && code === 'token_not_valid') {
              try {
                const newAccess = await refreshAccessToken()
                API.setAuthToken(newAccess)
                const retry = await API.get('me/')
                setAvatarUrl(retry.data.avatar_url)
                setUsername(retry.data.username)
                window.localStorage.setItem(
                  'cachedAvatarUrl',
                  retry.data.avatar_url
                )
              } catch {
                // Refresh failed → force logout
                clearTokens()
                setLoggedIn(false)
                window.localStorage.removeItem('cachedAvatarUrl')
                onLogout?.()
              }
            } else {
              // Other error → also force logout/cleanup
              console.error('Failed to load profile in MoreOverlay:', err)
              clearTokens()
              setLoggedIn(false)
              window.localStorage.removeItem('cachedAvatarUrl')
              onLogout?.()
            }
          }
        }

        // First try to load any cached avatar immediately:
        const cached = window.localStorage.getItem('cachedAvatarUrl')
        if (cached) {
          setAvatarUrl(cached)
        }

        fetchProfile()
      }
    }

    return () => clearTimeout(timer)
  }, [onLogout])

  const handleLogout = () => {
    setLoggedIn(false)
    setAvatarUrl(null)
    setUsername('')
    onLogout?.()
  }

  const initiateClose = () => {
    onClose()
    setIsVisible(false)
  }

  const handleTransitionEnd = e => {
    if (e.propertyName === 'transform' && !isVisible) {
      onExited()
    }
  }

  return (
    <div className={styles.backdrop} onClick={initiateClose}>
      <div
        className={`${styles.frame} ${isVisible ? styles.visible : ''}`}
        onClick={e => e.stopPropagation()}
        onTransitionEnd={handleTransitionEnd}
      >
        {loggedIn && (
          <div className={styles.profileBar}>
            <img
              src={avatarUrl || '/default-avatar.png'}
              alt="User avatar"
              className={styles.avatar}
            />
            <span className={styles.username}>{username || 'User'}</span>
          </div>
        )}

        <NavigationButtonColumn buttons={navigationButtons} />

        <SocialButtonsRow />

        {loggedIn ? (
          <LogoutButton onLogout={handleLogout} />
        ) : (
          <ButtonFrame
            onLogin={() => {
              onLogin()
              setLoggedIn(true)
            }}
            onSignup={() => {
              onSignup()
              setLoggedIn(true)
            }}
          />
        )}
      </div>
    </div>
  )
}

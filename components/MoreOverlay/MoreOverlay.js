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


// A simple “Log out” button that calls the onClick handler in its parent.
function LogoutButton({ onClick }) {
  return (
    <button
      className={styles.LogoutButton}
      onClick={onClick}
    >
      Log out
    </button>
  )
}

export default function MoreOverlay({
  onClose,      // <-- parent should set its “showOverlay” state to false
  onExited,
  onLogin,
  onSignup,
  onLogout,     // optional callback if the parent wants to know
  navigationButtons,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [loggedIn, setLoggedIn] = useState(isLoggedIn())

  // Profile info
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [username, setUsername] = useState('')

  useEffect(() => {
    // Fade‐in
    const timer = setTimeout(() => setIsVisible(true), 0)

    // Re‐check login status
    const currentlyLoggedIn = isLoggedIn()
    setLoggedIn(currentlyLoggedIn)

    if (currentlyLoggedIn) {
      const token = getAccessToken()
      if (token) {
        if (!API.defaults.headers.common['Authorization']) {
          API.setAuthToken(token)
        }

        async function fetchProfile() {
          try {
            const res = await API.get('me/')
            setAvatarUrl(res.data.avatar_url)
            setUsername(res.data.username)
            window.localStorage.setItem(
              'cachedAvatarUrl',
              res.data.avatar_url
            )
          } catch (err) {
            const status = err.response?.status
            const code = err.response?.data?.code

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
                // If refresh fails, force logout
                clearTokens()
                setLoggedIn(false)
                window.localStorage.removeItem('cachedAvatarUrl')
                onLogout?.()
              }
            } else {
              console.error('Failed to load profile in MoreOverlay:', err)
              clearTokens()
              setLoggedIn(false)
              window.localStorage.removeItem('cachedAvatarUrl')
              onLogout?.()
            }
          }
        }

        // Immediately show any cached avatar (if present)
        const cached = window.localStorage.getItem('cachedAvatarUrl')
        if (cached) {
          setAvatarUrl(cached)
        }

        fetchProfile()
      }
    }

    return () => clearTimeout(timer)
  }, [onLogout])

  // This is called when the user clicks “Log out”
  const handleLogout = () => {
    // 1) Clear tokens
    logout()

    // 2) Clear local state
    setLoggedIn(false)
    setAvatarUrl(null)
    setUsername('')

    // 3) Immediately call the parent’s onClose() so that it un‐mounts this overlay
    onClose()
    setIsVisible(false)

    // 4) Notify parent (if it cares)
    onLogout?.()

    // 5) Force a full reload so that Header (and any other component)
    //    picks up “no token” and re‐renders without the old avatar
    window.location.reload()
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
          <LogoutButton onClick={handleLogout} />
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
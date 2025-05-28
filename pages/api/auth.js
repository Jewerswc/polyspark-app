// src/lib/auth.js
import API from './../../lib/api'     // your axios instance

const ACCESS_KEY  = 'accessToken'
const REFRESH_KEY = 'refreshToken'

export function setTokens({ access, refresh }) {
  localStorage.setItem(ACCESS_KEY, access)
  localStorage.setItem(REFRESH_KEY, refresh)
  API.setAuthToken(access)
}

export function clearTokens() {
  localStorage.removeItem(ACCESS_KEY)
  localStorage.removeItem(REFRESH_KEY)
  API.setAuthToken(null)
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_KEY)
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY)
}

export function isLoggedIn() {
  return Boolean(getAccessToken())
}

export function logout() {
  clearTokens()
  // optional: redirect user to login
}

// optional: if you want to handle automatic refresh
export async function refreshAccessToken() {
  const refresh = getRefreshToken()
  if (!refresh) throw new Error('No refresh token')
  const res = await API.post('token/refresh/', { refresh })
  setTokens({ access: res.data.access, refresh: res.data.refresh })
  return res.data.access
}

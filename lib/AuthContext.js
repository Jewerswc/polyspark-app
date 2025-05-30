// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import API from './api';
import {
  setTokens as authSetTokens,
  clearTokens as authClearTokens,
  isLoggedIn as authIsLoggedIn,
} from './../pages/api/auth';

export const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // on mount, seed from localStorage
  useEffect(() => {
    if (authIsLoggedIn()) {
      setLoggedIn(true);
      fetchProfile();
    }
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await API.get('/me/');   // your profile endpoint
      setUser(res.data);
    } catch (err) {
      console.error('Failed to fetch profile', err);
    }
  };

  const login = tokens => {
    authSetTokens(tokens);
    setLoggedIn(true);
    fetchProfile();
  };

  const logout = () => {
    authClearTokens();
    setLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

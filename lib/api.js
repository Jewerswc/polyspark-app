// src/lib/api.js

import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://ionbackend.com/api/',
  // don’t set a global 'Content-Type' here — let axios pick json or multipart/form-data
});

// after login, call API.setAuthToken(token) to set the header
API.setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common['Authorization'];
  }
};

export default API;

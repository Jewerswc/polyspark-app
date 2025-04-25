// src/SearchContext.js
import { createContext } from 'react';

export const SearchContext = createContext({
  query: '',
  setQuery: () => {}
});

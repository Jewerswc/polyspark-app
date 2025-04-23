import React, { useContext } from 'react';
import styles from './PostTag.module.css';
import { SearchContext } from './../SearchContext';
export default function PostTag({ text }) {
    const { setQuery } = useContext(SearchContext);
  
    const handleClick = () => {
      setQuery(`Tag: ${text}`);
    };
  
    return (
      <button 
        className={styles.postTag} 
        onClick={handleClick}
      >
        {text}
      </button>
    );
  }

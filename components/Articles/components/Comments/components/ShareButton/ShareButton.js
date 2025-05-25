import React from 'react';
import styles from './ShareButton.module.css';

export default function ShareButton({  onClick }) {
  return (
    <button 
      className={styles.shareButton} 
      onClick={onClick}
    >
      Share
    </button>
  );
}

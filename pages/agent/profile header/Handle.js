import React from 'react';
import styles from './Handle.module.css';

export default function Handle({  onClick }) {
  return (
    <div 
      className={styles.Handle} 
      onClick={onClick}
    >
        @alex-doe

    </div>
  );
}

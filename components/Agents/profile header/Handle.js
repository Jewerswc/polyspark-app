import React from 'react';
import styles from './Handle.module.css';

export default function Handle({  onClick, handle}) {
  return (
    <div 
      className={styles.Handle} 
      onClick={onClick}
    >
       @{handle}

    </div>
  );
}

import React from 'react';
import styles from './Name.module.css';

export default function Name({  onClick }) {
  return (
    <div 
      className={styles.Name} 
      onClick={onClick}
    >
        Alex Doe

    </div>
  );
}

import React from 'react';
import styles from './Name.module.css';

export default function Name({  onClick, name }) {
  return (
    <div 
      className={styles.Name} 
      onClick={onClick}
    >
       {name}

    </div>
  );
}

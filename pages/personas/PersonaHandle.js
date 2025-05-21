import React from 'react';
import styles from './PersonaHandle.module.css';

export default function Name({ handle }) {
  return (
    <div 
      className={styles.Name} 
    >
      @{handle}
    </div>
  );
}

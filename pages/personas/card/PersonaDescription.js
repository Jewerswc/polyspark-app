import React from 'react';
import styles from './PersonaDescription.module.css';

export default function Name({ description}) {
  return (
    <div 
      className={styles.Name} 
    >
      {description}
    </div>
  );
}

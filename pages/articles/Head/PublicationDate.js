
import React from 'react';
import styles from './PublicationDate.module.css';

export default function PublicationDate({ onClick }) {
  return (
    <div 
      className={styles.publicationDate} 
      onClick={onClick}
    >
        Mar 17, 2025
    </div>
  );
}

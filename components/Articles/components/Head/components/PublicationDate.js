
import React from 'react';
import styles from './PublicationDate.module.css';

export default function PublicationDate({ onClick, date }) {
  return (
    <div 
      className={styles.publicationDate} 
      onClick={onClick}
    >
       {date}
    </div>
  );
}

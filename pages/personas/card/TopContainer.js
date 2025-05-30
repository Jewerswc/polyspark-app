// Name.js
import React from 'react';
import NameContainer from './NameContainer'
import styles from './TopContainer.module.css';

export default function Name({ imageUrl, handle, name, alt = 'Avatar' }) {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={alt} className={styles.avatar} />

      <div className={styles.details}>
        <NameContainer name={name} handle={handle} />

      </div>
    </div>
  );
}

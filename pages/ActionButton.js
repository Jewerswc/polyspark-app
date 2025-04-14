import React from 'react';
import styles from './ActionButton.module.css';

export default function PersonaCard({ name, avatarUrl }) {
  return (
    <div className={styles.personaCard}>
      <img
        className={styles.avatar}
        src={"Polyspark.png"}
        alt={`${name}'s avatar`}
      />
      <span className={styles.name}>Polyspark Post</span>
    </div>
  );
}

import React from 'react';
import styles from './PersonaButton.module.css';

export default function PersonaButton({ name, avatarUrl }) {
  return (
    <div className={styles.personaCard}>
      <img
        className={styles.avatar}
        src={avatarUrl}
        alt={`${name}'s avatar`}
      />
      <span className={styles.name}>{name}</span>
    </div>
  );
}

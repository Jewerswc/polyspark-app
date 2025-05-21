// src/components/PersonaRow.js
import React from 'react';
import styles from './PersonaRow.module.css';
import personas from './personas.json';
import Name     from './Card';

export default function PersonaRow() {
  return (
    <div className={styles.row}>
      {personas.map(person => (
        <Name
          key={person.id}
          {...person}
        />
      ))}
    </div>
  );
}

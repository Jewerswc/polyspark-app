// personas/FeaturedRowMobile.js
import React from 'react';
import styles from './CarouselMobile.module.css';
import Name from './Card';

export default function FeaturedRowMobile({ label, personas = [], onPersonaClick }) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.label}>{label}</h2>
      <div className={styles.track}>
        {personas.map(person => (
          <div
            key={person.id}
            className={styles.cardWrapper}
            onClick={() => onPersonaClick(person)}
          >
            <Name {...person} />
          </div>
        ))}
      </div>
    </section>
  );
}

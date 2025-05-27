// components/personas/CarouselMobile.jsx
import React, { useState, useEffect } from 'react';
import styles from './CarouselMobile.module.css';
import Name from './Card';

export default function CarouselMobile({
  label,
  categoryKey,       // e.g. "popular", "new", "rising"
  personas: initialPersonas = [],
  onPersonaClick
}) {
  const [personas, setPersonas] = useState(initialPersonas);

  useEffect(() => {
    if (categoryKey) {
      fetch(`https://ionbackend.com/matching/personas/?category=${categoryKey}`)
        .then(res => res.json())
        .then(data => setPersonas(data))
        .catch(console.error);
    }
  }, [categoryKey]);

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

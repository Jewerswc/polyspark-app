import React, { useState, useEffect } from 'react';
import SkeletonCard from './SkeletonCard';
import styles from './CarouselMobile.module.css';
import Name from './Card';

export default function CarouselMobile({
  label,
  categoryKey,       // e.g. "popular", "new", "rising"
  personas: initialPersonas = [],
  onPersonaClick
}) {
  const [personas, setPersonas] = useState(initialPersonas);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (categoryKey) {
     setLoading(true);
      fetch(`https://ionbackend.com/matching/personas/?category=${categoryKey}`)
        .then(res => res.json())
        .then(data => {
         setPersonas(data);
         setLoading(false);
        })
        .catch(err => {
          console.error(err);
         setLoading(false);
        });
    }
  }, [categoryKey]);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.label}>{label}</h2>
      <div className={styles.track}>
             {loading
         ? // while loading, render e.g. 4 skeleton placeholders
           Array.from({ length: 4 }).map((_, idx) => (
             <div key={`skeleton-${idx}`} className={styles.cardWrapper}>
               <SkeletonCard />
             </div>
           ))
         : // once loaded, render real cards
           personas.map(person => (
             <div key={person.id} className={styles.cardWrapper}>
               <Name
                 {...person}
                 onChatClick={() => onPersonaClick(person)}
               />
             </div>
           ))
       }
      </div>
    </section>
  );
}

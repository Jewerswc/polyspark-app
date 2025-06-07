import React from 'react';
import styles from './Footer.module.css';
import IconButtonRow from './components/IconsRow/IconsRow';

export default function Footer() {
  const infoItems = [
    "Polyspark © 2025",
    "Privacy",
    "Terms",
    "Press"
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.infoSection}>
        {infoItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className={styles.infoItem}>{item}</span>
            {index < infoItems.length - 1 && (
              <span className={styles.bullet}>•</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className={styles.actionsSection}>
        <IconButtonRow />

      </div>
    </footer>
  );
}

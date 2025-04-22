import React from 'react';
import styles from './Footer.module.css';
import IconButtonRow from './Footer/IconButtonRow';
import ActionsDropdownWrapper from './Header/ActionsDropdownWrapper';

export default function Footer() {
  const infoItems = [
    "Polyspark Inc. © 2025",
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
        {/* If you need ActionsDropdownWrapper, add it here */}
        {/* <ActionsDropdownWrapper /> */}
      </div>
    </footer>
  );
}

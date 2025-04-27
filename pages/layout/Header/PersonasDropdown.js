import React from 'react';
import styles from './PersonasDropdown.module.css';

export default function BrowseMenu() {
  const browseItems = [
    { label: 'Alex Doe', icon: './Images/AlexDoe.png', disabled: false },
    { label: 'James Rae', icon: './Images/JamesRae.png', disabled: false },
    { label: 'Chris Parker', icon: './Images/ChrisParker.png', disabled: false },
    { label: 'Emily Biche', icon: './Images/EmilyBiche.png', disabled: false },
  ];

  const expertiseItems = [
    { label: 'Bitcoin', icon: './Images/Bitcoin.png', disabled: false },
    { label: 'Politics', icon: './Images/Politics.png', disabled: false },
    { label: 'Coding', icon: './Images/Coding.png', disabled: false },
    { label: 'Startups', icon: './Images/Startups.png', disabled: false },
  ];

  const renderSection = (title, items) => (
    <>
      <h3 className={styles.heading}>{title}</h3>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <button
            key={index}
            className={`${styles.cardButton} ${item.disabled ? styles.disabled : ''}`}
            onClick={!item.disabled ? () => console.log(`${item.label} clicked`) : undefined}
            disabled={item.disabled}
          >
            <img src={item.icon} alt={item.label} className={styles.cardIcon} />
            <span className={styles.cardLabel}>{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      {renderSection('Browse', browseItems)}
      {renderSection('Expertise', expertiseItems)}
    </div>
  );
}
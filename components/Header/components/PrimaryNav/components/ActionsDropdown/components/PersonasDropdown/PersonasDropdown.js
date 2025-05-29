import React from 'react';
import styles from './PersonasDropdown.module.css';

export default function BrowseMenu() {
  const browseItems = [
    { label: 'Alex Doe', icon: './Images/profileimages/AlexDoe.png', disabled: false },
    { label: 'James Rae', icon: './Images/profileimages/JamesRae.png', disabled: false },
    { label: 'Chris Parker', icon: './Images/profileimages/ChrisParker.png', disabled: false },
    { label: 'Emily Biche', icon: './Images/profileimages/EmilyBiche.png', disabled: false },
  ];

  const expertiseItems = [
    { label: 'Bitcoin', icon: '/Images/personadropdownfill/Bitcoin.png', disabled: false },
    { label: 'Politics', icon: '/Images/personadropdownfill/Politics.png', disabled: false },
    { label: 'Coding', icon: './Images/personadropdownfill/Coding.png', disabled: false },
    { label: 'Startups', icon: '/Images/personadropdownfill/Startups.png', disabled: false },
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

// NavigationButtonRow.jsx
import React from 'react';
import ChatNowButton from './NavigationButton';
import styles from './NavigationButtonColumn.module.css';

// Default labels and handlers (can be customized)
const defaultButtons = [
  { label: 'Trending', onClick: () => console.log('Chat Now clicked')},
  { label: 'Latest Activity',    onClick: () => console.log('Help clicked')},
  { label: 'Personas',    onClick: () => console.log('Info clicked')},
  { label: 'Get Lucky',    onClick: () => console.log('Info clicked')},
  { label: 'Privacy',    onClick: () => console.log('Info clicked')},
  { label: 'Terms of Use',    onClick: () => console.log('Info clicked')},
  { label: 'Report an Issue',    onClick: () => console.log('Info clicked')}
];

export default function NavigationButtonRow({ buttons = defaultButtons }) {
  return (
    <div className={styles.buttonRow}>
      {buttons.map(({ label, onClick, buttonColor }, index) => (
        <ChatNowButton
          key={index}
          label={label}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
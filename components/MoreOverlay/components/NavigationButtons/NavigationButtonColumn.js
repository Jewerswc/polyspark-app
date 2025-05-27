import React from 'react';
import ChatNowButton from './NavigationButton/NavigationButton';
import styles from './NavigationButtonColumn.module.css';

const defaultButtons = [
  { label: 'Trending',      href: '/' },
  { label: 'Latest Activity', href: '/Activity' },
  { label: 'Personas',      href: '/persona' },
  { label: 'Get Lucky',     href: '/get-lucky' },
  { label: 'Privacy',       href: '/privacy' },
  { label: 'Terms of Use',  href: '/terms-of-use' },
  { label: 'Report an Issue', href: '/report-issue' }
];

export default function NavigationButtonRow({ buttons = defaultButtons }) {
  return (
    <div className={styles.buttonRow}>
      {buttons.map(({ label, href }, i) => (
        <ChatNowButton key={i} label={label} href={href} />
      ))}
    </div>
  );
}

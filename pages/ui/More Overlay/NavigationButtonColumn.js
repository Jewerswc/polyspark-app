import React from 'react';
import ChatNowButton from './NavigationButton';
import styles from './NavigationButtonColumn.module.css';

const defaultButtons = [
  { label: 'Trending',      href: '/MainPageMobile' },
  { label: 'Latest Activity', href: '/Activity' },
  { label: 'Personas',      href: '/personas' },
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

// src/components/NavigationButtons/NavigationButtonColumn.jsx
import React from 'react'
import ChatNowButton from './NavigationButton/NavigationButton'
import styles from './NavigationButtonColumn.module.css'

// (Same default list as before)
const defaultButtons = [
  { label: 'Trending',        href: '/' },
  { label: 'Latest Activity', href: '/Activity' },
  { label: 'Personas',        href: '/persona' },
  { label: 'Get Lucky',       href: '/get-lucky' },
  { label: 'Privacy',         href: '/Terms' },
  { label: 'Terms of Use',    href: '/Terms' },
  { label: 'Report an Issue', href: '/report-issue' },
]

// Import your auth helper:
import { isLoggedIn } from '../../../../pages/api/auth'

export default function NavigationButtonColumn({
  buttons = defaultButtons,
}) {
  // Check if the user is logged in:
  const logged = isLoggedIn()

  // If logged in, prepend a “Profile” button; otherwise just render whatever was passed in
  const toRender = logged
    ? [{ label: 'Profile', href: '/user' }, ...buttons]
    : buttons

  return (
    <div className={styles.buttonRow}>
      {toRender.map(({ label, href }, idx) => (
        <ChatNowButton key={idx} label={label} href={href} />
      ))}
    </div>
  )
}

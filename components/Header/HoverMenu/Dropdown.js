import React from 'react'
import styles from './HoverMenu.module.css'

export default function HoverDropdown({
  trigger = null,
  items = [],
  username = '',
  avatarSrc = '',
  src
}) {
  // Only clone if it's a valid React element
  const clonedTrigger = React.isValidElement(trigger)
    ? React.cloneElement(trigger)
    : null

  return (
    <div className={styles.dropdown}>
      {/* Render your trigger (e.g. the small avatar + caret button) */}
      {clonedTrigger}

      {/* ──── DROPDOWN MENU ──── */}
      <div className={styles.menu}>
        {/* ──── HEADER: large avatar + username ──── */}
        <div className={styles.header}>
          <img
            src={src}
            alt={`${username}’s avatar`}
            className={styles.avatarLarge}
          />
          <span className={styles.username}>{username}</span>
        </div>

        {/* Divider between header and items */}
        <div className={styles.divider} />

        {/* ──── MENU ITEMS ──── */}
        {Array.isArray(items) &&
          items.map((item, i) => (
            <React.Fragment key={i}>
              <button
                className={styles.item}
                onClick={item.onClick}
              >
                {item.label}
              </button>
              {item.divider && <div className={styles.divider} />}
            </React.Fragment>
          ))}
      </div>
    </div>
  )
}

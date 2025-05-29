import React from 'react'
import styles from './HeaderDropdown.module.css'

export default function HoverDropdown({
  trigger = null,
  header = null,     // ← new prop
  items = [],
}) {
  const clonedTrigger = React.isValidElement(trigger)
    ? React.cloneElement(trigger)
    : null

  return (
    <div className={styles.dropdown}>
      {clonedTrigger}

      <div className={styles.menu}>
        {header && (
          <>
            <div className={styles.header}>
              {header}
            </div>
            <div className={styles.headerDivider} />
          </>
        )}

        {items.map((item, i) => (
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

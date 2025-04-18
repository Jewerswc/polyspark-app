import React from 'react'
import styles from './HoverDropdown.module.css'

export default function HoverDropdown({ trigger, items }) {
  return (
    <div className={styles.dropdown}>
      { /* render your hamburger (or any trigger) */ }
      {React.cloneElement(trigger)}

      <div className={styles.menu}>
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

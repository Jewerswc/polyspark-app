import React from 'react'
import styles from './Dropdown.module.css'

export default function Dropdown({
  trigger = null,
  items = [],

}) {
  // Only clone if it's a valid React element
  const clonedTrigger = React.isValidElement(trigger)
    ? React.cloneElement(trigger)
    : null

  return (
    <div className={styles.dropdown}>
      {clonedTrigger}

      <div className={styles.menu}>

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

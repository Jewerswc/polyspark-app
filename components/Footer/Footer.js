// components/Footer/Footer.jsx
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Footer.module.css'
import IconButtonRow from './components/IconsRow/IconsRow'

export default function Footer() {
  const router = useRouter()

  const infoItems = [
    { label: 'Polyspark © 2025'             },          // no link
    { label: 'Privacy', href: '/privacy'     },
    { label: 'Terms',   href: '/terms'       },
    { label: 'Press'       },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.infoSection}>
        {infoItems.map(({ label, href }, idx) => (
          <React.Fragment key={idx}>
            {href ? (
              // Option A: declarative Link
              <Link href={href} className={styles.infoItem}>
                {label}
              </Link>
            ) : (
              // Option B: plain text
              <span className={styles.infoItem}>{label}</span>
            )}
            {idx < infoItems.length - 1 && (
              <span className={styles.bullet}>•</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className={styles.actionsSection}>
        <IconButtonRow />
      </div>
    </footer>
  )
}

import React from 'react'
import styles from './Email.module.css'
import { Envelope } from 'react-bootstrap-icons'

export default function EmailLink({

}) {
  return (
    <button
      className={styles.Email}
    >
      <Envelope className={styles.icon} />
     Email
    </button>
  )
}

import React from 'react'
import styles from './Linkedin.module.css'
import { Linkedin } from 'react-bootstrap-icons'

export default function LinkedinLink({

}) {
  return (
    <button
      className={styles.Linkedin}
    >
      <Linkedin className={styles.icon} />
     Share to LinkedIn
    </button>
  )
}

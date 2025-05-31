import React from 'react'
import styles from './Dropdown.module.css'
import X from './components/X/X'
import Email from './components/Email/Email'
import Copy from './components/Copy/Copy'
import Linkedin from './components/Linkedin/Linkedin'
import Facebook from './components/Facebook/Facebook'

export default function ChatNowButton({

}) {
  return (
    <div
      className={styles.container}
    >
    <Copy />
    <Email />
    <Linkedin />
    <Facebook />
    <X/>

    </div>
  )
}
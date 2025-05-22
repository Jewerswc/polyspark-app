import React from 'react'
import styles from './Dropdown.module.css'
import XLink from './Share Dropdown/XLink'
import EnvelopeLink from './Share Dropdown/EnvelopeLink'
import CopyLink from './Share Dropdown/CopyLink'
import LinkedInLink from './Share Dropdown/LinkedInLink'
import FacebookLink from './Share Dropdown/FacebookLink'

export default function ChatNowButton({

}) {
  return (
    <div
      className={styles.container}
    >
    <CopyLink />
    <EnvelopeLink />
    <LinkedInLink />
    <FacebookLink />
    <XLink/>

    </div>
  )
}
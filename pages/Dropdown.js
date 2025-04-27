import React from 'react'
import styles from './Dropdown.module.css'
import XLink from './XLink'
import EnvelopeLink from './EnvelopeLink'
import CopyLink from './CopyLink'
import LinkedInLink from './LinkedInLink'
import FacebookLink from './FacebookLink'

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
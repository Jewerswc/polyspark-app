// src/components/UserProfileCard/UserProfileCard.js
import React from 'react'
import styles from './LoginOverlayMobile.module.css'
import ProfileNameDate from './ProfileNameDate'
import Welcome from './Welcome'
import ContinueWithGoogleButton from './ContinueWithGoogleMobile'
import ORDivider from './Login Overlay/OrDivider'
import EmailInputWithButton from './Login Overlay/EmailInput'
import TermsPrivacy from './Login Overlay/TermsPrivacy'

export default function UserProfileCard({
}) {


  return (
    <div className={styles.card}>
      <img
        src="./Images/Frame 224.png"
        className={styles.avatar}

        style={{ cursor: 'pointer' }}
      />
      <Welcome />
      <ContinueWithGoogleButton />
      <ORDivider/>
      <EmailInputWithButton />
      <TermsPrivacy />
 
    </div>
  )
}

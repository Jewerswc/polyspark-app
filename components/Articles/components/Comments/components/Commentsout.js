import React from 'react'
import styles from './Commentsout.module.css'
import LikeButton from './LikeButton/LikeButton'
import AuthAndHamburgerSecondary from '../../../../Header/components/AuthControls/AuthButtons/AuthButtonsSecondary';

export default function Footer({}) {
  return (
    <div className={styles.container}>
      {/* New prompt above the button */}
      <div className={styles.loginPrompt}>
        Login to view and leave a comment.
      </div>

      <AuthAndHamburgerSecondary />
    </div>
  )
}

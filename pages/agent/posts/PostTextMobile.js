import React from 'react'
import styles from './PostTextMobile.module.css'
import AgentPostTitle from './PostTitle'
import AgentPostDescription from './PostDescription'

export default function UserProfileCard({ title, description, image

  }) {
    return (
      <div className={styles.card}>
        <div className={styles.textColumn}>
      <AgentPostTitle text={title} />
      <AgentPostDescription text={description} />
      </div>
      <img
        src={image}
        alt="Post illustration"
        className={styles.image}
      />
    </div>
  )
}
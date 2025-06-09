import React from 'react'
import Image from 'next/image'
import styles from './PostTextMobile.module.css'
import AgentPostTitle from './PostTitle'
import AgentPostDescription from './PostDescription'

export default function UserProfileCard({ title, description, image, slug

  }) {
    return (
      <div className={styles.card}>
        <div className={styles.textColumn}>
      <AgentPostTitle text={title}  slug={slug}/>
      <AgentPostDescription text={description} />
      </div>
      <Image 
        src={image}
        width={80}
        height={80}
        alt="Post illustration"
        className={styles.image}
      />
    </div>
  )
}
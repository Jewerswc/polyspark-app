import React from 'react'
import styles from './Post.module.css'
import AgentPostText from './PostText'

export default function UserProfileCard({ title, description, tags, image 

}) {
  return (
    <div className={styles.card}>
<AgentPostText title={title} description={description} tags={tags} />
<img src={image} alt={title} className={styles.feedImage} />
    </div>
  )
}

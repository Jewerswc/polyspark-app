// src/components/UserProfileCard/UserProfileCard.js
import React from 'react'
import styles from './AgentPost.module.css'
import AgentPostTitle from './AgentPostTitle'
import AgentPostDescription from './AgentPostDescription'
import TagsRow from './Feedcard/TagsRow'
import AgentPostText from './AgentPostText'

export default function UserProfileCard({ title, description, tags, image 

}) {
  return (
    <div className={styles.card}>
<AgentPostText title={title} description={description} tags={tags} />
<img src={image} alt={title} className={styles.feedImage} />
    </div>
  )
}

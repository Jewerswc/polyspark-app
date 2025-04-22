// src/components/UserProfileCard/UserProfileCard.js
import React from 'react'
import styles from './AgentPostText.module.css'
import AgentPostTitle from './AgentPostTitle'
import AgentPostDescription from './AgentPostDescription'
import TagsRow from './Feedcard/TagsRow'


export default function UserProfileCard({ title, description, tags

}) {
  return (
    <div className={styles.card}>
      <AgentPostTitle text={title} />
      <AgentPostDescription text={description} />
      <TagsRow tags={tags} />
    
    </div>
  )
}

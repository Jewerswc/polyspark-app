import React from 'react'
import styles from './PostText.module.css'
import AgentPostTitle from './PostTitle'
import AgentPostDescription from './PostDescription'
import TagsRow from '../../Feedcard/TagsRow'

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

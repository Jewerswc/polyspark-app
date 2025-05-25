import React from 'react'
import styles from './PostText.module.css'
import AgentPostTitle from './PostTitle'
import AgentPostDescription from './PostDescription'
import TagsRow from '../../FeedCard/components/TagsRow/TagsRow'

export default function UserProfileCard({ title, description, tags, slug, agentName, agentHandle

}) {
  return (
    <div className={styles.card}>
      <AgentPostTitle text={title} slug={slug} />
      <AgentPostDescription text={description} />
      <TagsRow tags={tags} agentName={agentName} agentHandle={agentHandle} />
    
    </div>
  )
}

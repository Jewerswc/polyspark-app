import React from 'react'
import styles from './Post.module.css'
import AgentPostText from './PostText'

export default function UserProfileCard({ title, description, tags, image, slug, onImageClick, agentName, agentHandle

}) {
  return (
    <div className={styles.card}>
<AgentPostText title={title} description={description} tags={tags} slug={slug} agentName={agentName} agentHandle={agentHandle}/>
<img src={image} alt={title} className={styles.feedImage}    onClick={() => onImageClick(image)} 
/>
    </div>
  )
}

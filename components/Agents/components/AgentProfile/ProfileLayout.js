// src/components/UserProfileCard/UserProfileCard.js
import React from 'react'
import styles from './ProfileLayout.module.css'
import ProfileHeader from './components/ProfileHeader/ProfileHeader'
import Tabs from './components/ProfileTabs/Tabs'

export default function ProfileLayout({ agent, onChatClick, onImageClick, handle, agentName,

}) {
  return (
    <div className={styles.profileLayout}>
<ProfileHeader
  name={agent?.name  ?? ""}
  handle={agent?.handle ?? ""}
  bio={agent?.bio    ?? ""}
  avatar={agent?.avatar_url}
  onImageClick={onImageClick}
  onChatClick={onChatClick}
/>

<Tabs articles={agent?.articles ?? [] } 
handle={agent?.handle}
onImageClick={onImageClick}
agentName={agentName}
agentHandle={agent?.handle}
/>
    </div>
  )
}

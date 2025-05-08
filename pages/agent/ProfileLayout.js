// src/components/UserProfileCard/UserProfileCard.js
import React from 'react'
import styles from './ProfileLayout.module.css'
import ProfileHeader from './ProfileHeader'
import Navbar from './Tabs'

export default function ProfileLayout({ agent, onChatClick

}) {
  return (
    <div className={styles.profileLayout}>
<ProfileHeader
  name={agent?.name  ?? ""}
  handle={agent?.handle ?? ""}
  bio={agent?.bio    ?? ""}
  avatar={agent?.avatar_url}
/>

<Navbar articles={agent?.articles ?? []} />
    </div>
  )
}

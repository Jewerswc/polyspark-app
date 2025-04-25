import React from 'react'
import PostTextMobile from './PostTextMobile'
import TagsRow from './../../Feedcard/TagsRow'
import styles from './PostMobileTags.module.css'


export default function UserProfileCard({ title, description, tags, image 

  }) {
    return (
      <div className={styles.card}>
        <PostTextMobile title={title} description={description} image={image} />
        <TagsRow tags={tags}/>
    </div>
  )
}
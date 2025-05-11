import React from 'react'
import PostTextMobile from './PostTextMobile'
import TagsRow from './../../Feedcard/TagsRow'
import styles from './PostMobileTags.module.css'


export default function UserProfileCard({ title, description, tags, image, slug

  }) {
    return (
      <div className={styles.card}>
        <PostTextMobile title={title} description={description} image={image}  slug={slug} />
        <TagsRow tags={tags}/>
    </div>
  )
}
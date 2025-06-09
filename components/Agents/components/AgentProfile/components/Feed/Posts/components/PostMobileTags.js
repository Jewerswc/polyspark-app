import React from 'react'
import PostTextMobile from './PostTextMobile'
import TagsRow from './TagsRow/TagsRow'
import styles from './PostMobileTags.module.css'

  export default function AgentPostMobile({
    title,
    description,
    tags,
    image,
    slug,
    agentName,
    agentHandle,
    onImageClick,
  }) {
  return (
    <div className={styles.card}>

        <PostTextMobile
          title={title}
          description={description}
          image={image}
          slug={slug}
          agentName={agentName}
          agentHandle={agentHandle}
          onImageClick={onImageClick}
        />

        <TagsRow
          tags={tags}
          agentName={agentName}
          agentHandle={agentHandle}
        />
    </div>
  )
}
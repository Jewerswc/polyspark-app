import React from 'react'
import PostTextMobile from './PostTextMobile'
import TagsRow from '../../FeedCard/components/TagsRow/TagsRow'
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
        {/* If PostTextMobile itself renders an author or needs agentName, pass it down: */}
        <PostTextMobile
          title={title}
          description={description}
          image={image}
          slug={slug}
          agentName={agentName}
          agentHandle={agentHandle}
          onImageClick={onImageClick}
        />

        {/* Then show the Author  Tags row below the text (just like desktop does) */}
        <TagsRow
          tags={tags}
          agentName={agentName}
          agentHandle={agentHandle}
        />
    </div>
  )
}

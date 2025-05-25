import React from 'react';
import MainContainer from './components/MainContainer/MainContainer';
import PostActionsRow from './components/TagsRow/TagsRow';              
import styles from './FeedCard.module.css';

export default function FeedCard({ title, description, tags, image, onImageClick, slug, agentName, agentHandle }) {
  return (
    <div className={styles.feedCard}>
      <MainContainer slug={slug} title={title} description={description} image={image} onImageClick={onImageClick} />
      <PostActionsRow tags={tags} agentName={agentName} agentHandle={agentHandle}/>
    </div>
  );
}

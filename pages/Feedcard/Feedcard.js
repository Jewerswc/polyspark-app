import React from 'react';
import MainContainer from './FeedCardMainContainer';
import PostActionsRow from './TagsRow';              
import styles from './FeedCard.module.css';

export default function FeedCard({ title, description, tags, image, onImageClick }) {
  return (
    <div className={styles.feedCard}>
      <MainContainer title={title} description={description} image={image} onImageClick={onImageClick} />
      <PostActionsRow tags={tags} />
    </div>
  );
}

import React from 'react';
import MainContainer from './FeedCardMainContainer';
import PostActionsRow from './TagsRow';              
import styles from './FeedCard.module.css';

export default function FeedCardLayout({ title, description, tags, image }) {
  return (
    <div className={styles.feedCardLayout}>
      <MainContainer title={title} description={description} image={image} />
      <PostActionsRow tags={tags} />
    </div>
  );
}

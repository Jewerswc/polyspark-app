import React from 'react';
import styles from './FeedCardMainContainer.module.css';
import FeedCardTitle from './FeedCardTitle';
import FeedCardDescription from './FeedCardDescription';

export default function FeedCardContainer({ title, description, image }) {
  return (
    <div className={styles.feedCardContainer}>
      <div className={styles.textContainer}>
        <FeedCardTitle text={title} />
        <FeedCardDescription text={description} />
      </div>
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt="Example"
          className={styles.feedImage} 
        />
      </div>      
    </div>
  );
}

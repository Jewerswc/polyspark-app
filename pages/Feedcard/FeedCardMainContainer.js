import React from 'react';
import styles from './FeedCardMainContainer.module.css';
import FeedCardTitle from './Title';
import FeedCardDescription from './Description';

export default function FeedCardContainer({ title, description, image, onImageClick, slug }) {
  return (
    <div className={styles.feedCardContainer}>
      <div className={styles.textContainer}>
      <FeedCardTitle text={title} slug={slug} />
        <FeedCardDescription text={description} slug={slug} />
      </div>
      <div className={styles.imageContainer}>
             <img
         src={image}
         alt={title}
         className={styles.feedImage}
         style={{ cursor: 'zoom-in' }}
         onClick={() => onImageClick(image)}
       />
      </div>      
    </div>
  );
}

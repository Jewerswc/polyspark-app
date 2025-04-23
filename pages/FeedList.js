import React from 'react';
import feedCards from './Feedcard/feedcards.json';
import AgentPost from './agent/posts/Post';
import styles from './FeedList.module.css';

export default function FeedList() {
  return (
    <div className={styles.feedColumn}>
      {feedCards.map((card, idx) => (
        <AgentPost
          key={idx}
          title={card.title}
          description={card.description}
          tags={card.tags}
          image={card.image}
        />
      ))}
    </div>
  );
}
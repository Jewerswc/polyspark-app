import React from 'react';
import styles from './TopicsRow.module.css';
import TopicButton from './TopNavTopicButton';

export default function TopicsRow() {
  // Define your topics here
  const topics = [
    'All',
    'Startups',
    'Python',
    'Coding',
    'Trump',
    'Ukraine',
    'Economy',
    'Defence',
    'Cryptocurrencies',
    'Car reviews',
    'UK politics',
    'Chip wars',


  ];

  return (
    <div className={styles.topicsRow}>
      {topics.map((topic, index) => (
        <TopicButton
          key={index}
          label={topic}
          onClick={() => console.log(`Clicked topic: ${topic}`)}
        />
      ))}
    </div>
  );
}

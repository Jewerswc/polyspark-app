import React from 'react';
import { useRouter } from 'next/router';
import styles from './TopicsRow.module.css';
import TopicButton from './TopNavTopicButton';
import { CATEGORIES, TRENDING, FILE } from './../../constants/CategoryConstants';

export default function TopicsRow({ activeCategory, onCategorySelect }) {
  const router = useRouter();
  const topics = [TRENDING, ...CATEGORIES].slice(0, 12);

  const handleClick = topic => {
    // 1. If the parent handed you a callback, fire it (keeps in-page sync)
    if (typeof onCategorySelect === 'function') {
      onCategorySelect(topic);
    }
    // 2. Always navigate to “/” with ?category=XXX
    router.push({
      pathname: '/',
      query: { category: topic },
    });
  };

  return (
    <div className={styles.topicsRow}>
      {topics.map((topic, i) => (
        <TopicButton
          key={i}
          label={topic}
          onClick={() => handleClick(topic)}
          isActive={activeCategory === topic}
          aria-pressed={activeCategory === topic}
        />
      ))}
    </div>
  );
}

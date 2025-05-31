import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './TopicRow.module.css';
import TopicButton from './components/TopicButton';

const TRENDING = 'Trending';
const NEW      = 'New';

export default function TopicsRow({ activeCategory, onCategorySelect }) {
  const router = useRouter();
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch tags from backend
  useEffect(() => {
    setLoading(true);
    fetch('https://ionbackend.com/matching/api/search/?q=&type=tags')
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(data => {
        // assume data.tags is [{ tag, count }, …]
        setTags(data.tags.map(t => t.tag));
      })
      .catch(err => {
        console.error('Failed to load tags', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleClick = topic => {
    if (typeof onCategorySelect === 'function') {
      onCategorySelect(topic);
    }
    router.push({
      pathname: '/',
      query: { category: topic },
    });
  };

  if (loading) {
    return (
      <div className={styles.topicsRow}>
        <span className={styles.loading}>Loading…</span>
      </div>
    );
  }

  const topics = [TRENDING, NEW, ...tags].slice(0, 9);

  return (
    <div className={styles.topicsRow}>
      {topics.map(topic => (
        <TopicButton
          key={topic}
          label={topic}
          onClick={() => handleClick(topic)}
          isActive={activeCategory === topic}
          aria-pressed={activeCategory === topic}
        />
      ))}
    </div>
  );
}
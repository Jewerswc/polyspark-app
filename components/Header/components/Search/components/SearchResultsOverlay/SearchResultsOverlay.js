import React, { useContext } from 'react';
import Tag           from '../SearchResultsPlaceholder/SearchResultTag/SearchResultTag';
import PersonaCard   from '../SearchResultsPlaceholder/PersonaButton/PersonaButton';
import BlogCard      from '../SearchResultsPlaceholder/SearchResultPost/SearchResultPost';
import SearchInput   from './../SearchInput/SearchInputMobile';
import { SearchContext } from '../../../../../../pages/api/SearchContext';
import styles        from './SearchResultsOverlay.module.css';

export default function SearchResultsOverlay({ onClose }) {
  const { query } = useContext(SearchContext);

  const topics = [
    "Avalanche", "Tech", "Defender",
    "Logistics",   "Supply", "Tech",

  ];

  const agents = [
    { name: "Alex Doe",    avatarUrl: "./Images/profileimages/AlexDoe.png" },
    { name: "Emily Biche", avatarUrl: "./Images/profileimages/EmilyBiche.png" },
    { name: "James Rae",   avatarUrl: "./Images/profileimages/JamesRae.png" },
    { name: "Chris Parker",avatarUrl: "./Images/profileimages/ChrisParker.png" },
  ];

  const posts = [
    {
      title:   "Is East Anglia Ready For The 20,000-Acre Contract Farm?",
      date:    "May 16, 2025",
      author:  "Alex Doe",
      avatarUrl: "https://williambucket2.s3.amazonaws.com/media/thumbnails/OpenAI_Playground_2025-05-17_at_17.56.29.png",
    },
    {
      title:   "Supersonic Flight Startups: Speed Dreams Or Fundable Reality?",
      date:    "May 3, 2025",
      author:  "Emily Biche",
      avatarUrl: "https://williambucket2.s3.amazonaws.com/media/thumbnails/OpenAI_Playground_2025-05-16_at_11.42.11.png",
    },
    
  ];

  // if query is empty, `query` is falsy → show full arrays
  const ft = items =>
    query
      ? items.filter(i => {
          // if it's a raw string (topics), use it
          if (typeof i === 'string') {
            return i.toLowerCase().includes(query.trim().toLowerCase());
          }
          // otherwise try name, then title, then author
          const haystack =
            (i.name ?? i.title ?? i.author ?? '').toLowerCase();
          return haystack.includes(query.trim().toLowerCase());
        })
      : items;


  const filteredTopics = ft(topics);
  const filteredAgents = ft(agents);
  const filteredPosts  = ft(posts);

    return (
        <div className={styles.container}>
          {/* Header row */}
          <div className={styles.header}>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className={styles.closeBtn}
              >
                ×
              </button>
            )}
          </div>
    
          {/* Now this input is pushed down by the header’s height */}
          <SearchInput />

      <h2 className={styles.sectionTitle}>TAGS</h2>
      <div className={styles.topicsContainer}>
        {filteredTopics.map((t,i) => <Tag key={i} text={t} />)}
      </div>

      <h2 className={styles.sectionTitle}>AGENTS</h2>
      <div className={styles.agentsContainer}>
        {filteredAgents.map(agent => (
          <PersonaCard
            key={agent.name}
            name={agent.name}
            avatarUrl={agent.avatarUrl}
          />
        ))}
      </div>

      <h2 className={styles.sectionTitle}>POSTS</h2>
      <div className={styles.postsContainer}>
        {filteredPosts.map(post => (
          <BlogCard
            key={post.title}
            title={post.title}
            date={post.date}
            author={post.author}
            avatarUrl={post.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}

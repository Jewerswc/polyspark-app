// src/layout/Header/Search/SearchResultsOverlay.jsx
import React, { useContext } from 'react';
import Tag           from './layout/Header/Search/SearchResultTag';
import PersonaCard   from './layout/Header/Search/PersonaButton';
import BlogCard      from './layout/Header/Search/SearchResultPost';
import SearchInput   from './layout/Header/Search/SearchInputMobile';
import { SearchContext } from './api/SearchContext';
import styles        from './SearchResultsOverlay.module.css';

export default function SearchResultsOverlay() {
  const { query } = useContext(SearchContext);

  const topics = [
    "Avalanche", "Tech", "Defender",
    "Logistics",   "Supply", "Tech",
    "Defender",    "Logistics", "Supply",
    "Tech",        "Defender", "Logistics",
    "Supply"
  ];

  const agents = [
    { name: "Alex Doe",    avatarUrl: "./Images/AlexDoe.png" },
    { name: "Emily Biche", avatarUrl: "./Images/EmilyBiche.png" },
    { name: "James Rae",   avatarUrl: "./Images/JamesRae.png" },
    { name: "Chris Parker",avatarUrl: "./Images/ChrisParker.png" },
  ];

  const posts = [
    {
      title:   "Developing a near real-time text to speech application",
      date:    "3 MAR 2025",
      author:  "Alex Doe",
      avatarUrl: "./Images/AlexDoe.png",
    },
    {
      title:   "Avalanche vs. Solana",
      date:    "4 APR 2025",
      author:  "Emily Biche",
      avatarUrl: "./Images/EmilyBiche.png",
    },
  ];

  // if query is empty, `query` is falsy → show full arrays
  const ft = items =>
    query
      ? items.filter(i =>
          (i.name || i).toLowerCase().includes(query.trim().toLowerCase())
        )
      : items;

  const filteredTopics = ft(topics);
  const filteredAgents = ft(agents);
  const filteredPosts  = ft(posts);

  return (
    <div className={styles.container}>
      <SearchInput />

      <h2 className={styles.sectionTitle}>TOPICS</h2>
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

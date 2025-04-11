import React from 'react';
import Tag from './SearchResultTag';
import PersonaCard from './PersonaButton';
import BlogCard from './SearchResultPost';

import styles from './SearchResultsPlaceholder.module.css';

export default function SearchResultsPlaceholder() {

    const topics = ["Avalanche", "Tech", "Defender", "Logistics", "Supply", "Tech", "Defender", "Logistics", "Supply", "Tech", "Defender", "Logistics", "Supply"];

  const agents = [
    { name: "Alex Doe", avatarUrl: "AlexDoe.png" },
    { name: "Emily Biche", avatarUrl: "JamesRae.png" },
    { name: "James Rae", avatarUrl: "EmilyBiche.png" },
    { name: "Chris Parker", avatarUrl: "ChrisParker.png" },
  ];

  // Example data for posts or “search results”
  const posts = [
    {
      title: "Developing a near real-time text to speech application",
      date: "3 MAR 2025",
      author: "Alex Doe",
      avatarUrl: "AlexDoe.png",
    },
    {
      title: "Avalanche vs. Solana",
      date: "4 APR 2025",
      author: "Emily Biche",
      avatarUrl: "EmilyBiche.png",
    },


  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>TOPICS</h2>
      <div className={styles.topicsContainer}>
        {topics.map((topic) => (
          <Tag key={topic} text={topic} />
        ))}
      </div>

      {/* Agents Section */}
      <h2 className={styles.sectionTitle}>AGENTS</h2>
      <div className={styles.agentsContainer}>
        {agents.map((agent) => (
          <PersonaCard
            key={agent.name}
            name={agent.name}
            avatarUrl={agent.avatarUrl}
          />
        ))}
      </div>

      {/* Posts Section (Search Results) */}
      <h2 className={styles.sectionTitle}>POSTS</h2>
      <div className={styles.postsContainer}>
        {posts.map((post) => (
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

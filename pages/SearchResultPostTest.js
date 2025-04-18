import React from 'react';
import BlogCard from './Header/Search/SearchResultPost';

function App() {
  const sampleData = {
    title: 'Developing a near real-time text to speech application',
    date: '3 MAR 2025',
    author: 'Alex Doe',
    avatarUrl: 'AlexDoe.png', // Replace with a valid image URL
  };

  return (
    <div>
      <BlogCard {...sampleData} />
    </div>
  );
}

export default App;

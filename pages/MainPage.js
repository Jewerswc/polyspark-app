import React from 'react';
import Header from './Header';
import PersonaCardRow from './PersonaCardRow';
import FeedCardGrid from './FeedCardGrid';
import Footer from './Footer';
import './MainPage.module.css';

export default function App() {
  return (
    <div className="pageWrapper">
      <Header />
      <div className="mainContent">
        <PersonaCardRow />
        <FeedCardGrid />
      </div>
      <Footer />
    </div>
  );
}

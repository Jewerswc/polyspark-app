import React, { useState } from 'react';
import Header from './layout/Header';
import PersonaCardRow from './PersonaCards/PersonaCardRow';
import FeedCardGrid from './layout/FeedCardGrid';
import Footer from './layout/Footer';
import ChatOverlay from './ui/ChatOverlay';
import SignupOverlay from './ui/LoginOverlay';
import './MainPage.module.css';
import CategoryToolbar from './ui/CategoryToolbar';

export default function App() {
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);

const closeSignupOverlay = () => setSignupOverlayVisible(false);

  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);

  const openChatOverlay = () => {
    setChatOverlayVisible(true);
  };

  const closeChatOverlay = () => {
    setChatOverlayVisible(false);
  };

  return (
    <div>
      <Header />
      <div>
        <PersonaCardRow onChatClick={(name) => {
          console.log("Chat clicked for", name);
          openChatOverlay();
        }} />
        <CategoryToolbar />
        <FeedCardGrid />
      </div>
      <Footer />


      {isChatOverlayVisible && (
        <ChatOverlay 
          onClose={closeChatOverlay}
        />
      )}

{isSignupOverlayVisible && (
  <SignupOverlay 
    onGoogleContinue={() => console.log("Google Continue")}
    onEmailContinue={(email) => console.log("Email submitted:", email)}
    onClose={closeSignupOverlay}
  />
)}
    </div>
  );
}
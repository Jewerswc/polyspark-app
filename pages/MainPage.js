import React, { useState } from 'react';
import Header from './layout/Header';
import PersonaCardRow from './PersonaCardRow';
import FeedCardGrid from './FeedCardGrid';
import Footer from './layout/Footer';
import ChatOverlay from './ChatOverlay';
import SignupOverlay from './LoginOverlay';
import './MainPage.module.css';

export default function App() {
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);

const openSignupOverlay = () => setSignupOverlayVisible(true);
const closeSignupOverlay = () => setSignupOverlayVisible(false);

  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);

  const openChatOverlay = () => {
    setChatOverlayVisible(true);
  };

  const closeChatOverlay = () => {
    setChatOverlayVisible(false);
  };

  return (
    <div className="pageWrapper">
      <Header />
      <div className="mainContent">
        <PersonaCardRow onChatClick={(name) => {
          console.log("Chat clicked for", name);
          openChatOverlay();
        }} />
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
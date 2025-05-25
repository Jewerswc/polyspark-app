import React, { useState } from 'react';
import Header from './../components/Header/Header';
import UserProfile from './../components/User/UserProfile';

import Footer from '../components/Footer/Footer';
import ChatOverlay from './ui/ChatOverlay';
import SignupOverlay from './../components/LoginOverlay/components/LoginOverlay';
import './user.module.css';

export default function App() {
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const openSignupOverlay = () => setSignupOverlayVisible(true);
  const closeSignupOverlay = () => setSignupOverlayVisible(false);

  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const openChatOverlay = () => setChatOverlayVisible(true);
  const closeChatOverlay = () => setChatOverlayVisible(false);

  return (
    <div className="pageWrapper">
      {/* Pass openSignupOverlay as a prop */}
      <Header onSignupClick={openSignupOverlay} />
      <div className="mainContent">
        <UserProfile />
      </div>
      <Footer />

      {isChatOverlayVisible && (
        <ChatOverlay onClose={closeChatOverlay} />
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

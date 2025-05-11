import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from './layout/Header';
import PersonaCardRow from './PersonaCards/PersonaCardRow';
import Footer from './layout/Footer';
import ChatOverlay from './ui/ChatOverlay';
import SignupOverlay from './ui/LoginOverlay';
import './MainPage.module.css';
import FeedWithToolbar from './layout/FeedWithToolbar';
import LightboxOverlay from './LightboxOverlay';
import { TRENDING } from './constants/CategoryConstants';

export default function Home() {
  const router = useRouter();
  const { category } = router.query;
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
const closeSignupOverlay = () => setSignupOverlayVisible(false);

  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(category || TRENDING);
  const [searchQuery, setSearchQuery]       = useState('');
  const openChatOverlay = () => {
    setChatOverlayVisible(true);
  };

  const closeChatOverlay = () => {
    setChatOverlayVisible(false);
  };

  useEffect(() => {
    if (category && category !== activeCategory) {
      setActiveCategory(category);
    }
  }, [category]);

  return (
    <div>
      <Header 
      activeCategory={activeCategory}
      onCategorySelect={setActiveCategory}
      />
      <div>
        <PersonaCardRow onChatClick={(name) => {
          console.log("Chat clicked for", name);
          openChatOverlay();
        }} />
  <FeedWithToolbar 
   activeCategory={activeCategory}
   onCategorySelect={setActiveCategory}
   searchQuery={searchQuery}
   onSearchChange={setSearchQuery}
  onImageClick={setLightboxSrc} />
      </div>
      <Footer />



      {isChatOverlayVisible && (
        <ChatOverlay 
        persona="jamesbarker"
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

    {/* <<< our lightbox overlay >>> */}
     <LightboxOverlay
       src={lightboxSrc}
       onClose={() => setLightboxSrc(null)}
     />
    </div>
  );
}
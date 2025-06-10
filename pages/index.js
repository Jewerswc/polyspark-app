import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header/Header';
import PersonaCardRow from '../components/PersonaCards/PersonaCardRow';
import FeedWithToolbar from './layout/FeedWithToolbar';
import Footer from '../components/Footer/Footer';
import ChatOverlay from '../components/ChatOverlay/ChatOverlay';
import SearchResultsOverlay from '../components/Header/components/Search/components/SearchResultsOverlay/SearchResultsOverlay';
import HeaderMobile from '../components/Header/HeaderMobile';
import PersonaCardRowMobile from '../components/PersonaCards/PersonaCardRowMobile';
import CategoriesRowMobile from '../components/CategoryToolbar/CategoriesRowMobile';
import FeedCardsColumn from './layout/FeedCardColumn';
import MobileNavbar from '../components/MobileNavbar/MobileNavbar';
import UserProfileCardMobile from './../components/LoginOverlay/components/LoginOverlayMobile';
import MoreOverlay from '../components/MoreOverlay/MoreOverlay';
import ChatOverlayIPhone from '../components/ChatOverlay/ChatOverlayMobile';
import LightboxOverlay from './../components/Articles/LightboxOverlay';
import useIsMobile from '../components/hooks/useIsMobile';

const TRENDING = 'Top';

export default function MainPage() {
  const router = useRouter();
  const { category } = router.query;

  const [selectedTag, setSelectedTag] = useState(null);
  const isMobile = useIsMobile();
  const closeSignupOverlay = () => setSignupOverlayVisible(false);
  const [isSignupOverlayVisible, setSignupOverlayVisible] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const handleSearchClick = () => {
    if (moreOpen) {
      setMoreOpen(false);
      setOverlayMounted(false);
    }
    setSearchOpen(open => !open);
  };
  const closeSearch = () => setSearchOpen(false);

  const [activeCategory, setActiveCategory] = useState(category || TRENDING);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    if (category && category !== activeCategory) setActiveCategory(category);
  }, [category]);

  const [lightboxSrc, setLightboxSrc] = useState(null);

  const [isChatOverlayVisible, setChatOverlayVisible] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState(null);

  const openChatOverlay = (persona) => {
    setSelectedPersona(persona);
    setChatOverlayVisible(true);
  };
  const closeChatOverlay = () => setChatOverlayVisible(false);

  const [activeLabel, setActiveLabel] = useState('Top');
  const [moreOpen, setMoreOpen] = useState(false);
  const [overlayMounted, setOverlayMounted] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const handleMoreClick = () => {
    if (!moreOpen) {
      setOverlayMounted(true);
      setMoreOpen(true);
    } else {
      setMoreOpen(false);
    }
  };
  const handleExited = () => setOverlayMounted(false);
  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);
  const openLoginAndCloseMore = () => {
    if (moreOpen) {
      setMoreOpen(false);
      setOverlayMounted(false);
    }
    openLogin();
  };
  const openMobileChat = (persona) => {
    setSelectedPersona(persona);
    setChatOpen(true);
  };
  const closeMobileChat = () => setChatOpen(false);

  return (
    <div className={isMobile ? 'pageWrapperMobile' : 'pageWrapper'}>
      {isMobile ? (
        <> {/* Mobile Layout */}
          <HeaderMobile onLoginClick={openLogin} onSignupClick={openLogin} />
          <div className="mainContentMobile">
            <PersonaCardRowMobile onChatClick={openMobileChat} />
            <CategoriesRowMobile
              activeLabel={activeLabel}
              onLabelClick={setActiveLabel}
            />
            <FeedCardsColumn
              activeLabel={activeLabel}
              onImageClick={setLightboxSrc}
            />
            <MobileNavbar
              onMoreClick={handleMoreClick}
              moreOpen={moreOpen}
              onSearchClick={handleSearchClick}
            />
          </div>

          {loginOpen && <UserProfileCardMobile onClose={closeLogin} />}
          {overlayMounted && (
            <MoreOverlay
              onClose={handleMoreClick}
              onExited={handleExited}
              onLogin={openLoginAndCloseMore}
              onSignup={openLoginAndCloseMore}
            />
          )}

          {chatOpen && selectedPersona && (
            <ChatOverlayIPhone
              persona={selectedPersona.slug}
              name={selectedPersona.name}
              onClose={closeMobileChat}
              avatarUrl={selectedPersona.image}
            />
          )}
          {searchOpen && (
            <SearchResultsOverlay
              onClose={closeSearch}
              onTagClick={(tag) => {
                setSelectedTag(tag);
                setActiveCategory(tag);
                setSearchQuery('');
                closeSearch();
              }}
            />
          )}
        </>
      ) : (
        <> 
          <Header
            activeCategory={activeCategory}
            onCategorySelect={setActiveCategory}
            onTagClick={(tag) => {
              setSelectedTag(tag);
              setActiveCategory(tag);
              setSearchQuery('');
              closeSearch();
            }}
        
          />
          <div className="mainContent">
            <PersonaCardRow onChatClick={openChatOverlay} />
            <FeedWithToolbar
                activeCategory={activeCategory}
                onCategorySelect={(cat) => {
                  setSelectedTag(null);
                  setActiveCategory(cat);
                }}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onImageClick={setLightboxSrc}
                selectedTag={selectedTag}           
                onRemoveTag={() => {
                  setSelectedTag(null);
                  setActiveCategory(TRENDING);
                }}
              />
          </div>
          <Footer />

          {isChatOverlayVisible && selectedPersona && (
            <ChatOverlay
              persona={selectedPersona.slug}
              name={selectedPersona.name}
              avatarUrl={selectedPersona.image}
              onClose={closeChatOverlay}
            />
          )}
          {loginOpen && (
            <UserProfileCardMobile
              onClose={closeLogin}
              onLoginSuccess={closeLogin}
            />
          )}
        </>
      )}

      <LightboxOverlay src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </div>
  );
}

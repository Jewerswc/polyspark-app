// components/TermsPrivacyLayout.jsx
import React, { useState } from 'react';

import Header from './../components/Articles/components/Header';
import HeaderMobileSecondary from './../components/Header/HeaderMobileSecondary';
import Footer from './../components/Footer/Footer';
import MobileNavbar from './../components/MobileNavbar/MobileNavbar'
import TermsSidebar from './Sidebar';
import useIsMobile from '../components/hooks/useIsMobile';
import styles from './Terms.module.css';

export default function TermsPrivacyLayout({ children }) {
    const isMobile = useIsMobile();
    const [moreOpen, setMoreOpen] = useState(false);
    const handleSearchClick = () => {
      if (moreOpen) {
        setMoreOpen(false);
        setOverlayMounted(false);
      }
      setSearchOpen(open => !open);
    };
    const handleMoreClick = () => {
      if (!moreOpen) {
        setOverlayMounted(true);
        setMoreOpen(true);
      } else {
        setMoreOpen(false);
      }
    };
  
  return (
    <>
    {isMobile
      ? <HeaderMobileSecondary onLoginClick={() => setOverlay('login')} onSignupClick={() => setOverlay('login')} />
      : <Header onSignupClick={() => setOverlay('login')} />
    }
      <div className={styles.tpContainer}>
        <TermsSidebar />
        <main className={styles.tpContent}>{children}</main>
      </div>
      {isMobile
      ? <MobileNavbar
                    onMoreClick={handleMoreClick}
                    moreOpen={moreOpen}
                    onSearchClick={handleSearchClick}
                  />
      : <Footer/>
    }

      <Footer />
    </>
  );
}

import React from 'react';
import Header from '../components/Header.jsx';
import Body from '../components/Body.jsx';
import Footer from '../components/Footer.jsx';
import Media from 'react-responsive';
import MobileHeader from '../components/MobileHeader.jsx';
import MobileFooter from '../components/MobileFooter.jsx';

const HomePage = () => {
  return (
    <div className='min-h-screen min-w-screen'>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileHeader /> : <Header />
        )}
      </Media>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileHeader /> : <Body />
        )}
      </Media>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileFooter /> : <Footer />
        )}
      </Media>
    </div>
  );
}

export default HomePage;

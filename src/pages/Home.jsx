import React from 'react';
import Media from 'react-responsive';

import Header from '../components/pages/home/Header.jsx';
import Body from '../components/pages/home/Body.jsx';
import Footer from '../components/general/Footer.jsx';

import MobileHeader from '../components/mobile/MobileHeader.jsx';
import MobileMainDesc from '../components/mobile/MobileMainDesc.jsx';
import MobileFooter from '../components/mobile/MobileFooter.jsx';

const HomePage = () => {
  return (
    <div className='flex flex-col min-h-screen min-w-screen'>
      <div className=''>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileHeader /> : <Header />
        )}
      </Media>
      </div>
      <div className=''>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileMainDesc /> : <Body />
        )}
      </Media>
      </div>
      <div className="">
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileFooter /> : <Footer />
        )}
      </Media>
      </div>
    </div>
  );
}

export default HomePage;

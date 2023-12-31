import React from 'react'
import Media from 'react-responsive'

import Navbar from '../components/general/navbar/Navbar'
import TitleHeading from '../components/general/TitleHeading'
import Footer from '../components/general/Footer'

import DesktopWork from '../components/desktop/DesktopWork'

import MobileNavbar from '../components/mobile/MobileNavbar'
import MobilePageTitle from '../components/mobile/MobilePageTitle'
import MobileWork from '../components/mobile/MobileWork'
import MobileFooter from '../components/mobile/MobileFooter'


const OurWork = () => {
  return (
    <div>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileNavbar /> : <Navbar absolute={true} color='navy' />
        )}
      </Media>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobilePageTitle title='Our Work' /> : <TitleHeading title='Our Work'/>
        )}
      </Media>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileWork/> : <DesktopWork/>
        )}
      </Media>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileFooter /> : <Footer />
        )}
      </Media>
    </div>
  )
}

export default OurWork
import React from 'react'
import Media from 'react-responsive'
import TitleHeading from '../components/TitleHeading'
import MobilePageTitle from '../components/MobilePageTitle'
import PageTitle from '../components/PageTitle'
import Navbar from '../components/Navbar'
import MobileNavbar from '../components/MobileNavbar'
import MobileFooter from '../components/MobileFooter'
import Footer from '../components/Footer'
import MobileWork from '../components/MobileWork'
import DesktopWork from '../components/DesktopWork'

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
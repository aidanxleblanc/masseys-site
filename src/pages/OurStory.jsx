import React from 'react'
import Media from 'react-responsive'

import Navbar from '../components/general/navbar/Navbar'
import PageTitle from '../components/general/PageTitle'
import Footer from '../components/general/Footer'

import DesktopTimeline from '../components/desktop/DesktopTimeline'

import MobileNavbar from '../components/mobile/MobileNavbar'
import MobilePageTitle from '../components/mobile/MobilePageTitle'
import MobileFooter from '../components/mobile/MobileFooter'
import MobileTimeline from '../components/mobile/MobileTimeline'


const OurHistory = () => {
  return (
    <div>
      <div className='flex flex-col font-display text-navy'>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileNavbar /> : <Navbar absolute={false} color='navy' />
        )}
      </Media>
      </div>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobilePageTitle title='Our Story' /> : <PageTitle title='Our Story'/>
        )}
      </Media>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileTimeline /> : <DesktopTimeline/>
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

export default OurHistory
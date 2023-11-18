import React from 'react'
import Media from 'react-responsive'
import MobilePageTitle from '../components/MobilePageTitle'
import Navbar from '../components/Navbar'
import MobileNavbar from '../components/MobileNavbar'
import MobileFooter from '../components/MobileFooter'
import PageTitle from '../components/PageTitle'
import Footer from '../components/Footer'
import MobileTimeline from '../components/MobileTimeline'
import DesktopTimeline from '../components/DesktopTimeline'


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
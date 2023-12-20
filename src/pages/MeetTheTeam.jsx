import React from 'react'
import Media from 'react-responsive'

import Navbar from '../components/general/navbar/Navbar'
import PageTitle from '../components/general/PageTitle'
import Footer from '../components/general/Footer'

import DesktopTeam from '../components/desktop/DesktopTeam'

import MobileNavbar from '../components/mobile/MobileNavbar'
import MobilePageTitle from '../components/mobile/MobilePageTitle'
import MobileFooter from '../components/mobile/MobileFooter'
import MobileTeam from '../components/mobile/MobileTeam'



const MeetTheTeam = () => {
  return (
    <div>
      <Media query="(max-width: 768px)">
          {isMobile => (
              isMobile ? <MobileNavbar/> : <Navbar absolute={false} color='navy' />
          )}
      </Media>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobilePageTitle title='Meet the Team' /> : <PageTitle title='Meet the Team'/>
        )}
      </Media>
      <Media query="(max-width: 768px)">
          {isMobile => (
              isMobile ? <MobileTeam/> : <DesktopTeam/>
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

export default MeetTheTeam
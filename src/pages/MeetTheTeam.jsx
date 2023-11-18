import React from 'react'
import PageTitle from '../components/PageTitle'
import Media from 'react-responsive'
import Navbar from '../components/Navbar'
import MobileNavbar from '../components/MobileNavbar'
import MobileTeam from '../components/MobileTeam'
import MobileFooter from '../components/MobileFooter'
import MobilePageTitle from '../components/MobilePageTitle'
import PersonBubbleBobby from '../components/PersonBubbleBobby'
import PersonBubbleMcCauley from '../components/PersonBubbleMcCauley'
import PersonBubbleCriscuolo from '../components/PersonBubbleCriscuolo'
import PersonBubbleRich from '../components/PersonBubbleRich'
import PersonBubbleEssig from '../components/PersonBubbleEssig'
import PersonBubbleVailette from '../components/PersonBubbleVailette'
import PersonBubbleDeLise from '../components/PersonBubbleDeLise'
import PersonBubbleJR from '../components/PersonBubbleJR'
import Footer from '../components/Footer'
import DesktopTeam from '../components/DesktopTeam'

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
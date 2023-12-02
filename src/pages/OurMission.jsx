import React from 'react'
import Media from 'react-responsive'

import DesktopMission from '../components/DesktopMission'
import MobileMission from '../components/mobile/MobileMission'


const OurMission = () => {
  return (
    <div>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileMission /> : <DesktopMission/>
        )}
      </Media>
    </div>
  )
}

export default OurMission
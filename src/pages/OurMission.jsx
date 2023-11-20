import React from 'react'
import Media from 'react-responsive'

import DesktopMission from '../components/DesktopMission'
import ErrorPage from '../components/ErrorPage'


const OurMission = () => {
  return (
    <div>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <ErrorPage /> : <DesktopMission/>
        )}
      </Media>
    </div>
  )
}

export default OurMission
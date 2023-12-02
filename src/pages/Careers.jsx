import React from 'react'
import Media from 'react-responsive'

import DesktopCareers from '../components/DesktopCareers'
import MobileCareers from '../components/mobile/MobileCareers'

const Careers = () => {
  return (
    <div>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileCareers/> : <DesktopCareers/>
        )}
      </Media>
    </div>

  )
}

export default Careers
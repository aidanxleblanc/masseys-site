import React from 'react'
import Media from 'react-responsive'

import ErrorPage from '../components/ErrorPage'
import DesktopCareers from '../components/DesktopCareers'

const Careers = () => {
  return (
    <div>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <ErrorPage /> : <DesktopCareers/>
        )}
      </Media>

    </div>

  )
}

export default Careers
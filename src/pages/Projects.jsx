import React from 'react'
import Media from 'react-responsive'

import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Footer from '../components/Footer'

import DesktopProjects from '../components/DesktopProjects'

import MobileNavbar from '../components/mobile/MobileNavbar'
import MobilePageTitle from '../components/mobile/MobilePageTitle'
import MobileFooter from '../components/mobile/MobileFooter'
import MobileProjects from '../components/mobile/MobileProjects'


const Projects = () => {

  return (
    <div className='flex flex-col'>
      <div>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileNavbar /> : <Navbar absolute={false} color='navy' />
        )}
      </Media>
      </div>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobilePageTitle title='Projects' /> : <PageTitle title='Projects'/>
        )}
      </Media>
      <div>
      </div>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileProjects /> : <DesktopProjects />
        )}
      </Media>
      <div className='mt-8'>
      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileFooter /> : <Footer />
        )}
      </Media>
      </div>
    </div>
  )
}

export default Projects
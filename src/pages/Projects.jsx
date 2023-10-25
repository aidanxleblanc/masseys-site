import React from 'react'
import Media from 'react-responsive'
import Navbar from '../components/Navbar'
import MobileNavbar from '../components/MobileNavbar'
import PageTitle from '../components/PageTitle'
import Footer from '../components/Footer'
import MobileFooter from '../components/MobileFooter'
import DesktopProjects from '../components/DesktopProjects'
import MobileProjects from '../components/MobileProjects'
import MobilePageTitle from '../components/MobilePageTitle'


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
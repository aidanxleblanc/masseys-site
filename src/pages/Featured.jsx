import React from 'react'
import Media from 'react-responsive'

import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Footer from '../components/Footer'

import DesktopFeatured from '../components/DesktopFeatured'

import MobileNavbar from '../components/mobile/MobileNavbar'
import MobilePageTitle from '../components/mobile/MobilePageTitle'
import MobileFooter from '../components/mobile/MobileFooter'
import MobileFeatured from '../components/mobile/MobileFeatured'


const FeaturedProjects = () => {
  return (
    <div>
        <Media query="(max-width: 768px)">
            {isMobile => (
            isMobile ? <MobileNavbar /> : <Navbar absolute={false} color='navy' />
            )}
        </Media>
        <Media query="(max-width: 768px)">
            {isMobile => (
            isMobile ? <MobilePageTitle title='Featured Projects' /> : <PageTitle title='Featured Projects'/>
            )}
        </Media>
        <Media query="(max-width: 768px)">
            {isMobile => (
            isMobile ? <MobileFeatured /> : <DesktopFeatured/>
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

export default FeaturedProjects
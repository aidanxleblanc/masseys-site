import React from 'react'
import Media from 'react-responsive'
import Navbar from '../components/Navbar'
import MobileNavbar from '../components/MobileNavbar'
import MobileFooter from '../components/MobileFooter'
import MobilePageTitle from '../components/MobilePageTitle'
import PageTitle from '../components/PageTitle'
import Footer from '../components/Footer'
import DesktopFeatured from '../components/DesktopFeatured'
import MobileFeatured from '../components/MobileFeatured'


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
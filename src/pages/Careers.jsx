import React from 'react'
import TitleHeading from '../components/TitleHeading'
import PositionBannerRight from '../components/PositionBannerRight'
import Footer from '../components/Footer'
import PositionBannerLeft from '../components/PositionBannerLeft'
import CrewBanner from '../components/CrewBanner'

const Careers = () => {
  return (
    <div className='flex flex-col font-display text-navy'>
        <TitleHeading title='Careers'/>
        <CrewBanner />
        <div className='text-center font-semi text-4xl pt-8'>
          <h1>Available Positions</h1>
        </div>
        <PositionBannerRight 
        pos = 'Project Manager' 
        desc = 'Our goal is to eliminate foreseeable hazards to maintain a safe and healthful
        work environment for all employees. The core elements of our safety program
        include management leadership, worker participation, hazard identification
        and assessment, hazard prevention and control, communication training, and
        program evaluation for continual improvement. Massey’s full time Safety Director
        oversees every aspect of our field and fabrication operations for our glass and panel divisions.' />
        <PositionBannerLeft 
        pos = 'Project Estimator' 
        desc = 'Our goal is to eliminate foreseeable hazards to maintain a safe and healthful work environment for all employees. The core elements of our safety program
        include management leadership, worker participation, hazard identification
        and assessment, hazard prevention and control, communication training, and
        program evaluation for continual improvement. Massey’s full time Safety Director
        oversees every aspect of our field and fabrication operations for our glass and panel divisions.'
        url = '/Users/aidanleblanc/Desktop/masseys-site/src/images/brighamwomens.jpeg' />
        <PositionBannerRight 
        pos = 'Project Manager' 
        desc = 'Our goal is to eliminate foreseeable hazards to maintain a safe and healthful
        work environment for all employees. The core elements of our safety program
        include management leadership, worker participation, hazard identification
        and assessment, hazard prevention and control, communication training, and
        program evaluation for continual improvement. Massey’s full time Safety Director
        oversees every aspect of our field and fabrication operations for our glass and panel divisions.' />
    </div>

  )
}

export default Careers
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
        desc = "Our project managers are experts in the field and play an instrumental role in each project's
        success. As a PM, you are responsible for project planning, budget management, and resource allocation while ensuring strict adherence to safety regulations 
        and quality standards. Effective communication with clients, architects, and internal teams as well as the ability to 
        identify and mitigate project risks is key. A bachelor's degree in a related field and proven project management experience are 
        preferred qualifications for this role. Join us to lead impactful projects in a dynamic construction environment." />
        <PositionBannerLeft 
        pos = 'Project Estimator' 
        desc = 'Our goal is to eliminate foreseeable hazards to maintain a safe and healthful work
         environment for all employees. The core elements of our safety programinclude management 
         leadership, worker participation, hazard identificationand assessment, hazard prevention and control, 
         communication training, and program evaluation for continual improvement. Massey’s full time Safety Director
        oversees every aspect of our field and fabrication operations for our glass and panel divisions.'
        url = '/Users/aidanleblanc/Desktop/masseys-site/src/images/brighamwomens.jpeg' />
        <PositionBannerRight 
        pos = 'CNC/CAD Programmer' 
        desc = "As a CNC/CAD Programmer at Massey's, your role is pivotal in transforming design concepts into high-quality glass products. 
        This position fuses creativity, technical expertise, and precision to realize client visions. Responsibilities encompass CAD design, collaborating
         with architects and designers to create precise glass product drawings, and ensuring compliance with industry standards. You'll also engage in CNC 
         programming, crafting programs for cutting, shaping, and finishing glass components efficiently. Quality assurance is paramount, involving regular
          checks to meet stringent quality standards and making necessary adjustments for product integrity. Staying abreast of CNC and CAD technology 
          advancements is essential for process optimization." />
        <div className='mt-8'>
          <Footer />
        </div>
    </div>

  )
}

export default Careers
import React from 'react'

import TitleHeading from '../general/TitleHeading'
import Footer from '../general/Footer'

import CrewBanner from '../pages/careers/CrewBanner'
import PositionBanner2 from '../pages/careers/PositionBanner2'
import PositionBannerLeft from '../pages/careers/PositionBannerLeft'
import PositionBannerRight from '../pages/careers/PositionBannerRight'

const DesktopCareers = () => {
  return (
    <div>
        <div className='flex flex-col font-display text-navy'>
        <TitleHeading title='Careers'/>
        <CrewBanner />
        <div className='text-center font-semi lg:text-4xl pt-8'>
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
        desc = "As a Project Estimator at Massey's, you will play a pivotal role in the successful execution of a wide range
         of projects. You will be responsible for accurately assessing project requirements, analyzing costs, and preparing 
         detailed estimates to guide decision-making processes. Your expertise will be vital in ensuring that our projects 
         are executed efficiently and within budget, while maintaining the highest standards of quality and safety in the 
         plate and glass industry." />
        <PositionBanner2 
        pos = 'CNC/CAD Programmer' 
        desc = "As a CNC/CAD Programmer at Massey's, your role is pivotal in transforming design concepts into high-quality glass products. 
        This position fuses creativity, technical expertise, and precision to realize client visions. Responsibilities encompass CAD design, collaborating
         with architects and designers to create precise glass product drawings, and ensuring compliance with industry standards. You'll also engage in CNC 
         programming, crafting programs for cutting, shaping, and finishing glass components efficiently." />
          <div className='text-center text-2xl mt-8'>
          Interested in these positions? <br /> 
          Email your resume to 
          <a href="mailto:hr@masseysglass.com">
          <span className='font-bold'> hr@masseysglass.com </span>
          </a>
          here.
          </div>
        <div className='mt-8'>
          <Footer />
        </div>
    </div>
    </div>
  )
}

export default DesktopCareers
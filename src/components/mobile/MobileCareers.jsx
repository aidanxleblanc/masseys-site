import React from 'react'
// import TitleHeading from '../TitleHeading'
// import CrewBanner from '../CrewBanner'
import MobileNavbar from '../mobile/MobileNavbar'
// import PositionBannerRight from '../PositionBannerRight'
// import PositionBannerLeft from '../PositionBannerLeft'
// import PositionBanner2 from '../PositionBanner2'
import Footer from '../mobile/MobileFooter'
import PageTitle from '../mobile/MobilePageTitle'

const MobileCareers = () => {
  return (
    <div>
      <MobileNavbar />
        <div className='flex flex-col font-display text-navy'>
        <PageTitle title='Careers'/>
        <div>
          <h1 className='font-semi text-xl text-center'>
              At Massey's, we care about our crew.</h1>
          <h1 className='text-left p-4 pl-8'>
              + We provide initial and subsequent job specific training <br />
              + Benefits package includes heath benefits, 401(k), paid vacation & holidays <br />
              + Salary commensurate with experience <br />
              + We are an Affirmative Action/Equal Opportunity Employer. <br />
          </h1>
        </div>
        <div>
          <div className='flex font-semi text-2xl text-center p-6 justify-center space-x-4'>
            <h1>Available Positions</h1>
            <img src={require('../../images/50yrs.png')} 
             className='w-1/8 object-contain'/>
          </div>
          <div>
              <div className='p-4'>
              <div className='flex bg-navy justify-center items-center'>
              <h1 className='font-semi text-4xl text-center absolute text-white' style={{ zIndex: 1 }}>Project Manager</h1>
              <img src={require("../../images/masseysshop.jpg")} className='opacity-30 w-full h-full object-cover'/> 

              </div>
              
              
            </div>
              <p className='text-center p-4 pb-8'>Our project managers are experts in the field and play an instrumental role in each project's
              success. As a PM, you are responsible for project planning, budget management, and resource allocation while ensuring strict adherence to safety regulations 
              and quality standards. Effective communication with clients, architects, and internal teams as well as the ability to 
              identify and mitigate project risks is key. A bachelor's degree in a related field and proven project management experience are 
              preferred qualifications for this role. Join us to lead impactful projects in a dynamic construction environment.</p>
          </div>
          <div>
            <div className='p-4'>
            <div className='flex bg-navy justify-center items-center'>
              <h1 className='font-semi text-4xl text-center absolute text-white' style={{ zIndex: 1 }}>Project Estimator</h1>
              <img src={require("../../images/shoppic3.jpeg")} className='opacity-30 w-full h-full object-cover'/> 
              
            </div>

            </div>
              <p className='text-center p-4 pb-8'>As a Project Estimator at Massey's, you will play a pivotal role in the successful execution of a wide range
         of projects. You will be responsible for accurately assessing project requirements, analyzing costs, and preparing 
         detailed estimates to guide decision-making processes. Your expertise will be vital in ensuring that our projects 
         are executed efficiently and within budget, while maintaining the highest standards of quality and safety in the 
         plate and glass industry.</p>
          </div>
          <div>
            <div className='p-4'>
            <div className='flex bg-navy justify-center items-center'>
              <h1 className='font-semi text-4xl text-center absolute text-white p-4' style={{ zIndex: 1 }}>CNC/CAD Programmer</h1>
              <img src={require("../../images/shoppic2.JPG")} className='opacity-30 w-full h-full object-cover'/> 
            </div>
            </div>
              <p className='text-center p-4'>As a CNC/CAD Programmer at Massey's, your role is pivotal in transforming design concepts into high-quality glass products. 
        This position fuses creativity, technical expertise, and precision to realize client visions. Responsibilities encompass CAD design, collaborating
         with architects and designers to create precise glass product drawings, and ensuring compliance with industry standards. You'll also engage in CNC 
         programming, crafting programs for cutting, shaping, and finishing glass components efficiently.</p>
          </div>
        </div>
          <div className='text-center text-2xl mt-4'>
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

export default MobileCareers
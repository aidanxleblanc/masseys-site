import React from 'react'
import TitleHeading from '../components/TitleHeading'
import MissionBanner from '../components/MissionBanner'
import MissionBanner2 from '../components/MissionBanner2'
import MissionBanner3 from '../components/MissionBanner3'
import MissionBanner4 from '../components/MissionBanner4'
import Footer from '../components/Footer'

const OurMission = () => {
  return (
    <div>
      <TitleHeading title='Our Mission'/>
      <div className='flex flex-col whitespace-normal'>
        <MissionBanner3
          title='Safety first.'
          desc=
         "Employees are empowered to request the suspension or shutdown of any work activity they believe to be unsafe, 
and our safety manager and project management team regularly inspects job sites to identify potential hazards. 
We actively involve our workforce in hazard prevention and control 
efforts while evaluating the effectiveness of existing safety controls and explore new technologies that 
may offer better protection. Ensuring that workers possess the knowledge and skills needed to perform their 
jobs safely is a top priority at Massey's, conducting regular toolbox talks focused on pertinent safety issues faced 
by our workers. Our safety committee remains dedicated to analyzing safety 
performance in the field and refining safety procedures. We are a member and certification holder of the North 
American Contractors Certification (NACC) for glass and metal contractors, subjecting our safety program to 
annual audits that provide valuable feedback and recommendations."
          />
        <MissionBanner2 
          title='On budget, on time.'
          desc=
          "As a single-source building envelope contractor, Massey’s expert coordination of ordering,
           in-house fabrication, delivery and installation, are all timed to perfection. Massey’s own
            reputation for upholding values extends to delivering on a promise. We are committed to 
            your schedules and budgets. Our effective and all-encompassing business operation makes 
            certain that we have the highest degree of control of all of our projects from day one 
            through successful completion. Any unforeseen setbacks are challenges that we are well 
            equipped and always prepared to overcome."
          />
        <MissionBanner
          title='Build on our experience.'
          desc=
          "Whatever the size of your next project, however simple or complex, we hope our reputation,
           capabilities, and experience will earn us your consideration. We believe we can expertly 
           assist your designers and planners, specify the most appropriate materials, employ the most
            dependable and skilled professionals, and precisely custom fabricate to meet all your needs.
             Additionally, we will always use the most advanced installation technology and systems and 
             respond promptly to future service and maintenance needs. We’d welcome the opportunity to 
             prove all that to you – And our claim to do it all on budget and on time. But you don’t have
              to take our word for it – just ask our clients."/>
        <MissionBanner4 
          title='Total satisfaction.'
          desc=
          "We begin each project we do with confidence in our ability as craftsmen and business 
          professionals to satisfy every demand made of us. Experience has taught us that client
           satisfaction is built by teamwork from the ground up – and it has to happen every hour
            of every working day. Our fierce dedication to client satisfaction has earned us preferred
             status with many building contractors. We invite you to build on our experience. Find out
              why we are uniquely qualified to be your dependable, single-source glazing resource."
/>

    <div className="mt-8">
      <Footer />
    </div>
      </div>
    </div>
  )
}

export default OurMission
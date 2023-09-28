import React from 'react'
import TitleHeading from '../components/TitleHeading'
import MissionBanner from '../components/MissionBanner'

const OurMission = () => {
  return (
    <div>
      <TitleHeading title='Our Mission'/>
      <div className='flex flex-col whitespace-normal'>
        <MissionBanner 
          title='Safety first.'
          desc="
          Massey's fabrication facilities have achieved a milestone of 1000 injury-free days through our unwavering 
commitment to worker safety. This achievement is the result of a comprehensive safety program that 
encompasses various key elements, including:
Management Leadership: At Massey, we prioritize safety in all aspects of our operations. Our leadership 
sets the standard by following the same safety rules we expect workers to adhere to.
Worker Participation: At Massey, we encourage all our workers to actively engage in the safety program. 
Workers are empowered to request the suspension or shutdown of any work activity they believe to be unsafe.
Hazard Identification and Assessment: At Massey, our safety manager and project management team 
regularly inspect job sites to identify potential hazards. Thorough investigations are conducted to pinpoint 
the underlying hazards, their causes, and any deficiencies in our safety and health program.
Hazard Prevention and Control: At Massey, we actively involve our workforce in hazard prevention and control 
efforts. We continually evaluate the effectiveness of existing safety controls and explore new technologies that 
may offer better protection.
Communication and Training: Ensuring that workers possess the knowledge and skills needed to perform their 
jobs safely is a top priority at Massey. We conduct regular toolbox talks focused on pertinent safety issues faced 
by our workers.
Program Evaluation and Improvement: At Massey, our safety committee remains dedicated to analyzing safety 
performance in the field and refining safety procedures. We are a member and certification holder of the North 
American Contractors Certification (NACC) for glass and metal contractors, subjecting our safety program to 
annual audits that provide valuable feedback and recommendations.
          "/>
        <MissionBanner 
          title='On budget, on time.'
          desc=''/>
        <MissionBanner 
          title='Build on our experience.'
          desc=''/>
        <MissionBanner 
          title='Total satisfaction.'
          desc=''/>

      </div>
    </div>
  )
}

export default OurMission
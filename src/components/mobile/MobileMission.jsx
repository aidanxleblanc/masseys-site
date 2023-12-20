import React from 'react'
// import TitleHeading from '../TitleHeading'
import MobileNavbar from '../mobile/MobileNavbar'
import MobilePageTitle from '../mobile/MobilePageTitle'
import MobileFooter from '../mobile/MobileFooter'

const MobileMission = () => {
  return (
    <div>
        <div>
      <MobileNavbar />
        <div className='flex flex-col font-display text-navy'>
        <MobilePageTitle title='Our Mission'/>
        <div>
          <div> 
              <div className='p-4'>
              <div className='flex bg-navy justify-center items-center'>
              <h1 className='font-semi text-4xl text-center absolute text-white' style={{ zIndex: 1 }}>Safety first.</h1>
              <img src={require("../../images/1000days.png")} className='opacity-30 w-full h-full object-cover'/> 

              </div>
            </div>
              <p className='text-center p-4 pb-8'>Employees are empowered to request the suspension or shutdown of any work activity they believe to be unsafe, 
and our safety manager and project management team regularly inspects job sites to identify potential hazards. 
We actively involve our workforce in hazard prevention and control 
efforts while evaluating the effectiveness of existing safety controls and explore new technologies that 
may offer better protection. Ensuring that workers possess the knowledge and skills needed to perform their 
jobs safely is a top priority at Massey's, conducting regular toolbox talks focused on pertinent safety issues faced 
by our workers. Our safety committee remains dedicated to analyzing safety 
performance in the field and refining safety procedures. We are a member and certification holder of the North 
American Contractors Certification (NACC) for glass and metal contractors, subjecting our safety program to 
annual audits that provide valuable feedback and recommendations.</p>
          </div>
          <div>
            <div className='p-4'>
            <div className='flex bg-navy justify-center items-center'>
              <h1 className='font-semi text-4xl text-center absolute text-white' style={{ zIndex: 1 }}>On budget, on time.</h1>
              <img src={require("../../images/crane.png")} className='opacity-30 w-full h-full object-cover'/> 
              
            </div>

            </div>
              <p className='text-center p-4 pb-8'>As a single-source building envelope contractor, Massey’s expert coordination of ordering,
           in-house fabrication, delivery and installation, are all timed to perfection. Massey’s own
            reputation for upholding values extends to delivering on a promise. We are committed to 
            your schedules and budgets. Our effective and all-encompassing business operation makes 
            certain that we have the highest degree of control of all of our projects from day one 
            through successful completion. Any unforeseen setbacks are challenges that we are well 
            equipped and always prepared to overcome.</p>
          </div>
          <div>
            <div className='p-4'>
            <div className='flex bg-navy justify-center items-center'>
              <h1 className='font-semi text-4xl text-center absolute text-white p-4' style={{ zIndex: 1 }}>Build on our experience.</h1>
              <img src={require("../../images/safety.JPG")} className='opacity-30 w-full h-full object-cover'/> 
            </div>
            </div>
              <p className='text-center p-4'>Whatever the size of your next project, however simple or complex, we hope our reputation,
           capabilities, and experience will earn us your consideration. We believe we can expertly 
           assist your designers and planners, specify the most appropriate materials, employ the most
            dependable and skilled professionals, and precisely custom fabricate to meet all your needs.
             Additionally, we will always use the most advanced installation technology and systems and 
             respond promptly to future service and maintenance needs. We’d welcome the opportunity to 
             prove all that to you – And our claim to do it all on budget and on time. But you don’t have
              to take our word for it – just ask our clients.</p>
          </div>
        </div>
        <div>
            <div className='p-4'>
            <div className='flex bg-navy justify-center items-center'>
              <h1 className='font-semi text-4xl text-center absolute text-white p-4' style={{ zIndex: 1 }}>Total satisfaction.</h1>
              <img src={require("../../images/shovels.png")} className='opacity-30 w-full h-full object-cover'/> 
            </div>
            </div>
              <p className='text-center p-4'>We begin each project we do with confidence in our ability as craftsmen and business 
          professionals to satisfy every demand made of us. Experience has taught us that client
           satisfaction is built by teamwork from the ground up – and it has to happen every hour
            of every working day. Our fierce dedication to client satisfaction has earned us preferred
             status with many building contractors. We invite you to build on our experience. Find out
              why we are uniquely qualified to be your dependable, single-source glazing resource.</p>
          </div>
        <div className='mt-8'>
          <MobileFooter />
        </div>
      </div>
    </div>
</div>
  )
}

export default MobileMission
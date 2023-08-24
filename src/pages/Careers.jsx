import React from 'react'
import TitleHeading from '../components/TitleHeading'
import PositionBanner from '../components/PositionBanner'
import Footer from '../components/Footer'

const Careers = () => {
  return (
    <div className='flex flex-col font-display text-navy'>
        <TitleHeading title='Careers'/>
        <div className='flex justify-center pt-8 space-x-16'>
          <div className='flex flex-col space-x-4 space-y-4 justify-center'>
            <h1 className='font-semi text-3xl'>
              At Massey's, we care about our crew.</h1>
            <h1 className='text-lg'>
              + We provide initial and subsequent job specific training <br />
              + Benefits package includes heath benefits, 401(k), paid vacation & holidays <br />
              + Salary commensurate with experience <br />
              + We are an Affirmative Action/Equal Opportunity Employer. <br />
            </h1>
          </div>
          <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/50yrs.png')} 
             className='w-1/8 object-contain'/>
        </div>  
        <div className='text-center font-semi text-4xl pt-8'>
          <h1>Available Positions</h1>
        </div>
        <PositionBanner />
    </div>

  )
}

export default Careers
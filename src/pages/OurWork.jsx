import React from 'react'
import TitleHeading from '../components/TitleHeading'

const OurWork = () => {
  return (
    <div>
      <TitleHeading title="Our Work"/>
      <div className='flex p-6 items-center font-display font-bold text-navy'>
        <div className='text-4xl text-center'>
        We are experts in our craft and hold ourselves to the highest standards throughout each project.
        </div>
        <div className='flex items-center p-4 justify-center'>
          <div className='text-8xl whitespace-nowrap'>Top 15</div>
          <div className='text-4xl text-center'>Ranked Glazier in the <br />Nation by Glass Magazine</div>
        </div>
      </div> 
    </div>
  )
}

export default OurWork
import React from 'react'
import TitleHeading from '../components/TitleHeading'

const OurWork = () => {
  return (
    <div>
      <TitleHeading title="Our Work"/>
      <div className='flex p-6 items-center font-display font-bold text-navy'>
      <div className='flex items-center p-4 w-full justify-around'>
        <div>
         <div className='text-7xl whitespace-nowrap pr-8 text-center'>Top 15</div>
         <div className='text-3xl text-center mt-5'>Ranked Glazier in the <br />Nation by Glass Magazine</div>
        </div>
          
          <p className='text-2xl text-center'>
          We are experts in our craft and hold ourselves to the 
          
          <br /> 
          highest standards throughout each project.

          </p>
          
        </div>
        
      </div> 
      <div>

      </div>
      <div className='absolute'>
        <img src={require('../images/380stuart.jpeg')} 
          className=''/>
        <p className='relative'>Massey’s has specialized in glazing and façades for over 50 years, boasting a multitude
        of top-of-the-line glass and panel projects, such as</p>
      </div>
    </div>
  )
}

export default OurWork
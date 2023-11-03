import React from 'react'
import TitleHeading from '../components/TitleHeading'
import Footer from '../components/Footer'

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
        <img src={require('../images/50yrs.png')} 
             className='w-1/7 object-contain'/>
          
          <p className='text-2xl text-center'>
          We are experts in our craft and hold ourselves to the 
          
          <br /> 
          highest standards throughout each project.

          </p>
          
        </div>
        
      </div> 
      <div>

      </div>
      <div className='bg-cover'
      style={{ backgroundImage: `url(${'../images/380stuart.jpeg'})` }}>
        <img src={require('../images/whatwedo-new2.png')} 
          className=''/>
      </div>
      <div className='mt-1'>
        <Footer />
      </div>
      
    </div>
  )
}

export default OurWork
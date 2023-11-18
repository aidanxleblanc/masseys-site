import React from 'react'

const MobileWork = () => {
  return (
    <div>
        <div className='flex flex-col'>
            <div className='flex font-display font-bold text-navy items-center justify-center text-center'>
            <img src={require('../images/50yrs.png')} 
                className='w-1/4 object-contain p-4'/>
            <div className=''>
                We are experts in our craft and hold ourselves to the highest standards throughout each project.
            </div>
        </div>
        <div className='flex flex-col p-6 items-center font-display font-bold text-navy'>
            
          <div className='text-7xl whitespace-nowrap text-center'>Top 15</div>
          <div className='text-3xl text-center mt-5'>Ranked Glazier in the <br />Nation by Glass Magazine</div>
        </div>
        <div className='bg-cover'
          style={{ backgroundImage: `url(${'../images/380stuart.jpeg'})` }}>
            <img src={require('../images/whatwedo-new2.png')} 
              className=''/>
        </div>
        
        </div>
    </div>
  )
}

export default MobileWork
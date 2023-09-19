import React from 'react'

const PositionBannerRight = ({pos, desc}) => {
  return (
    <div className='flex justify-center space-x-8 mt-8'>
        <div className='w-1/2 flex items-center bg-navy font-display text-white'>
            <div className='w-1/2 absolute px-16' style={{ zIndex: 1 }}>
                <h1 className='font-bold text-6xl'> {pos} </h1>
                <h1 className='mt-6 text-lg'> {desc} </h1> 
            </div>
              <img src={require("/Users/aidanleblanc/Desktop/masseys-site/src/images/masseysshop.jpg")} 
              className='opacity-30 w-full h-full object-cover'/> 
        </div>
        <div className='w-1/4 h-1/4'>
          <img src={require("/Users/aidanleblanc/Desktop/masseys-site/src/images/massgeneral.png")} 
              className='w-full h-full object-cover'/> 
        </div>
    </div>
  )
}

export default PositionBannerRight
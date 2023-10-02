import React from 'react'

const MissionBanner = ({title, desc}) => {
  return (
    <div className='flex justify-center space-x-8 mt-8'>
        <div className='w-4/5 flex text-center justify-center items-center bg-navy font-display text-white'>
            <div className='absolute px-16 text-center w-2/3' style={{ zIndex: 1 }}>
                <h1 className='font-bold text-6xl'> {title} </h1>
                <h1 className='mt-6 text-lg'> {desc} </h1> 
            </div>
            
            <img src={require("/Users/aidanleblanc/Desktop/masseys-site/src/images/1000days.png")} 
            
            className='opacity-20 w-full h-full object-cover'/> 
      
        </div>
    </div>
  )
}

export default MissionBanner
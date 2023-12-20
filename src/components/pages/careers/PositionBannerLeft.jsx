import React from 'react'

const PositionBannerRight = ({pos, desc}) => {
  return (
    <div className='flex justify-center space-x-8 mt-8'>
        <div className='w-1/4'>
            <img src={require("../../../images/fenwayphaseii.jpeg")} 
            className='w-full h-full object-cover'/> 
        </div>
        <div className='w-1/2 flex text-right items-center bg-navy font-display text-white'>
            <div className='w-1/2 absolute px-16' style={{ zIndex: 1 }}>
                <h1 className='font-bold text-5xl'> {pos} </h1>
                <h1 className='mt-6 text-base'> {desc} </h1> 
            </div>
            <img src={require("../../../images/shoppic2.JPG")} 
            className='opacity-30 w-full h-full object-cover'/> 
        </div>
    </div>
  )
}

export default PositionBannerRight
import React from 'react'
import Navbar from './Navbar'

const TitleHeading = ({title}) => {
  return (
    <div className='flex items-center'>
        <Navbar absolute='false' color='white'/>
        <img 
            src={require('../images/ragon.png')} 
            className='w-full'/>
        <h1 className='absolute w-full text-center pb-10 text-6xl font-display font-semi text-white'>Our Work</h1>
    </div>
  )
}

export default TitleHeading
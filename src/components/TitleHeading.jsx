import React from 'react'
import Navbar from './Navbar'

const TitleHeading = ({title}) => {
  return (
    <div className='flex items-center'>
        <Navbar absolute='false' color='white'/>
        <img 
            src={require('../images/105w1street_cropped.jpeg')} 
            className='w-full'/>
        <h1 className='absolute w-full text-center pb-10 text-5xl font-display font-semi text-white'>{title}</h1>
    </div>
  )
}

export default TitleHeading
import React from 'react'
import NumProj from './NumProj'

const Banner = () => {
  return (
    <div className='h-auto flex-col items-center justify-center bg-navy'>
        <h1 className='pt-7 text-2xl text-center font-display text-white'>
            We continue to leave our mark on the Northeast:</h1>
        <div className='flex items-center justify-center'>
            <NumProj num='200+' place='Massachusetts' />
            <NumProj num='100+' place='Connecticut' />
            <NumProj num='50+' place='Rhode Island' />
        </div>
        <h1 className='pb-7 text-2xl text-center font-display text-white'>
            and many more in 
            <span className='font-semi'> Maine, </span>
            <span className='font-semi'>New Hampshire, </span>
            <span className='font-semi'>New York, </span> and
            <span className='font-semi'> Vermont </span>
            </h1>
    </div>
  )
}

export default Banner
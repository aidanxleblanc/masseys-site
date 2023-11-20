import React from 'react'


const Timeline2008 = ({year, loc, bold, body}) => {
  return (
    
    <div class='flex items-center justify-center font-display text-navy pb-10'>
        <div class='flex flex-col font-semi p-6 text-right w-1/3'>
            <div class='text-5xl font-bold'>{year}</div>
            <div class='text-2xl pt-3 font-semi'>{loc}</div>
        </div>
        <div className='flex flex-col rounded-full aspect-square overflow-hidden w-1/8'>
            <img src={require('../compimgs/aps.jpeg')} class='w-full h-full object-cover'/>
        </div>
        <div class='flex flex-col p-6 w-1/3'>
            <div class='text-2xl font-semi'>{bold}</div>
            <div class='text-base'>{body}</div>
        </div>
    </div>
  )
}

export default Timeline2008
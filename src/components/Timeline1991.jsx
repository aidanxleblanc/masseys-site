import React from 'react'

const Timeline1991 = ({year, loc, bold, body}) => {
    return (
        <div class='flex items-center justify-center font-display text-navy pb-10'>
            <div class='flex flex-col p-6 text-right w-1/3'>
                <div class='text-4xl font-semi'>{bold}</div>
                <div class='text-xl'>{body}</div>
            </div>
            <div className='flex flex-col rounded-full aspect-square overflow-hidden w-1/8'>
                <img src={require('./compimgs/88seaport.jpeg')} class='w-full h-full object-cover'/>
            </div>
            <div class='flex flex-col p-6 text-left w-1/3'>
                <div class='text-6xl font-bold'>{year}</div>
                <div class='text-4xl pt-3 font-semi'>{loc}</div>
            </div>
            
        </div>
    )
}

export default Timeline1991
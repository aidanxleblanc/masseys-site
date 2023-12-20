import React from 'react'

const NumProj = ({num, place}) => {
  return (
    <div className='font-display p-4'>
        <h1 className='flex items-center'>
            <span className='p-4 text-8xl font-archivo font-bold text-[#F2CD52]'>{num}</span> 
            <span className='text-3xl font-display items-center text-white whitespace-normal'>
                <span className='font-semi'>{place}</span> <br></br>
            Projects</span>
        </h1>
    </div>
  )
}

export default NumProj
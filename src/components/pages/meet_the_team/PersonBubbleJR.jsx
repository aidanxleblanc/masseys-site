import React from 'react'

const PersonBubbleJR = ({name, pos, imageUrl}) => {
  return (
    <div className='w-1/7'>
        <div className='flex flex-col rounded-full overflow-hidden'>
            <img src={require("../../compimgs/jr.png")} />
        </div>
        <div className='font-display text-navy mt-4'>
            <h1 className='text-center font-bold text-xl'>{name}</h1>
            <h1 className='text-center text-lg'>{pos}</h1>
        </div>
    </div>
  )
}

export default PersonBubbleJR
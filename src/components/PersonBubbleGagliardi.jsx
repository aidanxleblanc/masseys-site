import React from 'react'

const PersonBubbleGagliardi = ({name, pos, imageUrl}) => {
  return (
    <div className='w-1/7'>
        <div className='flex flex-col rounded-full overflow-hidden'>
            <img src={require("./compimgs/gagliardi.jpg")} />
        </div>
        <div className='font-display text-navy mt-4'>
            <h1 className='text-center font-bold text-2xl'>{name}</h1>
            <h1 className='text-center text-xl'>{pos}</h1>
        </div>
    </div>
  )
}

export default PersonBubbleGagliardi
import React from 'react'

const PageTitle = ({title}) => {
  return (
    <div className='w-full text-center'>
        <h1 className='p-6 text-3xl font-display font-regular text-navy'>{title}</h1>
    </div>
  )
}

export default PageTitle
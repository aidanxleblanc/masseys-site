import React from 'react'

const PageTitle = ({title}) => {
  return (
    <div className='w-full text-center'>
        <h1 className='p-6 text-4xl font-display font-thin text-navy'>{title}</h1>
    </div>
  )
}

export default PageTitle
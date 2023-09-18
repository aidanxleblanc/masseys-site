import React from 'react'

const PageTitle = ({title}) => {
  return (
    <div className='w-full text-center'>
        <h1 className='pt-10 pb-10 text-5xl font-display font-regular text-navy'>{title}</h1>
    </div>
  )
}

export default PageTitle
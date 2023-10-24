import React from 'react'
import Banner from './Banner'
import MainDesc from './MainDesc'
import ProjGalBanner from './ProjGalBanner'

const Body = () => {
  return (
    <div>
      <div className='flex items-center'>
        <div className='w-1/2 pl-8 pr-8 pt-8 items-center'>
          <MainDesc />
        </div>
      </div>
      <Banner />
      <ProjGalBanner />
    </div>
  )
}

export default Body
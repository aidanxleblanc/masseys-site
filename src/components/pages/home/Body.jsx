import React from 'react'

import Banner from './Banner'
import MainDesc from './MainDesc'
import ProjGalBanner from './ProjGalBanner'

const Body = () => {
  return (
    <div>
      <div className='flex items-center'>
        <div className='flex flex-col w-1/2 h-auto p-8 '>
          <img src={require('../../../images/mohegan_sun_new.png')} 
          className=''/>
          <img src={require('../../../images/massmutual_home.jpg')} 
          className=''/>
        </div>
        <div className='flex w-1/2 h-full items-center'>
          <MainDesc />
        </div>
      </div>
      <Banner />
      <ProjGalBanner />
    </div>
  )
}

export default Body
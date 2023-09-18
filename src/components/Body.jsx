import React from 'react'
import Banner from './Banner'
import MainDesc from './MainDesc'
import ProjGalBanner from './ProjGalBanner'

const Body = () => {
  return (
    <div>
      <div className='flex p-16'>
        <div className='w-1/3 bg-navy'>
          <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/google_crop.jpeg')} 
          className='h-full pr-8 opacity-70'/>
        </div>
        <div className='w-2/3'>
          <MainDesc />
        </div>
      </div>
      <Banner />
      <ProjGalBanner />
    </div>
  )
}

export default Body
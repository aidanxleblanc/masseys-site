import React from 'react'
import Banner from './Banner'
import MainDesc from './MainDesc'
import ProjGalBanner from './ProjGalBanner'

const Body = () => {
  return (
    <div>
      <div className='flex p-16'>
        <div className='w-1/4'>
          <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/google_crop.jpeg')} className='h-30 object-contain pr-8'/>
        </div>
        <div className='w-3/4'>
          <MainDesc />
        </div>
      </div>
      <Banner />
      <ProjGalBanner />
    </div>
  )
}

export default Body
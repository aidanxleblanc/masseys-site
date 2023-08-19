import React from 'react'
import Banner from './Banner'
import MainDesc from './MainDesc'
import ProjGalBanner from './ProjGalBanner'

const Body = () => {
  return (
    <div>
      <div className='flex p-8 justify-center'>
        <div>
        <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/google_crop.jpeg')} className='h-30 object-contain pr-8'/>
        </div>
        <div>
        <MainDesc />
        </div>
      </div>

      <Banner />
      <ProjGalBanner />
    </div>
  )
}

export default Body
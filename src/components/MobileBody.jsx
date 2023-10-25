import React from 'react'
import Banner from './Banner'
import MobileMainDesc from './MobileMainDesc'
import ProjGalBanner from './ProjGalBanner'

const MobileBody = () => {
  return (
    <div>
      <div className='flex items-center'>
        <div className='w-1/2 absolute pl-8 pr-8 pt-8 z-100 items-center'>
          <MobileMainDesc />
        </div>
      </div>
      <Banner />
      <ProjGalBanner />
    </div>
  )
}

export default MobileBody
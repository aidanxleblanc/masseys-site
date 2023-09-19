import React from 'react'
import Banner from './Banner'
import MainDesc from './MainDesc'
import ProjGalBanner from './ProjGalBanner'

const Body = () => {
  return (
    <div>
      <div className='flex items-start'>
        <div className='flex flex-col w-1/2 p-8 space-y-8 pr-0'>
          <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')} 
          className=''/>
          <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/101college.jpeg')} 
          className=''/>
        </div>
        <div className='w-1/2 pl-8 pr-8 pt-8'>
          <MainDesc />
        </div>
      </div>
      <Banner />
      <ProjGalBanner />
    </div>
  )
}

export default Body
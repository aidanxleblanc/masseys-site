import React from 'react'
import HomeLogo from '../HomeLogo';
import MobileDropdown from './MobileDropdown';

const HomeNavbar = ({absolute, color}) => {

  let navClassName = 'flex justify-between w-full top-0 text-' + color;


  if (absolute) {
    navClassName += ' absolute';
  }

  return (
    <div className = {navClassName}>
      <div className='flex items-top p-6 w-1/2'>
        <a href="/home">
          <HomeLogo />
        </a>
      </div>
      <div className='flex w-1/4 items-center justify-center'>
        <MobileDropdown /> 
      </div>
    </div>
  )
}

export default HomeNavbar
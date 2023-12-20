import React from 'react'
import DropdownMenu from '../../general/navbar/DropdownMenu';
import HomeLogo from './HomeLogo';

const HomeNavbar = ({absolute, color}) => {

  let navClassName = 'flex justify-between w-full top-0 text-' + color;


  if (absolute) {
    navClassName += ' absolute';
  }

  return (
    <div className = {navClassName}>
      <div className='flex md:flex items-top p-6 lg:w-1/6 sm:w-1/4'>
        <a href="/home">
          <HomeLogo />
        </a>
      </div>
        <div className='flex pt-8 text-center lg:text-base sm:text-sm justify-center'>
        <a href="/projects"><DropdownMenu name="Featured" items={['Portfolio']}/></a>
            <DropdownMenu name="Who We Are" items={['Our Story', 'Our Team',]} />
            <DropdownMenu name="What We Do" items={['Our Work', 'Our Mission']}/>
            <a href="/careers"><DropdownMenu name="Careers" items={[]}/></a>
            <a href="/contact"><DropdownMenu name="Contact" items={[]}/></a>       
        </div>
    </div>
  )
}

export default HomeNavbar
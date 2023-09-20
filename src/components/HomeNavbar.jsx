import React from 'react'
import DropdownMenu from './DropdownMenu';
import HomeLogo from './HomeLogo';

const HomeNavbar = ({absolute, color}) => {

  let navClassName = 'flex justify-between w-full top-0 text-' + color;


  if (absolute) {
    navClassName += ' absolute';
  }

  return (
    <div className = {navClassName}>
      <div className='flex items-top p-6 w-1/6'>
        <a href="/home">
          <HomeLogo />
        </a>
      </div>
        <div className='flex pt-8 text-center justify-center'>
            <a href="/projects"><DropdownMenu name="Projects" items={['Featured']}/></a>
            <DropdownMenu name="Who We Are" items={['Our Story', 'Our Mission',]} />
            <DropdownMenu name="What We Do" items={['Our Work', 'Our Team']}/>
            <a href="/careers"><DropdownMenu name="Careers" items={[]}/></a>
            <a href="/contact"><DropdownMenu name="Contact" items={[]}/></a>     
        </div>
    </div>
  )
}

export default HomeNavbar
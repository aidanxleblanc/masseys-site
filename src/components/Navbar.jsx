import React from 'react'
import DropdownMenu from './DropdownMenu';
import Logo from './Logo';

const Navbar = ({absolute, color}) => {

  let navClassName = 'flex justify-between w-full top-0 text-' + color;


  if (absolute) {
    navClassName += ' absolute';
  }

  return (
    <div className = {navClassName}>
      <div className='flex items-top pl-10 pt-6 w-1/16'>
        <a href="/home">
          <Logo />
        </a>
      </div>
        <div className='flex pt-8 text-center text-xl justify-center'>
            <a href="/projects"><DropdownMenu name="Projects" items={['Featured']}/></a>
            <a href="/who-we-are"><DropdownMenu name="Who We Are" items={['Our Story', 'Our Team',]} /></a>
            <a href="what-we-do"><DropdownMenu name="What We Do" items={['Sustainability']}/></a>
            <a href="/careers"><DropdownMenu name="Careers" items={[]}/></a>
            <a href="/contact"><DropdownMenu name="Contact" items={[]}/></a>     
        </div>
    </div>
  )
}

export default Navbar
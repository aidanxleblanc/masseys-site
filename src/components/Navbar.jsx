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
      <div className='flex items-top p-6 w-1/6'>
        <Logo />
      </div>
        <div className='flex pt-8 text-center justify-center'>
            <DropdownMenu name="Projects" items={['Featured']}/>
            <DropdownMenu name="Who We Are" items={['Our Story', 'Meet the Team', 'News & Media']} />
            <DropdownMenu name="What We Do" items={['Sustainability']}/>
            <DropdownMenu name="Careers" items={[]}/>
            <DropdownMenu name="Contact" items={[]}/>
        </div>
    </div>
  )
}

export default Navbar
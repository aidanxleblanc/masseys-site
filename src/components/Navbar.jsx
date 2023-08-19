import React from 'react'
import DropdownMenu from './DropdownMenu';
import Logo from './Logo';

const Navbar = () => {

  return (
    <div className='flex justify-between w-full absolute top-0 text-white'>
      <div className='flex pl-4'>
        <Logo />
      </div>
        <div className='flex pt-8'>
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
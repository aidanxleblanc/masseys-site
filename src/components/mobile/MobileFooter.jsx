import React from 'react'
import Logo from '../Logo.jsx'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-dknavy p-2 text-sm text-center'>
      <div className='flex justify-center'>
        <div className='flex text-white justify-between items-center text-xs/6 pt-2 space-x-1'>
          <div className='font-display'>
            <span className='font-bold'>Headquarters <br /></span>
            734 East Main Street <br />
            Branford, CT
          </div>
          <div className='font-display'>
            <span className='font-bold'>Office Locations <br /></span>
            Franklin, MA <br />
            Providence, RI <br />
          </div>
          <div className='font-display'>
            <span className='font-bold'>Contact Us <br /></span>
            203-488-2377 <br />
            203-488-6381 <br />
          </div>
          <div className='font-display'>
            <span className='font-bold'>Join our team <br /></span>
            <a href="/careers">Careers <br /></a>
            <br />
          </div>
        </div>
      </div>
      <h1 className='text-white text-center font-display text-xs mt-4'>Copyright © 2023 Massey's Glass  |  Privacy Policy  |  All Rights Reserved</h1>
    </div>
  )
}

export default Footer
import React from 'react'
import Logo from '../general/navbar/Logo'

const Footer = () => {
  return (
    <div className='items-center justify-center bg-dknavy p-5'>
      <div className='flex justify-around'>
        <div className='flex items-center p-3 w-1/17'>
          <Logo />
        </div>
        <div className='flex text-white items-center space-x-6'>
          <div className='font-display'>
            <span className='font-bold'>Headquarters <br /></span>
            734 East Main Street <br />
            Branford, CT
          </div>
          <div className='font-display'>
            <span className='font-bold'>Shop <br /></span>
            9 Baldwin Drive <br />
            Branford, CT
          </div>
          <div className='font-display'>
            <span className='font-bold'>Franklin Office <br /></span>
            254 East Central Street <br />
            Franklin, MA <br />
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
        <div className='flex items-center w-1/6'>
          <div className='p-3'>
            <img src={require('../../images/fmapproved.jpeg')} />
          </div>
          <div className='p-3'>
            <img src={require('../../images/cert.png')} />
          </div>
          <div className='p-3'>
            <img src={require('../../images/fcia.jpeg')} />
          </div>
        </div>
      </div>
      <h1 className='text-white text-center font-display text-sm mt-4'>Copyright © 2023 Massey's Glass  |  Privacy Policy  |  All Rights Reserved</h1>
    </div>
  )
}

export default Footer
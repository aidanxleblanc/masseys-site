import React from 'react'
// import Logo from '../general/Logo.jsx'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-dknavy p-2 text-sm text-center'>
      <div className='flex justify-around'>
        <div className='flex text-white justify-around items-center text-xs/6 pt-2 space-x-4'>
          <div className='font-display'>
            <span className='font-bold'>Headquarters <br /></span>
            734 E Main St <br />
            Branford, CT
          </div>
          <div className='font-display'>
            <span className='font-bold'>Shop <br /></span>
            9 Baldwin Dr <br />
            Branford, CT
          </div>
          <div className='font-display'>
            <span className='font-bold'>Franklin Office <br /></span>
            254 E Central St<br />
            Franklin, MA <br />
          </div>
          <div className='font-display'>
            <span className='font-bold'>Contact Us <br /></span>
            203-488-2377 <br />
            203-488-6381 <br />
          </div>
        </div>
      </div>
      <h1 className='text-white text-center font-display text-xs mt-4'>Copyright © 2023 Massey's Glass  |  Privacy Policy  |  All Rights Reserved</h1>
    </div>
  )
}

export default Footer
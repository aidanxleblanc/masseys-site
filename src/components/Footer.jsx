import React from 'react'
import Logo from '/Users/aidanleblanc/Desktop/masseys-site/src/components/Logo.jsx'

const Footer = () => {
  return (
    <div className='items-center justify-center bg-dknavy'>
      <div className='flex justify-around'>
        <div className='flex items-center p-5 w-1/7'>
          <Logo />
        </div>
        <div className='flex w-1/2 text-white justify-between items-center'>
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
            Careers <br />
            <br />
          </div>
        </div>
        <div className='flex items-center w-1/6'>
          <div className='p-5'>
            <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/fmapproved.jpeg')} />
          </div>
          <div className='p-5'>
            <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/cert.png')} />
          </div>
          <div className='p-5'>
            <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/fcia.jpeg')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
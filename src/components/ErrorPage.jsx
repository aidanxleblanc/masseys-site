import React from 'react'
import MobileNavbar from '../components/MobileNavbar'
import MobileFooter from '../components/MobileFooter'

const ErrorPage = () => {
  return (
    <div className='flex flex-col'>
        <MobileNavbar></MobileNavbar>
        <div className='h-3/4'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        <div className='flex flex-col justify-center items-center font-display font-bold text-navy h-3/4'>
            <img src={require('../images/50yrs.png')} 
                className='w-1/5 object-contain'/>
            <div className='text-center'>
                <br />
                This page is under construction! 
                <br />
                Please come back later.
            </div>
        </div>
        <div className='h-3/4'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        <MobileFooter />
    </div>
  )
}

export default ErrorPage
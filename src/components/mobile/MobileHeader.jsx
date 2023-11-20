import React from 'react'

import HomeNavbar from './MobileHomeNavbar'
import url from '../../images/mobilehomedark.jpg'


const Header = () => {
  return (
    <div className='flex flex-col'>
    <div className='flex flex-col text-center h-4/5 bg-cover' style={{backgroundImage: `url(${url})`}}>
      <div className='flex flex-col'>
          <HomeNavbar color='white'/> 
          <div className="text-center items-center font-display font-semi"
            style={{opacity: 0, animation:'fadeInFromLeft 1s ease-in forwards'}}>
                <h1 className=" px-10 text-3xl font-bold text-white">
                Transforming <span className='text-gold'>architects’ <br /> vision </span> 
                  into the future <br />
                  of <span className='text-gold'>eco-sustainable <br /></span>
                  building facades.</h1>
          </div>
          <div className='inset-5 pt-6 px-4'>
            <img src={require('../../images/380stuart.jpeg')}/> 
          </div>
      </div>
      <div className='flex flex-col justify-center text-center font-display text-white'>
        <h1 className='text-3xl pt-6 pb-6'>Build with confidence.</h1>
      </div>
    </div>
   </div>
  );
};

export default Header
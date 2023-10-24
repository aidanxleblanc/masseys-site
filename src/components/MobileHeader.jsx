import React from 'react'
import HomeNavbar from './MobileHomeNavbar'
import FloatText from './FloatText';
import url from '../images/mobilehomedark.jpg'


const Header = () => {
  return (
    <div className='absolute text-center h-full bg-cover' style={{backgroundImage: `url(${url})`}}>
      {/* <img src={require('../images/mobilehomedark.jpg')}/> */}
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
      </div>  
    <div>
      </div>
    </div>
  );
};

export default Header
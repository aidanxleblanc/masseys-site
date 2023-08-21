import React from 'react'
import Navbar from './Navbar'
import FloatText from './FloatText';

const Header = () => {
  return (
    <div className='relative top-0 bg-image'>
        <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/pier4_cropped.png')} />
        <Navbar absolute={true} color='white'/>
      <div>
        <FloatText />
      </div>
    </div>
  );
};

export default Header
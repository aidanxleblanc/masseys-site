import React from 'react'
import Navbar from './Navbar'
import FloatText from './FloatText';

const Header = () => {
  return (
    <div className='relative top-0'>
        <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/pier4_cropped.png')} />
        <Navbar />
        {/* <FloatText /> */}
    </div>
  );
};

export default Header
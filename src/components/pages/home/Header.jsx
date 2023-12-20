import React from 'react'
import HomeNavbar from './HomeNavbar'
import FloatText from './FloatText';


const Header = () => {
  return (
    <div className='relative top-0 bg-image bg-cover'>
        <img src={require('../../../images/ragon_edit.png')}/>
        <HomeNavbar absolute={true} color='white'/>
      <div>
        <FloatText />
      </div>
    </div>
  );
};

export default Header
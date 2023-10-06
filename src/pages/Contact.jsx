import React from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from '/Users/aidanleblanc/Desktop/masseys-site/src/images/Contact.png';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <div className='relative top-0'>
      <Navbar />
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Contact;


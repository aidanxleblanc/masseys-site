import React, { useState } from 'react';
import Navbar from '../../components/general/navbar/Navbar';
import PageTitle from '../../components/general/PageTitle';
import Footer from '../../components/general/Footer'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// import IndvProjectSquare from '../../components/IndvProjectSquare';


import img1 from "./prjimg/Boylston_1.jpeg";
import img2 from "./prjimg/Boylston_2.jpeg";
import img3 from "./prjimg/Boylston_3.jpeg";
import img4 from "./prjimg/Boylston_4.jpeg";
import img5 from "./prjimg/Boylston_5.jpeg";

const images = [img1, img2, img3, img4, img5];

const IndividualProject = ({ url, desc, name, city, state, year, type, arch, owner, contr }) => {
  // Create a state variable to keep track of the currently displayed image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle clicking the next image arrow
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle clicking the previous image arrow
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='font-display text-navy justify-center'>
      <Navbar color='navy' />
      <PageTitle title="888 Boylston Street" />
      <div className='flex justify-center'>
        <div className='flex items-center justify-center p-5'>
            <button onClick={handlePrevImage}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        </div>
        <div className='flex'>
          {/* Display the image based on the currentImageIndex */}
          <img src={images[currentImageIndex]} alt={`Project ${currentImageIndex + 1}`} />
        <div className='flex items-center p-5'>
            <button onClick={handleNextImage}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
        </div>
      </div>
      {/* <div className='flex justify-center p-6'>
        <h1 className='font-thin text-2xl text-center w-2/3'>{desc}</h1>
      </div> */}
      <div className='flex mt-6'>
        <div className='w-1/2 text-right font-semi mr-1'>
          Location: <br />
          Type: <br />
        </div>
        <div className='w-1/2 text-left ml-1'>
          Boston, Massachusetts <br />
          Office/Retail <br />
        </div>
      </div>
        {/* <div className='font-semi text-3xl text-center pt-6'>
            <h1>More {state} Projects</h1>
        </div>
        <div className='flex p-6 space-x-4'>
            <IndvProjectSquare imageUrl={require('../../images/888boylstonalt.jpeg')}
            name='888 Boylston Street' loc='Boston, MA'/>
            <IndvProjectSquare imageUrl={require('../../images/backbaysouth.jpeg')}
            name='Back Bay South End Gateway' loc='Boston, MA'/>
            <IndvProjectSquare imageUrl={require('../../images/bostonmed.jpeg')}
            name='Boston Medical' loc='Boston, MA'/>
            <IndvProjectSquare imageUrl={require('../../images/budentalmed.jpeg')}
            name='Boston University Dental Medicine' loc='Boston, MA'/>
            <IndvProjectSquare imageUrl={require('../../images/brighamwomens.jpeg')}
            name="Brigham & Women's Hospital" loc='Boston, MA'/>
            <IndvProjectSquare imageUrl={require('../../images/bulfinchxing.png')}
            name='Bulfinch Crossing' loc='Boston, MA'/>
            <IndvProjectSquare imageUrl={require('../../images/eataly.jpeg')}
            name='Eataly' loc='Boston, MA'/>
            <IndvProjectSquare imageUrl={require('../../images/fenwayphaseii.jpeg')}
            name="Fenway Center Phase II" loc='Boston, MA'/>
        </div> */}
        <div className='mt-4'>
            <Footer /> 
        </div>
        
    </div>
  )
}

export default IndividualProject
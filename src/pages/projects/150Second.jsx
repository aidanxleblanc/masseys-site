import React, { useState } from 'react';
import Media from 'react-responsive'

import Navbar from '../../components/general/navbar/Navbar';
import PageTitle from '../../components/general/PageTitle';
import Footer from '../../components/general/Footer'
import MobileProjectTitle from '../../components/mobile/MobileProjectTitle';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// import IndvProjectSquare from '../../components/IndvProjectSquare';


import img1 from "./prjimg/Second150_1.jpeg";
import img2 from "./prjimg/Second150_2.jpeg";

const images = [img1, img2];

const Project = ({ imgs, name, city, state, type}) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); 
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (

    <div className='flex flex-col justify-between items- font-display text-navy h-screen'>

      <Navbar color='navy' />

      <Media query="(max-width: 768px)">
        {isMobile => (
          isMobile ? <MobileProjectTitle title={name}/> : <PageTitle title={name} />
        )}
      </Media>

      <div className='flex flex-grow justify-center'>
        <div className='flex flex-col justify-around min-h-full'>
          <div className='flex justify-center max-w-full'>

            <div className='flex'>
              <div className='flex items-center justify-center p-5'>
                <button onClick={handlePrevImage}><FontAwesomeIcon icon={faChevronLeft} /></button>
              </div>
              <img src={images[currentImageIndex]} alt={`Project ${currentImageIndex + 1}`} />
              <div className='flex items-center p-5'>
                  <button onClick={handleNextImage}><FontAwesomeIcon icon={faChevronRight} /></button>
              </div>
            </div>

          </div>

          <div className='flex mt-6'>
            <div className='w-1/2 text-right font-semi mr-1'>
              Location: <br />
              Type: <br />
            </div>
            <div className='w-1/2 text-left ml-1'>
              {city}, {state} <br />
              {type} <br />
            </div>
          </div>

        </div>  
      </div>
      <div className='mt-4'>
            <Footer /> 
        </div>
    </div>

  )
}

export default Project
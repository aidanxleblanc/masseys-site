import React from 'react';
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import './App.css';
import FeaturedProjects from './pages/FeaturedProjects';
import IndividualProject from './pages/IndividualProject';
import { type } from '@testing-library/user-event/dist/type';

function App() { 
  return (
    <>
      <HomePage />
      {/* <Projects /> */}
      {/* <FeaturedProjects /> */}
      {/* <IndividualProject 
        name='380 Stuart Street'
        city='Boston'
        state='Massachusetts'
        year='2017'
        type='Office'
        arch='CBT Architects'
        owner='Turner'
        contr='Contractor'
        desc='Situated in the center of Boston’s Back Bay neighborhood, 380 Stuart is an intelligently designed 
        642,000 SF, 28-story office tower with private terraces, an indoor-outdoor roof deck, elevated 
        amenities, integrated,  touchless building systems and enhanced health and well-being measures 
        tailored to meet your needs. '
          /> */}
    </>
  );
}

export default App;

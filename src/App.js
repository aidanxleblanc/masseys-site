import React from 'react';
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import './App.css';
import FeaturedProjects from './pages/FeaturedProjects';
import IndividualProject from './pages/IndividualProject';

function App() { 
  return (
    <>
      {/* <HomePage /> */}
      {/* <Projects /> */}
      {/* <FeaturedProjects /> */}
      <IndividualProject name='380 Stuart Street'/>
    </>
  );
}

export default App;

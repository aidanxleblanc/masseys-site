import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import './App.css';
import Featured from './pages/Featured';
import IndividualProject from './pages/IndividualProject';
import Careers from './pages/Careers';
import MeetTheTeam from './pages/MeetTheTeam';
import Contact from './pages/Contact';
import Sustainability from './pages/Sustainability';
import WhoWeAre from './pages/WhoWeAre';
import WhatWeDo from './pages/WhatWeDo';
import OurStory from './pages/OurStory';
import NewsMedia from './pages/NewsMedia';

function App() { 
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='*' element={<Home />}/>
            <Route path='/careers' element={<Careers />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/featured' element={<Featured />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/meet-the-team' element={<MeetTheTeam />}/>
            <Route path='/news-&-media' element={<NewsMedia />}/>
            <Route path='/our-story' element={<OurStory />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/sustainability' element={<Sustainability />}/>
            <Route path='/what-we-do' element={<WhatWeDo />}/>
            <Route path='/who-we-are' element={<WhoWeAre />}/>

            <Route path='/380-stuart-st' element={
              <IndividualProject 
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
              />}/>
          </Routes >
        </BrowserRouter>
      </div>
  );
}

export default App;

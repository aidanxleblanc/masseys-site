import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import './App.css';
import Featured from './pages/Featured';
import Careers from './pages/Careers';
import MeetTheTeam from './pages/MeetTheTeam';
import Contact from './pages/Contact';
import OurStory from './pages/OurStory';
import OurMission from './pages/OurMission';
import OurWork from './pages/OurWork';

import Stuart380 from './pages/projects/380Stuart';

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
            <Route path='/our-team' element={<MeetTheTeam />}/>
            <Route path='/our-story' element={<OurStory />}/>
            <Route path='/our-work' element={<OurWork />}/>
            <Route path='/our-mission' element={<OurMission />}/>
            <Route path='/projects' element={<Projects />}/>

            <Route path='/105-west-1st-street' element={
              <Stuart380 
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
            <Route path='/380-stuart-street' element={
              <Stuart380 
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
            <Route path='/88-seaport' element={
              <Stuart380 
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
            <Route path='/888-boylston-street' element={
              <Stuart380 
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
            <Route path='/back-bay-south-end-gateway' element={
              <Stuart380 
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
            <Route path='/boston-medical' element={
              <Stuart380 
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
            <Route path='/boston-university-school-of-dental-medicine' element={
              <Stuart380 
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
            <Route path="/brigham-&-women's-hospital" element={
              <Stuart380 
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
            <Route path='/bulfinch-crossing' element={
              <Stuart380 
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
            <Route path='/eataly' element={
              <Stuart380 
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
            <Route path='/fenway-center-phase-ii' element={
              <Stuart380 
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
            <Route path='/harvard-erc-east-&-west-labs' element={
              <Stuart380 
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
            <Route path='/mass-general-hospital' element={
              <Stuart380 
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
            <Route path='/mass-mutual-@-fan-pier' element={
              <Stuart380 
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
            <Route path='/pier-4' element={
              <Stuart380 
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
            <Route path='/twenty-two-liberty-@-fan-pier' element={
              <Stuart380 
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
            <Route path='/150-2nd-street' element={
              <Stuart380 
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
            <Route path='/290/250-binney-street' element={
              <Stuart380 
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
            <Route path='/google-headquarters' element={
              <Stuart380 
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
            <Route path="/mit-site-5" element={
              <Stuart380 
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
            <Route path='/ragon-institute-ii' element={
              <Stuart380 
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
            <Route path='/uri-college-of-engineering' element={
              <Stuart380 
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
            <Route path='/danbury-hospital' element={
              <Stuart380 
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
            <Route path='/quinnipiac-university-wellness-center' element={
              <Stuart380 
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
            <Route path='/foxwoods-resort-hotel-&-casino' element={
              <Stuart380 
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
            <Route path='/mgm-grand-at-foxwoods' element={
              <Stuart380 
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
            <Route path='/100-college-st' element={
              <Stuart380 
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
            <Route path='/101-college-st' element={
              <Stuart380 
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
            <Route path='/55-park-street' element={
              <Stuart380 
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
            <Route path='/knights-of-columbus' element={
              <Stuart380 
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
            <Route path='/yale-new-haven-hospital' element={
              <Stuart380 
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
            <Route path="/yale-peabody-museum" element={
              <Stuart380 
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
            <Route path='/yale-smilow-cancer-center' element={
              <Stuart380 
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
            <Route path='/norwalk-hospital' element={
              <Stuart380 
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
            <Route path='/fenway-center-phase-ii' element={
              <Stuart380 
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
            <Route path='/brown-university-school-of-engineering' element={
              <Stuart380 
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
            <Route path='/providence-college-friar-center' element={
              <Stuart380 
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
            <Route path='/providence-college-school-of-business' element={
              <Stuart380 
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
            <Route path='/providence-place-mall' element={
              <Stuart380 
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
            <Route path='/south-street-landing' element={
              <Stuart380 
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
            <Route path="/the-dunkin'-donuts-center" element={
              <Stuart380 
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
            <Route path='/women-&-infants-hospital' element={
              <Stuart380 
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
            <Route path='/bryant-university-george-e.-bello-center' element={
              <Stuart380 
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
            <Route path="/stamford-hospital" element={
              <Stuart380 
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
            <Route path='/uconn-gant-renovation' element={
              <Stuart380 
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
            <Route path='/uconn-stem-research-center' element={
              <Stuart380 
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
            <Route path='/mohegan-sun-earth-hotel' element={
              <Stuart380 
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
            <Route path='/mohegan-sun-tower-hotel' element={
              <Stuart380 
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
            <Route path='/white-plains-hospital-medical-center' element={
              <Stuart380 
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

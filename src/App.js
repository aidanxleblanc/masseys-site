import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Media from 'react-responsive';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import './App.css';
import Featured from './pages/Featured';
import Careers from './pages/Careers';
import MeetTheTeam from './pages/MeetTheTeam';
import Contact from './pages/ContactTest';
import OurStory from './pages/OurStory';
import OurMission from './pages/OurMission';
import OurWork from './pages/OurWork';

import Liberty22 from './pages/projects/22Liberty';
import Park55 from './pages/projects/55Park';
import Seaport88 from './pages/projects/88Seaport';
import College100 from './pages/projects/100College';
import College101 from './pages/projects/101College';
import West1st from './pages/projects/105West1st';
import Second150 from './pages/projects/150Second';
import Stuart380 from './pages/projects/380Stuart';
import Boylston888 from './pages/projects/888Boylston';
import BackBay from './pages/projects/BackBaySouthEnd';
import Binney from './pages/projects/Binney';
import BostonMed from './pages/projects/BostonMed';
import Brigham from './pages/projects/BrighamWomens';
import BrownEngn from './pages/projects/BrownEngn';
import BryantBello from './pages/projects/BryantBello';
import BUDental from './pages/projects/BUDental';
import Bulfinch from './pages/projects/Bulfinch';
import Danbury from './pages/projects/DanburyHospital';
import Dunk from './pages/projects/Dunk';
import Eataly from './pages/projects/Eataly';
import Fenway from './pages/projects/FenwayCenter';
import Foxwoods from './pages/projects/FoxwoodsCasino';
import Google from './pages/projects/GoogleHQ';
import Harvard from './pages/projects/HarvardERC';
import Knights from './pages/projects/KnightsColumbus';
import MassGeneral from './pages/projects/MassGeneral';
import MassMutual from './pages/projects/MassMutual';
import MGM from './pages/projects/MGMGrand';
import MIT from './pages/projects/MITSite5';
import Earth from './pages/projects/MoheganEarth';
import Tower from './pages/projects/MoheganTower';
import Norwalk from './pages/projects/NorwalkHospital';
import PCBusiness from './pages/projects/PCBusiness';
import PCFriar from './pages/projects/PCFriar';
import Pier4 from './pages/projects/Pier4';
import ProvPlace from './pages/projects/ProvPlace';
import Wellness from './pages/projects/QuinnipiacWellness';
import Ragon from './pages/projects/Ragon';
import SSL from './pages/projects/SSL';
import Stamford from './pages/projects/StamfordHospital';
import Gant from './pages/projects/UCONNGant';
import Stem from './pages/projects/UCONNStem';
import URIEngn from './pages/projects/URIEngn';
import WhitePlains from './pages/projects/WhitePlainsHospital';
import WomenInfants from './pages/projects/WomenInfants';
import YaleNewHaven from './pages/projects/YaleNewHaven';
import Peabody from './pages/projects/YalePeabody';
import Smilow from './pages/projects/YaleSmilow';



function App() { 
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='*' element={<Home />}/>
            <Route path='/careers' element={<Careers />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/featured-projects' element={<Featured />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/our-team' element={<MeetTheTeam />}/>
            <Route path='/our-story' element={<OurStory />}/>
            <Route path='/our-work' element={<OurWork />}/>
            <Route path='/our-mission' element={<OurMission />}/>
            <Route path='/projects' element={<Featured />}/>
            <Route path='/portfolio' element={<Projects />}/>

            <Route path='/105-west-1st-street' element={
              <West1st 
              name='105 West 1st Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
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
              />}/>
            <Route path='/88-seaport' element={
              <Seaport88 
              name='88 Seaport'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/888-boylston-street' element={
              <Boylston888 
              name='88 Boylston Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/back-bay-south-end-gateway' element={
              <BackBay 
              name='Back Bay South End Gateway'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/boston-medical' element={
              <BostonMed 
              name='Boston Medical'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/boston-university-school-of-dental-medicine' element={
              <BUDental 
              name='Boston University School of Dental Medicine'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path="/brigham-&-women's-faulkner-hospital" element={
              <Brigham 
              name="Brigham & Women's Faulkner Hospital"
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/bulfinch-crossing' element={
              <Bulfinch 
              name='Bulfinch Crossing'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/eataly' element={
              <Eataly 
              name='Eataly'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/fenway-center-phase-ii' element={
              <Fenway 
              name='Fenway Center Phase II'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/harvard-erc-east-&-west-labs' element={
              <Harvard 
              name='Harvard ERC East & West Labs'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/mass-general-hospital' element={
              <MassGeneral 
              name='Mass General Hospital'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/mass-mutual-@-fan-pier' element={
              <MassMutual 
              name='Mass Mutual @ Fan Pier'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/pier-4' element={
              <Pier4 
              name='Pier 4'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/twenty-two-liberty-@-fan-pier' element={
              <Liberty22 
              name='Twenty Two Liberty @ Fan Pier'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/150-2nd-street' element={
              <Second150 
              name='150 2nd Street'
              city='Cambridge'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/290/250-binney-street' element={
              <Binney 
              name='290/250 Binney Street'
              city='Cambridge'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/google-headquarters' element={
              <Google 
              name='Google Headquarters'
              city='Cambridge'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path="/mit-site-5" element={
              <MIT 
              name='MIT Site 5'
              city='Cambridge'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/ragon-institute-ii' element={
              <Ragon 
              name='Ragon Institute II'
              city='Cambridge'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/uri-college-of-engineering' element={
              <URIEngn 
              name='URI College of Engineering'
              city='South Kingston'
              state='Rhode Island'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/danbury-hospital' element={
              <Danbury 
              name='Danbury Hospital'
              city='Danbury'
              state='Connecticut'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/quinnipiac-university-wellness-center' element={
              <Wellness 
              name='Quinnipiac University Wellness Center'
              city='Hamden'
              state='CT'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/foxwoods-resort-hotel-&-casino' element={
              <Foxwoods 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/mgm-grand-at-foxwoods' element={
              <MGM 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/100-college-st' element={
              <College100 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/101-college-st' element={
              <College101 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/55-park-street' element={
              <Park55 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/knights-of-columbus' element={
              <Knights 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/yale-new-haven-hospital' element={
              <YaleNewHaven 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path="/yale-peabody-museum" element={
              <Peabody 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/yale-smilow-cancer-center' element={
              <Smilow 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/norwalk-hospital' element={
              <Norwalk 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/fenway-center-phase-ii' element={
              <Fenway 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/brown-university-school-of-engineering' element={
              <BrownEngn 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/providence-college-friar-center' element={
              <PCFriar 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/providence-college-school-of-business' element={
              <PCBusiness 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/providence-place-mall' element={
              <ProvPlace 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/south-street-landing' element={
              <SSL 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path="/the-dunkin'-donuts-center" element={
              <Dunk 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/women-&-infants-hospital' element={
              <WomenInfants 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/bryant-university-george-e.-bello-center' element={
              <BryantBello 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path="/stamford-hospital" element={
              <Stamford 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/uconn-gant-renovation' element={
              <Gant 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/uconn-stem-research-center' element={
              <Stem 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/mohegan-sun-earth-hotel' element={
              <Earth 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              arch='CBT Architects'
              owner='Turner'
              contr='Contractor'
              />}/>
            <Route path='/mohegan-sun-tower-hotel' element={
              <Tower 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              />}/>
            <Route path='/white-plains-hospital-medical-center' element={
              <WhitePlains 
              name='380 Stuart Street'
              city='Boston'
              state='Massachusetts'
              year='2017'
              type='Office'
              />}/>
          </Routes >
        </BrowserRouter>
      </div>
  );
}

export default App;

import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import ProjectSquare from '../components/ProjectSquare'
import Footer from '../components/Footer'


const Projects = () => {

  return (
    <div className='flex flex-col'>
      <div>
        <Navbar absolute={false} color='navy'/>
      </div>
      <PageTitle title='Projects'/> 
      <div>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='105 West 1st Street' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name='380 Stuart Street' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='88 Seaport' loc='Boston, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='888 Boylston Street' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name='Back Bay South End Gateway' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='Boston Medical' loc='Boston, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='Boston University School of Dental Medicine' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="Brigham & Women's Hospital" loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='Bulfinch Crossing' loc='Boston, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='Eataly' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="Fenway Center Phase II" loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='Harvard ERC East & West Labs' loc='Boston, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='Mass General Hospital' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="Mass Mutual @ Fan Pier" loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='Pier 4' loc='Boston, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='Twenty Two Liberty @ Fan Pier' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="150 Second Street" loc='Cambridge, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='290/250 Binney Street' loc='Cambridge, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='Google Headquarters' loc='Cambridge, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="MIT Site 5" loc='Cambridge, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='Ragon Institute II' loc='Cambridge, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='URI College of Engineering' loc='South Kingston, RI'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="Danbury Hospital" loc='Danbury, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='Quinnipiac University Wellness Center' loc='Hamden, CT'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='Foxwoods Resort Hotel & Casino' loc='Ledyard, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="MGM Grand at Foxwoods" loc='Ledyard, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='100 College St' loc='New Haven, CT'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='101 College St' loc='New Haven, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="55 Park Street" loc='New Haven, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='Knights of Columbus' loc='New Haven, CT'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='Yale New Haven Hospital' loc='New Haven, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="Yale Peabody Museum" loc='New Haven, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='Yale Smilow Cancer Center' loc='New Haven, CT'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='Norwalk Hospital' loc='Norwalk, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="Brown University School of Engineering" loc='Providence, RI'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='Providence College Friar Center' loc='Providence, RI'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='Providence College School of Business' loc='Providence, RI'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="Providence Place Mall" loc='Providence, RI'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='South Street Landing' loc='Providence, RI'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name="The Dunkin' Donuts Center" loc='Providence, RI'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="Women & Infants Hospital" loc='Providence, RI'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='Bryant University George E. Bello Center' loc='Smithfield, RI'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name="Stamford Hospital" loc='Stamford, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="UCONN Gant Renovation" loc='Storrs, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='UCONN Stem Research Center' loc='Storrs, CT'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name="Mohegan Sun Earth Hotel" loc='Uncasville, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="Mohegan Sun Tower Hotel" loc='Uncasville, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='White Plains Hospital Medical Center' loc='White Plains, NY'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name="Bradley International Airport" loc='Windsor Locks, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="UMass Memorial Hospital" loc='Worcester, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='White Plains Hospital Medical Center' loc='White Plains, NY'/>
      </div>
      <div className='mt-8'>
        <Footer />
      </div>
    </div>
  )
}

export default Projects
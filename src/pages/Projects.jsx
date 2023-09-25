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
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105westst.png')}
          name='105 West 1st Street' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name='380 Stuart Street' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaportalt.jpeg')}
          name='88 Seaport' loc='Boston, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/888boylstonalt.jpeg')}
          name='888 Boylston Street' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/backbaysouth.jpeg')}
          name='Back Bay South End Gateway' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/bostonmed.jpeg')}
          name='Boston Medical' loc='Boston, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/budentalmed.jpeg')}
          name='Boston University School of Dental Medicine' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/brighamwomens.jpeg')}
          name="Brigham & Women's Hospital" loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/bulfinchxing.png')}
          name='Bulfinch Crossing' loc='Boston, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/eataly.jpeg')}
          name='Eataly' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/fenwayphaseii.jpeg')}
          name="Fenway Center Phase II" loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/harvarderc.png')}
          name='Harvard ERC East & West Labs' loc='Boston, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/massgeneral.png')}
          name='Mass General Hospital' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/massmutual.jpeg')}
          name="Mass Mutual @ Fan Pier" loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/pier4.jpg')}
          name='Pier 4' loc='Boston, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/22liberty.jpeg')}
          name='Twenty Two Liberty @ Fan Pier' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name="150 Second Street" loc='Cambridge, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/binney.png')}
          name='290/250 Binney Street' loc='Cambridge, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/googlehq.png')}
          name='Google Headquarters' loc='Cambridge, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/mitsite5.jpeg')}
          name="MIT Site 5" loc='Cambridge, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/ragon.jpg')}
          name='Ragon Institute II' loc='Cambridge, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/uriengineering.jpeg')}
          name='URI College of Engineering' loc='South Kingston, RI'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/danbury.png')}
          name="Danbury Hospital" loc='Danbury, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/qwellness.jpeg')}
          name='Quinnipiac University Wellness Center' loc='Hamden, CT'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/foxwoodsresort.jpeg')}
          name='Foxwoods Resort Hotel & Casino' loc='Ledyard, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/mgmgrand.jpeg')}
          name="MGM Grand at Foxwoods" loc='Ledyard, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/100college.jpeg')}
          name='100 College St' loc='New Haven, CT'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/101college.jpeg')}
          name='101 College St' loc='New Haven, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/55park.jpeg')}
          name="55 Park Street" loc='New Haven, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/knightsofcolumbus.jpeg')}
          name='Knights of Columbus' loc='New Haven, CT'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/yalenewhaven.jpeg')}
          name='Yale New Haven Hospital' loc='New Haven, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/yalepeabody.jpeg')}
          name="Yale Peabody Museum" loc='New Haven, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/yalesmilow.jpeg')}
          name='Yale Smilow Cancer Center' loc='New Haven, CT'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/norwalkhospital.jpeg')}
          name='Norwalk Hospital' loc='Norwalk, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/b&h.jpeg')}
          name="Brown University School of Engineering" loc='Providence, RI'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/friarcenter.jpeg')}
          name='Providence College Friar Center' loc='Providence, RI'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/pcbusiness.jpeg')}
          name='Providence College School of Business' loc='Providence, RI'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/pvdplace.jpeg')}
          name="Providence Place Mall" loc='Providence, RI'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/ssl.jpeg')}
          name='South Street Landing' loc='Providence, RI'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/dunk.jpeg')}
          name="The Dunkin' Donuts Center" loc='Providence, RI'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/womeninfants.jpeg')}
          name="Women & Infants Hospital" loc='Providence, RI'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/bryantbello.jpeg')}
          name='Bryant University George E. Bello Center' loc='Smithfield, RI'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/stamfordhospital.jpeg')}
          name="Stamford Hospital" loc='Stamford, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/uconngant.jpeg')}
          name="UCONN Gant Renovation" loc='Storrs, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/uconnstem.jpeg')}
          name='UCONN Stem Research Center' loc='Storrs, CT'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/moheganearth.jpeg')}
          name="Mohegan Sun Earth Hotel" loc='Uncasville, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/mohegansky.jpeg')}
          name="Mohegan Sun Tower Hotel" loc='Uncasville, CT'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/whiteplainshospital.jpeg')}
          name='White Plains Hospital Medical Center' loc='White Plains, NY'/>
      </div>
      <div className='mt-8'>
        <Footer />
      </div>
    </div>
  )
}

export default Projects
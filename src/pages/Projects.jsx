import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import ProjectSquare from '../components/ProjectSquare'
import Footer from '../components/Footer'
import Filter from '../components/Filter'

const Projects = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <Navbar absolute={false} color='navy'/>
      </div>
      <PageTitle title='Projects'/> 
      <div>
        {/* <Filter /> */}
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='88 Seaport' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name='380 Stuart Street' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='105 West 1st Street' loc='Boston, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='88 Seaport' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name='380 Stuart Street' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='105 West 1st Street' loc='Boston, MA'/>
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/88seaport.jpeg')}
          name='88 Seaport' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')}
          name='380 Stuart Street' loc='Boston, MA'/>
        <ProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/105w1street.jpeg')}
          name='105 West 1st Street' loc='Boston, MA'/>
      </div>
      <div className='mt-8'>
        <Footer />
      </div>
    </div>
  )
}

export default Projects
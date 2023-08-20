import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import ProjectSquare from '../components/ProjectSquare'

const Projects = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-navy bg-opacity-80'>
        <Navbar absolute={false}/>
      </div>
      <PageTitle title='Projects'/> 
    </div>
  )
}

export default Projects
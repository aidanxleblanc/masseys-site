import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'

const IndividualProject = ({name}) => {
  return (
    <div className='justify-center'>
        <Navbar />
        <PageTitle title={name}/>
        <div className='flex justify-center'>
            <div className='flex w-3/4'>
                <img src="/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg"/>
            </div>
        </div>
        
    </div>
  )
}

export default IndividualProject
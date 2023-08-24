import React from 'react'
import PageTitle from '../components/PageTitle'
import Navbar from '../components/Navbar'
import PersonBubble from '../components/PersonBubble'

const MeetTheTeam = () => {
  return (
    <div>
        <Navbar color='navy'/>
        <PageTitle title='Meet the Team'/>
        <div className='flex justify-center space-x-16'>
            <PersonBubble name='Robert Massey Jr.' pos='President & CEO'
            imageUrl='/Users/aidanleblanc/Desktop/masseys-site/src/images/bobbypic.jpg'/>
            <PersonBubble name='Joseph Criscuolo' pos='Chief Financial Officer'/>
            <PersonBubble name='Philip DeLise' pos='Chief Operating Officer'/>
            <PersonBubble name='Chris Vailette Jr.' pos='Director of Estimating'/>
        </div>
    </div>
  )
}

export default MeetTheTeam
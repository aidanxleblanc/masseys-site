import React from 'react'
import PageTitle from '../components/PageTitle'
import Navbar from '../components/Navbar'
import PersonBubbleBobby from '../components/PersonBubbleBobby'
import PersonBubbleGagliardi from '../components/PersonBubbleGagliardi'
import PersonBubbleEssig from '../components/PersonBubbleEssig'
import PersonBubble from '../components/PersonBubble'
import Footer from '../components/Footer'

const MeetTheTeam = () => {
  return (
    <div>
        <Navbar color='navy'/>
        <PageTitle title='Meet the Team'/>
        <div className='flex justify-center space-x-16 pt-12'>
            <PersonBubbleBobby name='Robert Massey Jr.' pos='President & CEO'/>
            <PersonBubble name='Joseph Criscuolo' pos='Chief Financial Officer'/>
            <PersonBubble name='Philip DeLise' pos='Chief Operating Officer'/>
            <PersonBubble name='Chris Vailette Jr.' pos='Director of Estimating'/>
        </div>
        <div className='flex justify-center space-x-16 pt-12 pb-16'>
            <PersonBubbleEssig name='Don Essig Jr.' pos='VP Northeast Operations'/>
            <PersonBubble name='Rich Ezold Jr.' pos='Chief Administrative Officer'/>
            <PersonBubbleGagliardi name='Chris Gagliardi' pos='Operations Coordinator'/>
        </div>
        <Footer/>
    </div>
  )
}

export default MeetTheTeam
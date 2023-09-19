import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Timeline from '../components/Timeline'
import InvTimeline from '../components/InvTimeline'
import TitleHeading from '../components/TitleHeading'



const OurHistory = () => {
  return (
    <div>
      <div className='flex flex-col font-display text-navy pb-10'>
        <Navbar />
        <PageTitle title='Our Story'/>
      </div>
        <Timeline 
            year='1973'
            loc='Branford, CT' 
            bold="Massey's is founded" 
            body='in a 3-car garage and began work on small commercial and residential firm.'/>
        <InvTimeline 
            year='1978' 
            loc='Branford, CT' 
            bold="Massey's opens its first office" 
            body='and begins work on larger commercial projects.'/>
        <Timeline 
            year='1989' 
            loc='New Haven, CT' 
            bold='One Century Tower' 
            body="becomes Massey's largest project yet, venturing into the world of healthcare
            construction and forging a relationship with Blue Cross Blue Shield."/>
        <InvTimeline 
            year='1991' 
            loc='Branford, CT' 
            bold='Casino work' 
            body='beginning with Mohegan Sun'/>
        <Timeline 
            year='2008' 
            loc='Branford, CT' 
            bold='All Panels Systems' 
            body='happened'/>
        <InvTimeline 
            year='2010' 
            loc='Boston, MA' 
            bold='Boston Med Menino Expansion' 
            body='happened'/>
        <InvTimeline 
            year='2012' 
            loc='Foxboro, MA' 
            bold='Foxboro office' 
            body='happened'/>
        <Timeline 
            year='2014' 
            loc='Boston, MA' 
            bold='Boston Explosion' 
            body='happened'/>
        <InvTimeline 
            year='2016' 
            loc='Branford, CT' 
            bold='Fabbrica partnership' 
            body='happened'/>
        <Timeline 
            year='2023' 
            loc='Franklin, MA' 
            bold='Franklin Office' 
            body='happened'/>
    </div>
  )
}

export default OurHistory
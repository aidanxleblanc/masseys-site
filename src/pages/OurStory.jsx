import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Timeline1973 from '../components/Timeline1973'
import Timeline1978 from '../components/Timeline1978'
import Timeline1989 from '../components/Timeline1989'
import Timeline1991 from '../components/Timeline1991'
import Timeline2008 from '../components/Timeline2008'
import Timeline2010 from '../components/Timeline2010'
import Timeline2012 from '../components/Timeline2012'
import Timeline2014 from '../components/Timeline2014'
import Timeline2016 from '../components/Timeline2016'
import Timeline2023 from '../components/Timeline2023'


const OurHistory = () => {
  return (
    <div>
      <div className='flex flex-col font-display text-navy pb-10'>
        <Navbar />
        <PageTitle title='Our Story'/>
      </div>
        <Timeline1973 
            year='1973'
            loc='Branford, CT' 
            bold="Massey's is founded" 
            body='in a 3-car garage and began work as a small commercial and residential firm'
        />
        <Timeline1978 
            year='1978' 
            loc='Branford, CT' 
            bold="Massey's opens its first office" 
            body='and begins work on larger commercial projects'/>
        <Timeline1989 
            year='1989' 
            loc='New Haven, CT' 
            bold='One Century Tower' 
            body="becomes Massey's largest project yet, venturing into the world of healthcare
            construction and forging a relationship with Blue Cross Blue Shield"/>
        <Timeline1991 
            year='1991' 
            loc='Branford, CT' 
            bold="Casino work" 
            body="becomes a new Massey's specialty, beginning with Mohegan Sun
            and many shortly after"/>
        <Timeline2008
            year='2008' 
            loc='Branford, CT' 
            bold='All Panels Systems' 
            body='is founded, establishing material suppliers and subcontractors in-house, 
            and beginning work in waterproofing and firestop (FM Global)'/>
        <Timeline2010 
            year='2010' 
            loc='Boston, MA' 
            bold="Massey's comes to Boston"
            body='with a large project in the Boston Medical Menino Expansion'/>
        <Timeline2012 
            year='2012' 
            loc='Foxborough, MA' 
            bold='The Foxborough office' 
            body='opens its doors for the first time'/>
        <Timeline2014 
            year='2014' 
            loc='Boston, MA' 
            bold="An outpour of Boston projects"
            body='brings architectural feats into and paves the way for a Boston takeover'/>
        <Timeline2016
            year='2016' 
            loc='Branford, CT' 
            bold="Massey's partners with Fabbrica" 
            body='to help with SOMETHING'/>
        <Timeline2023 
            year='2023' 
            loc='Franklin, MA' 
            bold="Massey's celebrates 50 years"
            body='and sets up shop at its Franklin office'/>
    </div>
  )
}

export default OurHistory
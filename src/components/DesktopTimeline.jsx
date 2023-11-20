import React from 'react'
import Timeline1973 from '../components/timeline/Timeline1973'
import Timeline1978 from '../components/timeline/Timeline1978'
import Timeline1989 from '../components/timeline/Timeline1989'
import Timeline1991 from '../components/timeline/Timeline1991'
import Timeline1998 from '../components/timeline/Timeline1998'
import Timeline2006 from '../components/timeline/Timeline2006'
import Timeline2008 from '../components/timeline/Timeline2008'
import Timeline2010 from '../components/timeline/Timeline2010'
import Timeline2012 from '../components/timeline/Timeline2012'
import Timeline2014 from '../components/timeline/Timeline2014'
import Timeline2016 from '../components/timeline/Timeline2016'
import Timeline2023 from '../components/timeline/Timeline2023'

const DesktopTimeline = () => {
  return (
    <div>
        <Timeline1973 
            year='1973'
            loc='Branford, CT' 
            bold="Massey's is founded" 
            body='in a 3-car garage and begins work as a small commercial and residential firm'
        />
        <Timeline1978 
            year='1978' 
            loc='Branford, CT' 
            bold="Massey's moves to its new and current headquarters" 
            body='on North Main Street in Branford, 
            this location would have future expansion in 1986, 1997, 1999, 2008, and 2014 builds new facility on Baldwin Drive'/>
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
            body="becomes a new Massey's specialty, beginning with Foxwoods Casino and Mohegan Sun
            shortly after"/>
        <Timeline1998
            year='1998' 
            loc='Providence, RI' 
            bold="Massey's opens their Providence office" 
            body=""/>
        <Timeline2006
            year='2006' 
            loc='Branford, CT' 
            bold="Massey's partners with United Architectural Metals" 
            body='for specialty unitized glazing projects'/>
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
            body='and begins its first large project there with the Boston Medical Menino Expansion'/>
        <Timeline2012 
            year='2012' 
            loc='Foxborough, MA' 
            bold='The Foxborough office' 
            body='opens its doors for the first time'/>
        <Timeline2014 
            year='2014' 
            loc='Boston, MA' 
            bold="An outpour of Boston projects"
            body="paves the way for Massey's to become a top player in the city"/>
        <Timeline2016
            year='2016' 
            loc='Branford, CT' 
            bold="Massey's partners with Fabbrica" 
            body='for larger custom architectural and unitized facades across the Northeast'/>
        <Timeline2023 
            year='2023' 
            loc='Franklin, MA' 
            bold="Massey's celebrates 50 years"
            body='and sets up shop at its new Franklin office'/>
    </div>
  )
}

export default DesktopTimeline
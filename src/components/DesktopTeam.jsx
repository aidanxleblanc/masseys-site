import React from 'react'
import PersonBubbleBobby from '../components/PersonBubbleBobby'
import PersonBubbleMcCauley from '../components/PersonBubbleMcCauley'
import PersonBubbleCriscuolo from '../components/PersonBubbleCriscuolo'
import PersonBubbleRich from '../components/PersonBubbleRich'
import PersonBubbleEssig from '../components/PersonBubbleEssig'
import PersonBubbleVailette from '../components/PersonBubbleVailette'
import PersonBubbleDeLise from '../components/PersonBubbleDeLise'
import PersonBubbleJR from '../components/PersonBubbleJR'

const DesktopTeam = () => {
  return (
    <div>
        <div className='flex justify-center space-x-16 pt-12'>
            <PersonBubbleBobby name='Robert J. Massey Jr.' pos='President & CEO'/>
            <PersonBubbleDeLise name='Philip DeLise' pos='Chief Operating Officer'/>
            <PersonBubbleRich name='Rich Ezold Jr.' pos='Chief Administrative Officer'/>
            <PersonBubbleCriscuolo name='Joseph Criscuolo' pos='Chief Financial Officer'/>
        </div>
        <div className='flex justify-center space-x-20 pt-12 pb-16'>
            <PersonBubbleEssig name='Don Essig Jr.' pos='Vice President of Operations'/>
            <PersonBubbleVailette name='Chris Vailette Jr.' pos='Vice President of Pre-Construction'/>
            <PersonBubbleJR name='J.R. LaFrancois' pos='Vice President of Metal Panels'/>
            <PersonBubbleMcCauley name='Jason McCauley' pos='Director of Field Operations'/>  
        </div>
    </div>
  )
}

export default DesktopTeam
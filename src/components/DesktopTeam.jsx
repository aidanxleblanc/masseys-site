import React from 'react'
import PersonBubbleBobby from '../components/team/PersonBubbleBobby'
import PersonBubbleMcCauley from '../components/team/PersonBubbleMcCauley'
import PersonBubbleCriscuolo from '../components/team/PersonBubbleCriscuolo'
import PersonBubbleRich from '../components/team/PersonBubbleRich'
import PersonBubbleEssig from '../components/team/PersonBubbleEssig'
import PersonBubbleVailette from '../components/team/PersonBubbleVailette'
import PersonBubbleDeLise from '../components/team/PersonBubbleDeLise'
import PersonBubbleJR from '../components/team/PersonBubbleJR'

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
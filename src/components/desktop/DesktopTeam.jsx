import React from 'react'

import PersonBubbleBobby from '../pages/meet_the_team/PersonBubble'
import PersonBubbleMcCauley from '../pages/meet_the_team/PersonBubbleMcCauley'
import PersonBubbleCriscuolo from '../pages/meet_the_team/PersonBubbleCriscuolo'
import PersonBubbleRich from '../pages/meet_the_team/PersonBubbleRich'
import PersonBubbleEssig from '../pages/meet_the_team/PersonBubbleEssig'
import PersonBubbleVailette from '../pages/meet_the_team/PersonBubbleVailette'
import PersonBubbleDeLise from '../pages/meet_the_team/PersonBubbleDeLise'
import PersonBubbleJR from '../pages/meet_the_team/PersonBubbleJR'

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
import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import ProjectSquare from '../components/ProjectSquare'
import IndvProjectSquare from '../components/IndvProjectSquare'
import Footer from '../components/Footer'

const IndividualProject = ({url, desc, name, city, state, year, type, arch, owner, contr}) => {
  return (
    <div className='font-display text-navy text-xl justify-center'>
        <Navbar color='navy'/>
        <PageTitle title={name}/>
        <div className='flex justify-center'>
            <div className='flex w-2/3'>
                <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/380stuart.jpeg')} />
            </div>
        </div>
        <div className='flex justify-center p-6'>
            <h1 className='font-thin text-2xl text-center w-2/3'>{desc}</h1>
        </div>
        <div className='flex'>
            <div className='w-1/2 text-right font-semi mr-1'>
                Location: <br />
                Year: <br />
                Type: <br />
                Architect: <br />
                Owner/Developer: <br />
                General Contractor: <br />
            </div>
            <div className='w-1/2 text-left ml-1'>
                {city}, {state} <br />
                {year} <br />
                {type} <br />
                {arch} <br />
                {owner} <br />
                {contr} <br />
            </div> 
        </div>
        <div className='font-semi text-3xl text-center pt-6'>
            <h1>More {state} Projects</h1>
        </div>
        <div className='flex p-6 space-x-4'>
            <IndvProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/888boylstonalt.jpeg')}
            name='888 Boylston Street' loc='Boston, MA'/>
            <IndvProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/backbaysouth.jpeg')}
            name='Back Bay South End Gateway' loc='Boston, MA'/>
            <IndvProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/bostonmed.jpeg')}
            name='Boston Medical' loc='Boston, MA'/>
            <IndvProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/budentalmed.jpeg')}
            name='Boston University School of Dental Medicine' loc='Boston, MA'/>
            <IndvProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/brighamwomens.jpeg')}
            name="Brigham & Women's Hospital" loc='Boston, MA'/>
            <IndvProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/bulfinchxing.png')}
            name='Bulfinch Crossing' loc='Boston, MA'/>
            <IndvProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/eataly.jpeg')}
            name='Eataly' loc='Boston, MA'/>
            <IndvProjectSquare imageUrl={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/fenwayphaseii.jpeg')}
            name="Fenway Center Phase II" loc='Boston, MA'/>
        </div>
        <div className='mt-4'>
            <Footer /> 
        </div>
        
    </div>
  )
}

export default IndividualProject
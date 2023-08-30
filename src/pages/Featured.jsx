import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import FeatProjLeft from '../components/FeatProjLeft'
import FeatProjRight from '../components/FeatProjRight'
import Footer from '../components/Footer'


const FeaturedProjects = () => {
  return (
    <div className='fade-in'>
        <div className='flex flex-col'>
            <Navbar color='navy'/>
            <PageTitle title='Featured Projects' />
            <FeatProjLeft 
                imageUrl='/Users/aidanleblanc/Desktop/masseys-site/src/images/888boylston.jpeg'
                name='888 Boylston Street'
                atts='Boston’s Most Sustainable Building'
                arch='FXCollaborative'
                contr='Turner Construction'
                desc='Located at Prudential Center in the heart of Boston’s 
                vibrant Back Bay neighborhood, 888 Boylston Street is a 17-story
                mixed-use building of approximately 425,000 square feet. Building
                upon a history of sustainability and green building leadership, 
                BXP held a clear vision and firm stance from the first kickoff 
                meeting: 888 Boylston Street would be Boston’s Most Sustainable Building.'
            />
            <div className='pt-8'>
                <FeatProjRight 
                    imageUrl='/Users/aidanleblanc/Desktop/masseys-site/src/images/pier4.jpg'
                    name='Pier 4'
                    atts='Certified LEED Gold'
                    arch='CBT Architects'
                    contr='Turner Construction'
                    desc='The Residences at Pier 4 is one of the most exciting residential
                    projects to come to Boston’s burgeoning Seaport District.  This art deco
                    building houses 100+ ultra luxury residential units with private outdoor
                    spaces and top of the line finishes. Building amenities include a 24 hour
                        concierge, state of the art gym, residence lounge, private dining, 
                        underground parking and exclusive, landscaped outdoor spaces.'
                />
        </div>
            <div className='pt-8'>
                <FeatProjLeft 
                    imageUrl=''
                    name='Ragon Institute 2.0'
                    atts='Mass General/MIT/Harvard'
                    arch='Payette'
                    contr='Turner Construction'
                    desc='When completed, this building will be used for
                    research of infectious diseases. The façade consists of unitized
                    curtain wall system composed of glass and formed vertical metal
                    panel fins. Podium includes wood curtain wall, aluminum doors,
                        glass doors and revolving doors.

                    '
                />
            </div>
            
            <div className='pt-8'>
                <FeatProjRight
                    imageUrl='' 
                    name='Pier 4'
                    atts='Certified LEED Gold'
                    arch='CBT Architects'
                    contr='Turner Construction'
                    desc='The Residences at Pier 4 is one of the most exciting residential
                    projects to come to Boston’s burgeoning Seaport District.  This art deco
                    building houses 100+ ultra luxury residential units with private outdoor
                    spaces and top of the line finishes. Building amenities include a 24 hour
                        concierge, state of the art gym, residence lounge, private dining, 
                        underground parking and exclusive, landscaped outdoor spaces.'
                />
            </div>
            <Footer />
        </div>
    </div>
    
  )
}

export default FeaturedProjects
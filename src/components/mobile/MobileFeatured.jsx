import React from 'react'

const MobileFeatured = () => {
  return (
    <div>
        <div className='image-container px-4 pt-8'>
            <img src={require("../../images/ragon.png")} 
            className='w-full h-full'/> 
        </div>
        <div className='flex flex-col justify-center text-navy p-4 text-center pb-8'>
                    <h1 className='font-semi text-3xl'>Ragon Institute 2.0</h1>
                    <h2 className='font-semi text-lg pt-2'>
                    Mass General/MIT/Harvard
                    <br />
                        Architect: <span className='font-regular'>Payette</span> <br />
                        Contractor: <span className='font-regular'>Consigli</span> <br /> 
                    </h2>
                    <p className='whitespace-normal pt-4'>
                    Scheduled for completion in Winter 2023-2024, the Ragon will be used for research
                     of infectious diseases. The façade consists of unitized curtain wall system composed
                      of glass and formed vertical metal panel fins. Podium includes wood curtain wall, 
                      aluminum doors, glass doors and revolving doors.
                    </p>
        </div>

        <div className="border-t border-sky-950 w-full"></div>

        <div className='image-container px-4 pt-8'>
            <img src={require("../../images/888boylstonshot.png")} 
            className='w-full h-full'/> 
        </div>

        <div className='flex flex-col justify-center text-navy p-4 text-center '>
                    <h1 className='font-semi text-3xl'>888 Boylston Street</h1>
                    <h2 className='font-semi text-lg pt-2'>
                        Boston’s Most Sustainable Building
                        Architect: <span className='font-regular'>FXCollaborative</span> <br />
                        Contractor: <span className='font-regular'>Turner Construction</span> <br /> 
                    </h2>
                    <p className='whitespace-normal pt-4'>
                        Located at Prudential Center in the heart of Boston’s 
                        vibrant Back Bay neighborhood, 888 Boylston Street is a 17-story
                        mixed-use building of approximately 425,000 square feet. Building
                        upon a history of sustainability and green building leadership, 
                        BXP held a clear vision and firm stance from the first kickoff 
                        meeting: 888 Boylston Street would be Boston’s Most Sustainable Building.
                    </p>
        </div>

        <div className="border-t border-sky-950 w-full"></div>

        <div className='image-container px-4 pt-8'>
            <img src={require("../../images/pier4nightcrop.jpeg")} 
            className='w-full h-full'/> 
        </div>
        <div className='flex flex-col justify-center text-navy p-4 text-center '>
                    <h1 className='font-semi text-3xl'>Pier 4</h1>
                    <h2 className='font-semi text-lg pt-2'>
                    Certified LEED Gold
                        Architect: <span className='font-regular'>CBT Architects</span> <br />
                        Contractor: <span className='font-regular'>Turner Construction</span> <br /> 
                    </h2>
                    <p className='whitespace-normal pt-4'>
                        The Residences at Pier 4 is one of the most exciting residential
                        projects to come to Boston’s burgeoning Seaport District.  This art deco
                        building houses 100+ ultra luxury residential units with private outdoor
                        spaces and top of the line finishes. Building amenities include a 24 hour
                        concierge, state of the art gym, residence lounge, private dining, 
                        underground parking and exclusive, landscaped outdoor spaces
                    </p>
        </div>

        <div className="border-t border-sky-950 w-full"></div>


    </div>
  )
}

export default MobileFeatured
import React from 'react'

const DesktopFeatured = () => {
  return (
    <div>
        <div className='fade-in'>
        <div className='flex flex-col'>

        <div className='flex font-display px-12 justify-center pb-8'>
                <div className='image-container w-3/5'>
                    <img src={require("../../images/ragon_new.jpg")} 
                    className='w-full h-full'/> 
                </div>
                <div className='flex flex-col justify-center text-navy p-5 w-1/3'>
                    <h1 className='font-semi text-3xl'>Ragon Institute 2.0</h1>
                    <h2 className='font-semi text-lg pt-5'>Mass General/MIT/Harvard
                        <br />
                        Architect: <span className='font-regular'>Payette</span> <br />
                        Contractor: <span className='font-regular'>Dimeo</span> <br /> 
                    </h2>
                    <p className='whitespace-normal pt-5'>
                    Scheduled for completion in Winter 2023-2024, the Ragon
                    will be used for research of infectious diseases. The façade consists of 
                     unitized curtain wall system composed of glass and formed vertical metal panel fins. 
                     Podium includes wood curtain wall, aluminum doors, glass doors and revolving doors.
                    </p>
                </div>
            </div>

            <div className='flex font-display px-12 justify-center text-right pb-8'>
                <div className='flex flex-col justify-center text-navy p-5 w-1/3'>
                    <h1 className='font-semi text-3xl'>Pier 4</h1>
                    <h2 className='font-semi text-lg pt-5'>
                    Certified LEED Gold
                        <br />
                        Architect: <span className='font-regular'>CBT Architects</span> <br />
                        Contractor: <span className='font-regular'>Turner Construction</span> <br /> 
                    </h2>
                    <p className='whitespace-normal pt-5'>
                        The Residences at Pier 4 is one of the most exciting residential
                        projects to come to Boston’s burgeoning Seaport District.  This art deco
                        building houses 100+ ultra luxury residential units with private outdoor
                        spaces and top of the line finishes. Building amenities include a 24 hour
                        concierge, state of the art gym, residence lounge, private dining, 
                        underground parking and exclusive, landscaped outdoor spaces
                    </p>
                </div>
                <div className='image-containers w-3/5'>
                    <img src={require("../../images/pier4nightcrop.jpeg")} 
                    className=''/> 
                </div>
            </div>

            <div className='flex font-display px-12 justify-center pb-8'>
                <div className='image-container w-3/5'>
                    <img src={require("../../images/888boylstonshot.png")} 
                    className='w-full h-full'/> 
                </div>
                <div className='flex flex-col justify-center text-navy p-5 w-1/3'>
                    <h1 className='font-semi text-3xl'>888 Boylston Street</h1>
                    <h2 className='font-semi text-lg pt-5'>
                        Boston’s Most Sustainable Building
                        <br />
                        Architect: <span className='font-regular'>FXCollaborative</span> <br />
                        Contractor: <span className='font-regular'>Turner Construction</span> <br /> 
                    </h2>
                    <p className='whitespace-normal pt-5'>
                        Located at Prudential Center in the heart of Boston’s 
                        vibrant Back Bay neighborhood, 888 Boylston Street is a 17-story
                        mixed-use building of approximately 425,000 square feet. Building
                        upon a history of sustainability and green building leadership, 
                        BXP held a clear vision and firm stance from the first kickoff 
                        meeting: 888 Boylston Street would be Boston’s Most Sustainable Building.
                    </p>
                </div>
            </div>

        </div>
    </div>
    
    </div>
  )
}

export default DesktopFeatured
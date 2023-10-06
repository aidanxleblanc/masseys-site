import React from 'react'

const FeatProj = ({name}) => {
  return (
    <div className='flex font-display px-12'>
        <div className='w-2/3'>
            <img src={require('../images/pier4_cropped.png')} />
        </div>
        <div className='flex flex-col justify-center text-navy p-5 w-1/3'>
            <h1 className='font-semi text-4xl'>888 Boylston Street</h1>
            <h2 className='font-semi text-xl pt-5'>
                Boston’s Most Sustainable Building <br />
                Certified LEED Platinum <br />
                Architect: <span className='font-regular'>FXCollaborative</span> <br />
                Contractor: <span className='font-regular'>Turner Construction</span> <br /> 
            </h2>
            <p className='whitespace-normal pt-5 pr-12'>
            Located at Prudential Center in the heart of Boston’s
            vibrant Back Bay neighborhood, 888 Boylston Street
            is a 17-story mixed-use building of approximately 425,000
            square feet. Building upon a history of sustainability 
            and green building leadership, BXP held a clear vision 
            and firm stance from the first kickoff meeting: 888
            Boylston Street would be Boston’s Most Sustainable Building.
            </p>
        </div>
    </div>
  )
}

export default FeatProj
import React from 'react'

const FeatProjLeft = ({imageUrl, name, atts, arch, contr, desc}) => {
  return (
    <div className='flex font-display px-12'>
        <div className='w-2/3'>
            <img src={{imageUrl}} />
        </div>
        <div className='flex flex-col justify-center text-navy p-5 w-1/3'>
            <h1 className='font-semi text-4xl'>{name}</h1>
            <h2 className='font-semi text-xl pt-5'>
                {atts}
                <br />
                Architect: <span className='font-regular'>{arch}</span> <br />
                Contractor: <span className='font-regular'>{contr}</span> <br /> 
            </h2>
            <p className='whitespace-normal pt-5'>
                {desc}
            </p>
        </div>
    </div>
  )
}

export default FeatProjLeft
import React from 'react'

const CrewBanner = () => {
  return (
    <div className='flex justify-center p-16 space-x-16'>
          <div className='flex flex-col space-x-8 space-y-4 justify-center'>
            <h1 className='font-semi text-4xl'>
              At Massey's, we care about our crew.</h1>
            <h1 className='text-xl'>
              + We provide initial and subsequent job specific training <br />
              + Benefits package includes heath benefits, 401(k), paid vacation & holidays <br />
              + Salary commensurate with experience <br />
              + We are an Affirmative Action/Equal Opportunity Employer. <br />
            </h1>
          </div>
          <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/50yrs.png')} 
             className='w-1/8 object-contain'/>
        </div>  
  )
}

export default CrewBanner
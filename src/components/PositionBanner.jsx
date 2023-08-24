import React from 'react'

const PositionBanner = () => {
  return (
    <div className='flex justify-center space-x-8'>
        <div className='w-1/2 bg-navy font-display text-white whitespace-normal'>
            <img src={require("/Users/aidanleblanc/Desktop/masseys-site/src/images/projectmanager.jpeg")} 
                className='opacity-50'/>
            <h1 className='absolute font-semi text-3xl'>Project Manager</h1>
            <h1 className='absolute text-lg whitespace-normal'>Our goal is to eliminate foreseeable hazards to maintain a safe and healthful
                work environment for all employees. The core elements of our safety program
                include management leadership, worker participation, hazard identification
                and assessment, hazard prevention and control, communication/ training, and
                program evaluation for continual improvement. Massey’s full time Safety Director
                oversees every aspect of our field and fabrication operations for our glass and panel divisions.
            </h1>  
        </div>
        <div className='w-1/5'>
            Hello
        </div>
    </div>
  )
}

export default PositionBanner
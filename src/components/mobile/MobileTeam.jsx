import React from 'react'

const MobileTeam = () => {
  return (
    <div className='flex flex-col items-center space-y-8 pb-8'>
        <div className='w-3/5'>
        <div className='flex flex-col rounded-full overflow-hidden'>
            <img src={require("../../images/bobbynew.jpg")} />
        </div>
        <div className='font-display text-navy mt-4'>
            <h1 className='text-center font-bold text-xl'>Robert J. Massey Jr.</h1>
            <h1 className='text-center text-lg'>President & CEO</h1>
        </div>
        </div>
        <div className='w-3/5'>
        <div className='flex flex-col rounded-full overflow-hidden'>
            <img src={require("../compimgs/phil.png")} />
        </div>
        <div className='font-display text-navy mt-4'>
            <h1 className='text-center font-bold text-xl'>Philip DeLise</h1>
            <h1 className='text-center text-lg'>Chief Operating Officer</h1>
        </div>
        </div>
        <div className='w-3/5'>
        <div className='flex flex-col rounded-full overflow-hidden'>
            <img src={require("../compimgs/ezold.png")} />
        </div>
        <div className='font-display text-navy mt-4'>
            <h1 className='text-center font-bold text-xl'>Rich Ezold Jr.</h1>
            <h1 className='text-center text-lg'>Chief Administrative Officer</h1>
        </div>
        </div>
        <div className='w-3/5'>
        <div className='flex flex-col rounded-full overflow-hidden'>
            <img src={require("../compimgs/criscuolo.png")} />
        </div>
        <div className='font-display text-navy mt-4'>
            <h1 className='text-center font-bold text-xl'>Joseph Criscuolo</h1>
            <h1 className='text-center text-lg'>Chief Financial Officer</h1>
        </div>
        </div>
        <div className='w-3/5'>
        <div className='flex flex-col rounded-full overflow-hidden'>
            <img src={require("../compimgs/essigss.png")} />
        </div>
        <div className='font-display text-navy mt-4'>
            <h1 className='text-center font-bold text-xl'>Don Essig Jr.</h1>
            <h1 className='text-center text-lg'>Vice President of Operations</h1>
        </div>

        </div>
        <div className='w-3/5'>
        <div className='flex flex-col rounded-full overflow-hidden'>
            <img src={require("../compimgs/vailettenew.jpg")} />
        </div>
        <div className='font-display text-navy '>
            <h1 className='text-center font-bold text-xl'>Chris Vailette Jr.</h1>
            <h1 className='text-center text-lg'>Vice President of Pre-Construction</h1>
        </div>
        </div>
        <div className='w-3/5'>
        <div className='flex flex-col rounded-full overflow-hidden'>
            <img src={require("../compimgs/jr.png")} />
        </div>
        <div className='font-display text-navy mt-4'>
            <h1 className='text-center font-bold text-xl'>J.R. LaFrancois</h1>
            <h1 className='text-center text-lg'>Vice President of Metal Panels</h1>
        </div>
        </div>
        <div className='w-3/5'>
        <div className='flex flex-col rounded-full overflow-hidden'>
            <img src={require("../compimgs/jason.png")} />
        </div>
        <div className='font-display text-navy mt-4'>
            <h1 className='text-center font-bold text-xl'>Jason McCauley</h1>
            <h1 className='text-center text-lg'>Director of Field Operations</h1>
        </div>
        </div>
    </div>
  )
}

export default MobileTeam
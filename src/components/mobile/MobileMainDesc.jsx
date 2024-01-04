import React from 'react'

const MobileMainDesc = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='inset-5 pt-6 px-4'>
            <img src={require('../../images/massmutual_home.jpg')}/> 
          </div>
          <div className='w-1/3 pt-4 items-center'>
            <img src={require('../../images/50yrs.png')}/> 
        </div>
    <h1 className='font-display relative text-center text-xl p-6 text-navy'>
    Visionaries since 1973. At Massey's, our legacy speaks for itself. We've
        been the cornerstone of architectural innovation for over five decades.
        <br></br>
        <br></br>
        We're not just industry leaders; we're pioneers, collaborating with the
        foremost manufacturers in glazing materials and cutting-edge
        installation techniques. Our dedication to excellence transcends
        craftsmanship; it's a commitment to shaping the future of architectural
        possibilities.
        <br></br>
        <br></br>
        We foster an inclusive environment, championing equal opportunities for
        all, irrespective of race, gender, or ability. At Massey's, diversity
        fuels our success.
        <br></br>
        <br></br>
        Rooted in a proud heritage and propelled by unwavering confidence,
        Massey's invites you to build with confidence.
    </h1>
      
    </div>
  )
}

export default MobileMainDesc
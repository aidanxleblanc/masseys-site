import React from 'react'

const MobileMainDesc = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='inset-5 pt-6 px-4'>
            <img src={require('../../images/101college.jpeg')}/> 
          </div>
    <h1 className='font-display relative text-center text-xl p-6 text-navy'>Since 1973, Massey’s has provided architectural glass 
              and aluminum products, specialized craftsmanship and 
              glazing project management to a long list of the nation’s 
              most successful contractors, architects, and developers. 
              <br></br>
              <br></br>
              We represent the leading edge of the architectural curtain
              wall and window wall industry. We maintain this position by 
              working closely with the premier manufacturers of glazing 
              materials, framing systems, and installation technologies. 
              As an affirmative action & equal opportunity employer, Massey’s 
              offers the same opportunities to all employees, regardless of 
              race, gender, or disability. 
              <br></br>
              <br></br>
              Learn more about Who We Are and What We Do by following the links
              at the top of the page - see for yourself what makes Massey's
              special.
              <br></br>
              <br></br>
              We are proud of our past and confident of our future. You 
              can build on our experience and build with confidence.</h1>
      <div className='w-1/3 pb-6 items-center'>
            <img src={require('../../images/50yrs.png')}/> 
        </div>
    </div>
  )
}

export default MobileMainDesc
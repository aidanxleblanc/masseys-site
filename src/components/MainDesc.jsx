import React from 'react'

const MainDesc = () => {
  return (
    <div className='flex flex-col justify- pt-10 items-center space-y-4 font-display text-[#39516D]'>
        <h1 className='text-5xl text-right'>Build on our experience.</h1>
        <h1 className='text-5xl text-right'>Build with confidence.</h1>
        <h1 className='font-display text-center text-2xl p-6'>Since 1973, Massey’s has provided architectural glass 
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
            on the left side of the page - see for yourself what makes Massey's
            like no other.
            <br></br>
            <br></br>
            We are proud of our past and confident of our future. You 
            can build on our experience and build with confidence.</h1>
            <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/50yrs.png')} 
             className='w-1/4 object-contain'/>
    </div>
  )
}

export default MainDesc
import React from 'react'

const MainDesc = () => {
  return (
    <div className='flex flex-col items-center space-y-12 justify-center h-screen text-center font-display text-[#39516D]'>
        <h1 className='p-4 text-4xl text-center'>Build on our experience and build with confidence.</h1>
        <h1 className='font-display text-xl'>Since 1973, Massey’s has provided architectural glass 
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
            We are proud of our past and confident of our future. You 
            can build on our experience and build with confidence.</h1>
            <img src={require('/Users/aidanleblanc/Desktop/masseys-site/src/images/50yrs.png')} 
             className='w-40 object-contain'/>
    </div>
  )
}

export default MainDesc
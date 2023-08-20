import React from 'react'
import '/Users/aidanleblanc/Desktop/masseys-site/src/styles.css'

const FloatText = () => {
  return (
    <div className="absolute top-1/3 left-0 transform -translate-y-1/2 font-display font-semi"
      style={{opacity: 0, animation:'fadeInFromLeft 1s ease-in forwards'}}>
          <h1 className="pl-28 text-4xl font-bold text-white">
          Transforming <span className='text-gold'>architects’ <br /> vision </span> 
            into the future <br />
            of <span className='text-gold'>eco-sustainable <br /></span>
            building facades.</h1>
    </div>
  )
}

export default FloatText
import React from 'react'
import '../../../styles.css'

const FloatText = () => {
  return (
    <div className="w-full text-center transform -translate-y-1/2 font-display font-semi flex-wrap"
      style={{opacity: 0, animation:'fadeInFromLeft 1s ease-in forwards'}}>
          <h1 className="text-4xl font-bold text-white">
          Transforming <span className='text-gold'>architectural vision </span> <br />
            into the future
            of <span className='text-gold'>eco-sustainable </span> <br />
            building facades.</h1>
    </div>
  )
}

export default FloatText
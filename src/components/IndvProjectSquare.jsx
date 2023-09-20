import React from 'react';


const IndvProjectSquare = ({imageUrl, name, loc}) => {

  return (
      <div className='flex flex-col justify-end w-1/4 aspect-square bg-cover bg-center'
        style= {{ backgroundImage: `url(${imageUrl})` }}>
        <div className='flex h-1/3 text-center justify-center items-center font-display text-white bg-dknavy bg-opacity-70'>
          <a href={`/${name.toLowerCase().replace(/ /g, '-')}`}>
            <span className='font-semi text-base'>{name} </span>
            </a>
        </div>
      </div>
  )
}

export default IndvProjectSquare
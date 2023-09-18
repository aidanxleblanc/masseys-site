import React from 'react';


const ProjectSquare = ({imageUrl, name, loc}) => {

  return (
      <div className='flex flex-col justify-end w-1/4 aspect-square bg-cover bg-center'
        style= {{ backgroundImage: `url(${imageUrl})` }}>
        <div className='flex h-1/4 text-center justify-center items-center font-display text-white bg-dknavy bg-opacity-70'>
          <a href={`/${name.toLowerCase().replace(/ /g, '-')}`}>
            <span className='font-semi text-3xl'>{name} </span><br />
            <span className='italic text-xl'>{loc}</span>
            </a>
        </div>
      </div>
  )
}

export default ProjectSquare
import React from 'react'

const ProjectSquare = ({url}) => {
  return (
    <div>
        <img src={require({url})} />
    </div>
  )
}

export default ProjectSquare
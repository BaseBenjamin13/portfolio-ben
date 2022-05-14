import React from 'react'

function Project({ projectTitle, projectDes }) {
  return (
    <div>

        <div className="project">
            <h1>{projectTitle}</h1>
        </div>
        <p className="project-description">{projectDes}</p>

    </div>
  )
}

export default Project
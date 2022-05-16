import React from 'react'
import './Home.css'


function Project({ i, projects, setProjects, projectTitle, projectDes, show }) {

    const handleMouseEnter = (e) => {
        const projectCopy = [...projects]
        projectCopy[i].show = true
        setProjects(projectCopy)
        // console.log(projectCopy);
    }

    const handleMouseLeave = (e) => {
        const projectCopy = [...projects]
        projectCopy[i].show = false
        setProjects(projectCopy)
        // console.log(projectCopy);
    }



  return (
    <div className="project-container">

        <div className="project" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h1>{projectTitle}</h1>
        </div>
        { show && <p className="project-description">{projectDes}</p> }

    </div>
  )
}

export default Project
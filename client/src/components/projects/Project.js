import React from 'react'
import '../../assets/css/Home.css';


function Project({ i, projects, setProjects, projectTitle, 
    projectDes, projectBulls, projectImg, projectLink, show }) {

    const handleMouseEnter = (e) => {
        const projectCopy = [...projects]
        projectCopy[i].show = true
        setProjects(projectCopy)
    }

    const handleMouseLeave = (e) => {
        const projectCopy = [...projects]
        projectCopy[i].show = false
        setProjects(projectCopy)
    }

    let className

  return (
    <div className="project-container" >
        <a href={projectLink} target="_blank" className="dis-a-tag"> 
            <h1 className="project-title">{projectTitle}</h1>
        </a>
     

        <a href={projectLink} className="project-a" target="_blank">
            <div className="project" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img className="project-img" src={projectImg} />
            </div>
        </a>
        
     
        <div className={`${show ? 'project-description' : 'hide-project-description'}`}>
            <p>{projectDes}</p>
            <ul>
                {projectBulls.map((bull, i) => {
                    return <li key={i} className="bulls">{bull}</li>
                })}
            </ul>
        </div>
        
    </div>
  )
}

export default Project
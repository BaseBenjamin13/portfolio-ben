import React from 'react'
import '../../assets/css/Home.css';


function Project({ i, projects, setProjects, projectTitle, 
    projectDes, projectBulls, projectImg, projectLink, show }) {

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
    <div className="project-container" >
        <a href={projectLink} target="_blank" className="dis-a-tag"> 
            <h1 className="project-title">{projectTitle}</h1>
        </a>
     

        <a href={projectLink} className="project-a" target="_blank">
            <div className="project" style={{backgroundImage: `url(${projectImg})`}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
        </a>
        
        { show && 
        <div className="project-description">
            <p>{projectDes}</p>
            <ul>
                {projectBulls.map(bull => {
                    return <li className="bulls">{bull}</li>
                })}
            </ul>
        </div>
        }
    </div>
  )
}

export default Project
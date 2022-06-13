import React from 'react'
import '../../assets/css/Home.css';


function Project({ i, projects, setProjects, projectTitle, 
    projectDes, projectBulls, projectImg, show }) {

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

        <div className="project" style={{backgroundImage: `url(${projectImg})`}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h1>{projectTitle}</h1>
            {/* <img className="project-img" src={projectImg}></img> */}
        </div>
        { show && 
        <div className="project-description">
            <p>{projectDes}</p>
            <ul>
                {projectBulls.map(bull => {
                    return <li>{bull}</li>
                })}
            </ul>
        </div>
        }
    </div>
  )
}

export default Project
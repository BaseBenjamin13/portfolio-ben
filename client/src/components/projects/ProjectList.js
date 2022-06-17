import React, { useState } from 'react'
import Project from './Project'
import ProjectData from '../../assets/ProjectsData'
// import './Home.css'


function ProjectList() {


    const [projects, setProjects] = useState(ProjectData)

    
  return (
    <div className="project-list">
        
        {
            projects.map((project, i) => {
                return (
                    <Project
                        key={i}
                        i={i}
                        projects={projects}
                        setProjects={setProjects}
                        projectTitle={project.title}
                        projectDes={project.des}
                        projectBulls={project.bulls}
                        projectImg={project.img}
                        projectLink={project.link}
                        show={project.show}
                    />
                )
            })
        }


    </div>
  )
}

export default ProjectList
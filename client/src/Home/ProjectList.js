import React, { useState } from 'react'
import Project from './Project'


function ProjectList() {

    const [projects, setProjects] = useState([
        {
            title: 'BlackJack',
            des: 'yoyoyoyoy des'
        },
        {
            title: 'port',
            des: 'yoyoyoyoy des'
        },
        {
            title: 'star wars social',
            des: 'yoyoyoyoy des'
        },
        {
            title: 'snake game',
            des: 'yoyoyoyoy des'
        }
    ])
    // map through projects description, sending des para to page 

  return (
    <div className="project-list">
        
        {
            projects.map((project) => {
                return (
                    <Project
                        projectTitle={project.title}
                        projectDes={project.des}
                    />
                )
            })
        }

        {/* <div className="project" >
            <h1>Project 2</h1>
        </div>
         <p className="project-description">This project is Shownededned</p> 

        <div className="project">
            <h1>Project 3</h1>
        </div>
        <p className="project-description">This project is Shownededned</p> 

        <div className="project">
            <h1>Project 4</h1>
        </div>
        <p className="project-description">This project is Shownededned</p> */}

    </div>
  )
}

export default ProjectList
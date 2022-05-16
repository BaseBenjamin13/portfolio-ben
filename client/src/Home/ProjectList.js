import React, { useState } from 'react'
import Project from './Project'
import './Home.css'


function ProjectList() {

    const [projects, setProjects] = useState([
        {
            title: 'BlackJack',
            des: 'yoyoyoyoy des',
            show: false
        },
        {
            title: 'port',
            des: 'yoyoyoyoy des',
            show: false
        },
        {
            title: 'star wars social',
            des: 'yoyoyoyoy des',
            show: false
        },
        {
            title: 'snake game',
            des: 'yoyoyoyoy des',
            show: false
        }
    ])

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
                        show={project.show}
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
import React, { useState } from 'react'
import Project from './Project'
// import './Home.css'


function ProjectList() {

    const [projects, setProjects] = useState([
        {
            title: 'BlackJack',
            des: 'BlackJack is a card game. The goal of blackjack is to get 21 but if you over 21 you lose, you can win by getting closer to 21 then the dealer.',
            bulls: [
                'Utilized Javascript for the logic behind the game and dom manipulation to have live feedback, made in 2 weeks.',
                'Created Black Jack with a desktop first approach and styled using Styled-Components and CSS3 with flexbox layouts.'
            ],
            img: 'https://i.imgur.com/WADvHYc.jpg',
            show: false
        },
        {
            title: 'star wars social',
            des: 'BlackJack is a card game. The goal of blackjack is to get 21 but if you over 21 you lose, you can win by getting closer to 21 then the dealer.',
            bulls: [
                'Utilized Javascript for the logic behind the game and dom manipulation to have live feedback, made in 2 weeks.',
                'Created Black Jack with a desktop first approach and styled using Styled-Components and CSS3 with flexbox layouts.'
            ],
            img: 'https://i.imgur.com/WADvHYc.jpg',
            show: false
        },
        {
            title: 'snake game',
            des: 'BlackJack is a card game. The goal of blackjack is to get 21 but if you over 21 you lose, you can win by getting closer to 21 then the dealer.',
            bulls: [
                'Utilized Javascript for the logic behind the game and dom manipulation to have live feedback, made in 2 weeks.',
                'Created Black Jack with a desktop first approach and styled using Styled-Components and CSS3 with flexbox layouts.'
            ],
            img: 'https://i.imgur.com/WADvHYc.jpg',
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
                        projectBulls={project.bulls}
                        projectImg={project.img}
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
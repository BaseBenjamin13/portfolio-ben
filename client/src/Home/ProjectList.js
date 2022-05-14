import React, { useState } from 'react'

function ProjectList() {

    const [showDes, setShowDes] = useState(false);

    const mouseOver = () => { 
        setShowDes(true);
    }
    const mouseLeave = () => { 
        setShowDes(false);
    }

  return (
    <div className="project-list">
        
        <div className="project" onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
            <h1>Project 1</h1>
        </div>
        {showDes ? <p className="project-description">This project is Shownededned</p> : ''}

        <div className="project" onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
            <h1>Project 2</h1>
        </div>
        {showDes ? <p className="project-description">This project is Shownededned</p> : ''}

        <div className="project" onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
            <h1>Project 3</h1>
        </div>
        {showDes ? <p className="project-description">This project is Shownededned</p> : ''}

        <div className="project" onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
            <h1>Project 4</h1>
        </div>
        {showDes ? <p className="project-description">This project is Shownededned</p> : ''}

    </div>
  )
}

export default ProjectList
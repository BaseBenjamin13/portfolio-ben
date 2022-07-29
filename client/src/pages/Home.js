import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header'; 
import ProjectList from '../components/projects/ProjectList';


function Home() {
  return (
    <div className="home">
        <Header />
        <div className="headerItem">    
            <Link className="nav-link" to="/about">
                <button className="btn-header-about">About Me</button>
            </Link>
        </div>
        <Link to="/"><button className="back-btn">Back</button></Link>

        <ProjectList />
    </div>
  )
}

export default Home
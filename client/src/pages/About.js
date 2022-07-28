import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; 

function About() {
  return (
    <div className="home">
        <Header />
        <div className="headerItem">    
            <Link to="/home">
                <button className="btn-header-project">Home</button>
            </Link>
        </div>
        <h1>About Me</h1>

    </div>
  )
}

export default About
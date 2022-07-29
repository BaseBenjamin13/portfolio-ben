import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header'; 
import BrandStatement from '../components/BrandStatement';

function About() {
  return (
    <div className="about">
        <Header />
        <div className="headerItem">    
            <Link className="nav-link" to="/home">
                <button className="btn-header-home">Home</button>
            </Link>
        </div>
        <h1>About Me</h1>

        <BrandStatement />

    </div>
  )
}

export default About
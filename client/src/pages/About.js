import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header'; 
import BrandStatement from '../components/aboutme/BrandStatement';
import LangsAndDatabases from '../components/aboutme/LangsAndDatabases';
import FrameWorks from '../components/aboutme/FrameWorks';

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

        <LangsAndDatabases />

        <FrameWorks />

    </div>
  )
}

export default About
import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header'; 
import ProjectList from '../components/projects/ProjectList';


function Home() {
  return (
    <div className="home">
        <Header username={"Benj"}/>
        <Link to="/"><button className="back-btn">Back</button></Link>

        <ProjectList />
    </div>
  )
}

export default Home
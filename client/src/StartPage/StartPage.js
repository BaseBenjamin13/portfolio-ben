import React from 'react';
import { Link } from 'react-router-dom'
import './StartPage.css';


function StartPage() {
  return (
    <div className="start-page">
        {/* Link is better then a href because it dosent send unneeded request to server, 
        it just loads the html, making it load faster. */}
		<div className="div-mywork">
        <h1 className="welcome">Welcome To Ben's Portfolio</h1> 
			<Link to='/home' ><button className="work-btn">My Work</button></Link>
		</div>
    
	</div>
  )
}

export default StartPage;
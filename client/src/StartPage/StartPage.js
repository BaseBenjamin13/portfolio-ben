import React from 'react';
import { Link } from 'react-router-dom'


function StartPage() {
  return (
    <div>
        <h1>Welcome To Ben's</h1> 
        
                {/* Link is better then a href because it dosent send unneeded request to server, 
                it just loads the html, making it load faster. */}
            <Link to='/home' ><button>My Work</button></Link>
    </div>
  )
}

export default StartPage;
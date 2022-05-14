import React from 'react'


function Header(header) {
  return (
    <div className="header">
        {/* <h1>Header</h1> */}
        {/* <h1>Current username { header.username }</h1> */}

        <div className="headerItem">
            <button className="btn-header-project">Project 1</button>
        </div>
        <div className="headerItem">
            <h1>Welcome To My Portfolio</h1>
            <p>Made By</p>
            <p>Including all projects</p>
            <h2>Benjamin Morgiewicz</h2>
        </div>
        <div className="headerItem">
            <button className="btn-header-project">Project 1</button>
        </div>

    </div>
  )
}

export default Header
import React from 'react'


function Header(header) {
  return (
    <div className="header">
        {/* <h1>Header</h1> */}
        {/* <h1>Current username { header.username }</h1> */}

        <div className="headerItem">
            <a href="https://github.com/BaseBenjamin13" target="_blank">
                <button className="btn-header-project">Github</button>
            </a>
        </div>
        <div className="headerItem">
            <h1>Welcome To My Portfolio</h1>
            <p>Made By</p>
            <p>Including all projects</p>
            <h2>Benjamin Morgiewicz</h2>
        </div>
        <div className="headerItem">
            <a href="https://www.linkedin.com/in/benjamin-morgiewicz/" target="_blank">
                <button className="btn-header-project">Linkedin</button>
            </a>
        </div>

    </div>
  )
}

export default Header
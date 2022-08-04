import React from 'react'


function Header() {
    
  return (
    <div className="header">
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
            <a className="email-me"href="mailto:benmorgiewicz@gmail.com">Email Me</a>
            <a className="call-me"href="tel:845-248-9919">Call Me</a>
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
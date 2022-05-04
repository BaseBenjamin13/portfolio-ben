import React from 'react'
// import css from './App.css'

function Header(header) {
  return (
    <div className="header">
        <h1>Header</h1>
        <h1>Current username { header.username }</h1>
    </div>
  )
}

export default Header
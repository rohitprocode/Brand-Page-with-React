import React from 'react'
import './Navigation.css'
function Navigation() {
  return (
    <div>
        <nav>
            <div className="logo">
                <img src=".\images\brand_logo.png" alt="logo-image" />
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <button className="login-btn" >Login</button>
        </nav>
    </div>
  )
}

export default Navigation

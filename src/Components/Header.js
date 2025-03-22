import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Header.css"

function Header(props) {
  const location = useLocation()

  return (
    <header className="header flex items-center justify-between sticky top-0 z-50 px-6 py-3">
      <div className="logo-container">
        <Link to="/" className="link">
          <div className="logo text-white text-4xl font-extrabold drop-shadow-lg">P</div>
        </Link>
      </div>
      
      <nav className="menu flex gap-8">
        {(location.pathname === "/" || location.pathname === "/about") && (
          <Link to="/resumebuild" className="link">
            <div className="menu-item text-white font-semibold text-xl hover:text-red-400 transition-all duration-300">
              Start
            </div>
          </Link>
        )}

        {location.pathname === "/" && (
          <div 
            onClick={() => props.handleclick()} 
            className="menu-item text-white font-semibold text-xl cursor-pointer hover:text-red-400 transition-all duration-300"
          >
            Contact
          </div>
        )}

        <Link to="/about" className="link">
          <div className="menu-item text-white font-semibold text-xl hover:text-red-400 transition-all duration-300">
            About
          </div>
        </Link>
      </nav>
    </header>
  )
}

export default Header

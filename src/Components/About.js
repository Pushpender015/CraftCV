import React from 'react'
import "./About.css"

function About() {
  return (
    <>
      <div className='about-head'>About</div>
      <div className='about'>
        This is react resume builder made by Pushpender Singh for learning purpose. This project is made by using complete React.js with popular
        react packages like react-redux, redux-persist, react-hook-form, react-router-dom, react-icons
        and Nhost services like Postgres Database, GraphQl API and Storage has been used.

        <a className={"mt-2 anchor-link"} href={"https://github.com/Pushpender015/CraftCV"} target="_blank" rel="noopener noreferrer">Star our Github Repo</a>
      </div>
    </>
  )
}

export default About

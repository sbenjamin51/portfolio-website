import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import pokeball from '../../assets/home-icon.png'
import aboutmeicon from '../../assets/about-me-icon.png'
import contact from '../../assets/contact-icon.png'
import picon from '../../assets/projects-icon.png'


const Navbar = () => {
  return (
    <nav>
        <div className='nav-left'>
          <Link to="/" className="btn-home"><img src={pokeball} alt="pokeball" />Simon Benjamin</Link>
        </div>

        <div className='nav-right'>
            <Link to="/aboutme" className="btn"><img src={aboutmeicon} alt="aboutmeicon" />About Me</Link>
          <Link to="/projects" className='btn'><img src={picon} alt="picon" />Projects</Link>
          <Link to="/contactme" className='btn'><img src={contact} alt="contacticon" />Contact Me</Link>
        </div>
    </nav>
  )
}

export default Navbar


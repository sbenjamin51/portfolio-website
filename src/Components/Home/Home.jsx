import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import headshot from '../../assets/headshot.JPG'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="hero-text">
          <h2 className="intro fade-in">Hi! My name is</h2>
          <h1 className="title fade-in delay-2">Simon Benjamin</h1>
          <p className="fade-in delay-4">
            Computer Science student specializing in full-stack web development
            focused on building clean, responsive, and user-friendly applications
            with React, Java, and Python.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="projects-btn fade-in delay-5">
              View Projects
            </Link>
            <Link to="/aboutme" className="about-me-btn fade-in delay-6">
              About Me
            </Link>
            <a href="/finalResume.pdf" download className="cv-btn fade-in delay-7">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image fade-in delay-3">
          <img src={headshot} alt="profile" />
        </div>
      </section>
    </div>
  )
}

export default Home

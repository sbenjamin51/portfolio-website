import React from 'react'
import './AboutMe.css'
import Navbar from '../Navbar/Navbar'
import selfpic from '../../assets/aboutme-page-pic.JPG'
import java from '../../assets/java-icon.png'
import python from '../../assets/python-icon.png'
import sql from '../../assets/sql-icon.png'
import javascript from '../../assets/javascript-icon.png'



const AboutMe = () => {
  return (
    <div>
        <Navbar/>
          <section className='about'>
          <div className='pic-text'>
          <div className='pic-container'>
            <img src={selfpic} alt="profile" />
          </div>
              <div className='about-text1'>
                  <h3 className='introduction'> building clean, responsive <br/>
                   applications and solving <br/> real-world problems using code.</h3>
              </div>
          
          </div>

          <div className='intro-paragraph'>
            <p className='paragraph1'>I’m a Computer Science student at Xavier University with a strong interest <br/>
            in building responsive and user-friendly web applications. I enjoy working <br />
            across the full stack, using technologies like React, JavaScript, and <br />
            Python to create meaningful digital experiences.</p>

            <p className='paragraph2'>I’ve developed both web and mobile applications, focusing on creating <br />
             intuitive user interfaces and scalable backend systems.</p>

            <p className='paragraph3'>One of my key projects includes a full-stack golf tracking web <br />
            application where users can securely log in and manage golf course <br />
            data through RESTful APIs. I also developed an iOS admissions app <br />
            for Xavier University that helps prospective students explore campus<br />
            buildings and resources through a structured and interactive interface.</p>

            <p className='paragraph4'>Through my projects and experience, I’ve built a strong foundation in API <br />
            development, database integration, and application architecture. I also <br />
            bring strong teamwork, communication, and problem-solving skills <br />
            developed through both technical work and fast-paced work environments.</p>

          </div>

          <div className='skills'>
            <h2 className='skills-title'>Skills</h2>
            <h3 className='languages-title'>Languages</h3>
            <div className='languages'>
              <div className='icon-container'><img src={javascript} alt="javascript-icon" /></div>
              <div className='icon-container'><img src={sql} alt="sql-icon" /></div>
              <div className='icon-container'><img src={python} alt="python-icon" /></div>
              <div className='icon-container'><img src={java} alt="java-icon" /></div>
            </div>
          </div>
          </section>
    </div>
  )
}

export default AboutMe
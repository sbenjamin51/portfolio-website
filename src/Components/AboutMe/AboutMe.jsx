import React from 'react'
import './AboutMe.css'
import Navbar from '../Navbar/Navbar'
import selfpic from '../../assets/aboutme-page-pic.JPG'
import rayquaza from '../../assets/rayquaza-pic.png'
import java from '../../assets/java-icon.png'
import python from '../../assets/python-icon.png'
import sql from '../../assets/sql-icon.png'
import javascript from '../../assets/javascript-icon.png'
import react from '../../assets/react-icon.png'
import html from '../../assets/html-icon.png'
import css from '../../assets/css-icon.png'
import postgresql from '../../assets/postgresql-icon.png'
import mysql from '../../assets/mysql-icon.png'
import git from '../../assets/git-icon.png'
import github from '../../assets/github-icon.png'
import vscode from '../../assets/vscode-icon.png'
import xcode from '../../assets/xcode-icon.png'
import figma from '../../assets/figma-icon.png'
import intellij from '../../assets/intellij-icon.png'

const languageIcons = [
  { src: javascript, alt: 'JavaScript icon', label: 'JavaScript' },
  { src: sql, alt: 'SQL icon', label: 'SQL' },
  { src: python, alt: 'Python icon', label: 'Python' },
  { src: java, alt: 'Java icon', label: 'Java' },
]

const frontendIcons = [
  { src: react, alt: 'React icon', label: 'React.js' },
  { src: html, alt: 'HTML icon', label: 'HTML' },
  { src: css, alt: 'CSS icon', label: 'CSS' },
]

const backendIcons = [
  { src: postgresql, alt: 'PostgreSQL icon', label: 'PostgreSQL' },
  { src: mysql, alt: 'MySQL icon', label: 'MySQL' },
]

const toolIcons1 = [
  { src: git, alt: 'Git icon', label: 'Git' },
  { src: github, alt: 'GitHub icon', label: 'GitHub' },
  { src: vscode, alt: 'VSCode icon', label: 'VSCode' },
]

const toolIcons2 = [
  { src: xcode, alt: 'Xcode icon', label: 'Xcode' },
  { src: figma, alt: 'Figma icon', label: 'Figma' },
  { src: intellij, alt: 'IntelliJ icon', label: 'IntelliJ' },
]



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
                  <h3 className='introduction'> Building clean, responsive <br/>
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
            <h3 className='languages-title'>Languages</h3>
            <div className='languages'>
              {languageIcons.map((icon) => (
                <div className='icon-container' key={icon.alt}>
                  <img src={icon.src} alt={icon.alt} />
                  <span className='icon-tooltip'>{icon.label}</span>
                </div>
              ))}
            </div>

            <h3 className='frontend-title'>Frontend</h3>
            <div className='frontend'>
              {frontendIcons.map((icon) => (
                <div className='icon-container' key={icon.alt}>
                  <img src={icon.src} alt={icon.alt} />
                  <span className='icon-tooltip'>{icon.label}</span>
                </div>
              ))}
            </div>

            <h3 className='backend-title'>Backend</h3>
            <div className='backend'>
              {backendIcons.map((icon) => (
                <div className='icon-container' key={icon.alt}>
                  <img src={icon.src} alt={icon.alt} />
                  <span className='icon-tooltip'>{icon.label}</span>
                </div>
              ))}
            </div>

         

            <h3 className='tools-title'>Tools</h3>
            <div className='tools1'>
              {toolIcons1.map((icon) => (
                <div className='icon-container' key={icon.alt}>
                  <img src={icon.src} alt={icon.alt} />
                  <span className='icon-tooltip'>{icon.label}</span>
                </div>
              ))}
            </div>
            <div className='tools2'>
              {toolIcons2.map((icon) => (
                <div className='icon-container' key={icon.alt}>
                  <img src={icon.src} alt={icon.alt} />
                  <span className='icon-tooltip'>{icon.label}</span>
                </div>
              ))}
            </div>

           </div>

           <div className='pic-text'>
            <div className='hobbies-container'>
              <img src={rayquaza} alt="rayquaza-pic" className='rayquaza-pic' />
            </div>
            <h3 className='hobbies-p'>When I'm not immersed in my school work, I enjoy watching and playing <br />
            sports, especially soccer, hanging out with friends, and playing <br />
            video games such as Pokemon and MLB The Show.</h3>
           </div>
          </section>
    </div>
  )
}

export default AboutMe

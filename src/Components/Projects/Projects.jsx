import React from 'react'
import './Projects.css'
import Navbar from '../Navbar/Navbar'

const projects = [
  {
    title: 'Capstone Golf App',
    subtitle: 'Full-stack golf tracking web application',
    description:
      'A capstone project focused on secure login, golf course management, and round tracking through a full-stack web experience backed by RESTful APIs and a relational database.',
    stack: ['React', 'JavaScript', 'Node.js', 'REST APIs', 'SQL'],
    githubUrl: 'https://github.com/grayt9/Capstone-golf-app',
    ctaLabel: 'View Code',
  },
  {
    title: 'Admissions iOS',
    subtitle: 'Interactive campus admissions mobile app',
    description:
      'An iOS application built to help prospective Xavier students explore campus buildings, routes, and resources through a structured mobile interface.',
    stack: ['Swift', 'SwiftUI', 'Xcode', 'iOS'],
    githubUrl: 'https://github.com/cs261f24/iOSAdmission',
    ctaLabel: 'View Code',
  },
]

const Projects = () => {
  return (
    <div>
      <Navbar />
      <section className="projects-page">
        <div className="projects-hero">
          <p className="projects-eyebrow">Featured Work</p>
          <h1 className="projects-title">Projects that show how I build.</h1>
          <p className="projects-intro">
            These projects reflect the kind of work I enjoy most: building useful,
            responsive applications with clean UI, solid backend structure, and a
            focus on real users.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-top">
                <p className="project-subtitle">{project.subtitle}</p>
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-stack" aria-label={`${project.title} tech stack`}>
                {project.stack.map((item) => (
                  <span className="stack-pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link primary"
                >
                  {project.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects

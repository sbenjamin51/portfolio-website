import React from 'react'
import './ContactMe.css'
import Navbar from '../Navbar/Navbar'

const contactLinks = [
  {
    label: 'Email',
    value: 'benjamins@xavier.edu',
    href: 'mailto:benjamins@xavier.edu',
  },
  {
    label: 'Phone',
    value: '(301) 655-0935',
    href: 'tel:13016550935',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sbenjamin51',
    href: 'https://linkedin.com/in/sbenjamin51',
  },
  {
    label: 'GitHub',
    value: 'github.com/sbenjamin51',
    href: 'https://github.com/sbenjamin51',
  },
  {
    label: 'LeetCode',
    value: 'leetcode.com/u/sbenjamin51',
    href: 'https://leetcode.com/u/sbenjamin51/',
  },
]

const ContactMe = () => {
  return (
    <div>
      <Navbar />
      <section className="contact-page">
        <div className="contact-hero">
          <p className="contact-eyebrow">Let&apos;s Connect</p>
          <h1 className="contact-title">Contact me for internships, projects, or collaboration.</h1>
          <p className="contact-intro">
            I&apos;m always open to opportunities where I can keep growing as a
            developer, contribute to meaningful work, and build strong products
            with a team.
          </p>

          <div className="contact-actions">
            <a className="contact-button primary" href="mailto:benjamins@xavier.edu">
              Send Email
            </a>
            <a className="contact-button secondary" href="/finalResume.pdf" download>
              Download Resume
            </a>
          </div>
        </div>

        <div className="contact-grid">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              className="contact-card"
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <p className="contact-card-label">{item.label}</p>
              <h2>{item.value}</h2>
              <span className="contact-card-link">Open link</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ContactMe

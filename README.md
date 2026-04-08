# Simon Benjamin Portfolio

A personal portfolio website built with React and Vite to showcase Simon Benjamin's background, featured projects, technical skills, and contact information.

## Overview

This project is a multi-page portfolio application that uses `react-router-dom` for client-side routing. Each section of the site is split into its own component so the content and styling for each page stay easy to manage.

## Tech Stack

- React
- Vite
- React Router
- CSS

## Pages

- `/` - Landing page with introduction, headshot, and resume download
- `/aboutme` - Biography, experience summary, and technology icons
- `/projects` - Featured project cards with GitHub links
- `/skills` - Reserved for a future dedicated skills page
- `/contactme` - Contact methods and resume download

## Project Structure

```text
src/
  App.jsx                    Application routes and shared layout wrapper
  main.jsx                   React entry point
  index.css                  Global styles
  assets/                    Images and icons used across the portfolio
  Components/
    Background/              Shared background wrapper
    Navbar/                  Top navigation used across pages
    Home/                    Landing page content
    AboutMe/                 About page and technology highlights
    Projects/                Featured project cards
    Skills/                  Placeholder route for future content
    ContactMe/               Contact page and external links
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run lint checks

```bash
npm run lint
```

## Content Updates

Most portfolio content lives directly inside the page components:

- Update hero text in `src/Components/Home/Home.jsx`
- Update biography and skill icon groups in `src/Components/AboutMe/AboutMe.jsx`
- Update featured projects in `src/Components/Projects/Projects.jsx`
- Update contact information in `src/Components/ContactMe/ContactMe.jsx`

Static files such as profile photos, icons, and the resume PDF live in `src/assets` and `public`.

## Notes

- The `Skills` route currently exists as a placeholder and only renders the shared navigation.
- The `Background` component wraps the routed pages so the app keeps a consistent visual backdrop.

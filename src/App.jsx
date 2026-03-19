import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home";
import Background from './Components/Background/Background'
import AboutMe from './Components/AboutMe/AboutMe'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills';
import ContactMe from './Components/ContactMe/ContactMe';


const App = () => {
  return (
   <BrowserRouter>
      <Background>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </Background>
    </BrowserRouter>
  )
}

export default App;

import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contacts from './components/contacts'

function App() {
  const aboutId = 'about',
        homeId = 'home',
        skillsId = 'skills',
        projectsId = 'projects',
        contactsId = 'contact'

  return (
    <div 
      className=' w-full h-screen'
      style={{
        background:"rgb(22,26,48)",
        background: "linear-gradient(180deg, rgba(22,26,48,1) 25%, rgba(22,26,48,1) 35%, rgba(57,63,96,1) 50%, rgba(22,26,48,1) 65%, rgba(22,26,48,1) 76%)"
      }}
    >
      <Navbar aboutId={aboutId} homeId={homeId}/>
      <Home homeId={homeId}/>
      <About aboutId={aboutId}/>
      <Skills skillsId={skillsId}/>
      <Projects projectsId={projectsId}/>
      <Contacts contactsId={contactsId}/>
    </div>
  )
}

export default App

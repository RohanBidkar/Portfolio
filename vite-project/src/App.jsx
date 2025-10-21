import { useState } from 'react'
import './App.css'
import Hero from './components/hero'
import Stacks from './components/stacks'
import Scroll from './components/stacksintro'
import LaserFlowBoxExample from './components/lazerFlow'
import ProjectIntro from './components/projectIntro'
import Projects from './components/projects'
import Certificates from './components/certificates'
import Contact from './components/contact'


function App() {
  

  return (
    <>
     <Hero/>
     <Scroll/>
     <Stacks/>
     <Certificates/>
     <ProjectIntro/>
     <Projects/>
     <Contact/>
     <LaserFlowBoxExample/>
     
     
     </> 
    
  )
}


export default App

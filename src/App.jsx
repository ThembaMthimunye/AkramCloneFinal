import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import "./App.css"
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/Section4'
function App() {
  return (
    <div className=' bg-[#FCF5F0]'>
        <NavBar/>
        <HeroSection/>
        <Section2 />
        <Section3 />
        <Section4/>
    </div>
     
    
  )
}

export default App

import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import "./App.css"
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Section8 from './components/Section8'
import Section9 from './components/Section9'
import Footer from './components/Footer'
function App() {
  return (
    <div className=' bg-[#FCF5F0]'>
        <NavBar/>
        <HeroSection/>
        <Section2 />
        <Section3 />
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
        <Footer/>
    </div>
     
    
  )
}

export default App

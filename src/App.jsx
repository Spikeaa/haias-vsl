import React from 'react'
import Hero from './components/Hero'
import ClientLogos from './components/ClientLogos'
import Services from './components/Services'
import ValueProps from './components/ValueProps'
import Demo from './components/Demo'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import LightningCanvas from './components/LightningCanvas'
import './index.css'

function App() {
  return (
    <div style={{ minHeight: '100dvh', background: '#ffffff', position: 'relative' }}>
      <LightningCanvas />
      <Hero />
      <ClientLogos />
      <Services />
      <ValueProps />
      <Demo />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App

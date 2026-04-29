import React from 'react'
import Hero from './components/Hero'
import ClientLogos from './components/ClientLogos'
import Services from './components/Services'
import ValueProps from './components/ValueProps'
import Demo from './components/Demo'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import LightningCanvas from './components/LightningCanvas'
import './index.css'

const Divider = () => <hr className="tron-divider" />

function App() {
  return (
    <div style={{ minHeight: '100dvh', background: '#ffffff', position: 'relative' }}>
      <LightningCanvas />
      <Hero />
      <Divider />
      <ClientLogos />
      <Divider />
      <Services />
      <Divider />
      <ValueProps />
      <Divider />
      <Demo />
      <Divider />
      <FAQ />
      <Divider />
      <Footer />
    </div>
  )
}

export default App

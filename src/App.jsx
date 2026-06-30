import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ClientLogos from './Components/Clientlogos';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ClientLogos/>
    </>
  );
}

export default App;

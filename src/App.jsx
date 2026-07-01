import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ClientLogos from './Components/Clientlogos';
import Services from './Components/Services';
import PromoBanner from './Components/Promobanner';
import OurCases from './Components/OurCases';
import OtherFeatures from './Components/OtherFeatures';
import LiveCustomizerBanner from './Components/LiveCustomizerBanner';
import Testimonials from './Components/Testimonials';
import ImageGallery from './Components/ImageGallery';
import BuildingFuture from './Components/BuildingFuture';
import ContactForm from './Components/ContactForm';
import PurchaseBanner from './Components/PurchaseBanner';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ClientLogos/>
    <Services/>
    <PromoBanner/>
    <OurCases/>
    <OtherFeatures/>
    <LiveCustomizerBanner/>
    <Testimonials/>
    <ImageGallery/>
    <BuildingFuture/>
    <ContactForm/>
    <PurchaseBanner/>
    <Footer/>
    </>
  );
}

export default App;

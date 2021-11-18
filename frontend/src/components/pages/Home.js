import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import Cards from '../Cards';
import ContactForm from '../ContactForm';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Cards />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
